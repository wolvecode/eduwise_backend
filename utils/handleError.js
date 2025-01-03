
const handleValidationError = (error) => {
  if (error.name === "ValidationError") {
    const messages = Object.values(error.errors).map((val) => val.message);
    return { statusCode: 400, error: messages.join(", ") };
  }
  return { statusCode: 500, error: "Server error" };


};

// utils/errorHandler.js
const extractValidationErrors = (error) => {
  if (error.name === "ValidationError") {
    return Object.values(error.errors)
      .map((err) => err.message)
      .join(", ");
  }
  return "An unexpected error occurred";
};



module.exports = { handleValidationError, extractValidationErrors };


