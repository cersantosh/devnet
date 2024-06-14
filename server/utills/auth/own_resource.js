const isOwnResource = (loggedInUser, createdUser) => {
  return loggedInUser._id === createdUser;
};

export default isOwnResource;
