const hasPermission = (permission) => {
  return (req, res, next) => {
    if (
      req.user.role &&
      req.user.role.permissions &&
      req.user.role.permissions.includes(permission)
    ) {
      next();
    } else {
      return res.status(403).json({
        message: "You don't have sufficient permission to perform this action.",
      });
    }
  };
};

export default hasPermission;
