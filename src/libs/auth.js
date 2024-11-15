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
    'view:comments',
    'create:comments',
    'update:own.comments',
    'delete:comments',
  ],
  user: [
    'view:comments',
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
    return (
      ROLES[user.role].includes(`${action}:own.${resource}`) &&
      author.id === user.id
    );
  }

  return false;
};
