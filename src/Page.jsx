import { hasPermission } from './libs/auth';
import { users, comments } from './libs/mockComments';
const user = { id: '3', role: 'admin', blockedBy: ['7', '14'] };

const Comment = ({ item }) => {
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
      {hasPermission(user, 'delete:comments', item.author) && (
        <button>Deletar</button>
      )}{' '}
      {hasPermission(user, 'update:comments', item.author) && (
        <button>Atualizar</button>
      )}
    </div>
  );
};

const Page = () => {
  return (
    <>
      {comments.map((item, index) =>
        hasPermission(user, 'view:comments', item.author) ? (
          <Comment item={item} key={index} />
        ) : (
          <div>cometário bloqueado</div>
        )
      )}
    </>
  );
};

export default Page;
