import { hasPermission } from './libs/auth';
import { users, comments } from './libs/mockComments';
const user = { role: 'moderator', id: '4' };
// const author = { id: '3' };

const Page = () => {
  return (
    <>
      {comments.map((item, index) => (
        <div
          key={index}
          style={{
            padding: '0.5rem',
            border: '1px solid #000',
            borderRadius: '0.5rem',
            marginBottom: '10px',
          }}
        >
          <div style={{ fontWeight: 'bold', marginBottom: '15px' }}>
            Comentário do usuário ID: {item.author.id}
          </div>
          <div style={{ marginBottom: '10px' }}>{item.comment}</div>
          {hasPermission(user, 'delete:comments', item.author) && (
            <button>Deletar</button>
          )}{' '}
          {hasPermission(user, 'update:comments', item.author) && (
            <button>Atualizar</button>
          )}
        </div>
      ))}
    </>
  );
};

export default Page;
