const Track = ({ todo }) => {
  return (
    <div>
      <div>{todo.id}</div>
      <div>{todo.todo}</div>
    </div>
  );
};

export default Track;
