// Padrão para configurar as permissões:
// role: ['action:resource']

const ROLES = {
  admin: [
    'view:comments',
    'create:comments',
    'update:comments',
    'delete:comments',
  ],
  moderator: [
    'view:own.comments',
    'create:comments',
    'update:own.comments',
    'delete:comments',
  ],
  user: [
    'view:nonBlockedUser.comments',
    'create:comments',
    'update:own.comments',
    'delete:own.comments',
  ],
};

export const hasPermission = (user, permission, author = null) => {
  if (ROLES[user.role].includes(permission)) {
    return true;
  }

  if (author) {
    const [action, resource] = permission.split(':');

    if (
      ROLES[user.role].includes(`${action}:own.${resource}`) &&
      author.id === user.id
    ) {
      return true;
    }

    if (
      ROLES[user.role].includes(`${action}:nonBlockedUser.${resource}`) &&
      !author.blockedBy.includes(user.id)
    ) {
      return true;
    }
  }

  return false;
};
