const createTokenUser = (user) => {
  return {
    firstName: user.firstname,
    lastName: user.lastname,
    email: user.email,
    userId: user._id,
    interests: user.interests,
    role: user.role,
    phone: user.phone,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
};

module.exports = createTokenUser;
