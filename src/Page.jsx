import { hasPermission } from './libs/auth';
import { users, comments } from './libs/mockComments';
const user = { id: '3', role: 'moderator', blockedBy: ['7', '14'] };

const Comment = ({ item, canDelete, canUpdate }) => {
  return (
    <div
      style={{
        padding: '0.5rem',
        border: '1px solid #000',
        borderRadius: '0.5rem',
        marginBottom: '10px',
      }}
    >
      <div style={{ fontWeight: 'bold', marginBottom: '15px' }}>
        <span>{item.id}</span>. Comentário do usuário ID: {item.author.id}
      </div>
      <div style={{ marginBottom: '10px' }}>{item.comment}</div>
      {canDelete && <button>Deletar</button>}{' '}
      {canUpdate && <button>Atualizar</button>}
    </div>
  );
};

const Page = () => {
  return (
    <>
      {comments.map((item, index) => {
        const canView = hasPermission(user, 'view:comments', item.author);
        const canDelete = hasPermission(user, 'delete:comments', item.author);
        const canUpdate = hasPermission(user, 'update:comments', item.author);

        return canView ? (
          <Comment
            key={index}
            item={item}
            canDelete={canDelete}
            canUpdate={canUpdate}
          />
        ) : (
          <div key={index}>comentário bloqueado</div>
        );
      })}
    </>
  );
};

export default Page;
