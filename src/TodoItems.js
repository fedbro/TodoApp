export default function TodoItems({
    todo,
    onEditClick,
    onDeleteClick
  }) {
    return (
        <div >
      <li className="list" key={todo.id}>
      <div className="list-title">
        {todo.text}</div>
        <div className="list-button">
        <button onClick={() => onEditClick(todo)}>Edit</button>
        <button onClick={() => onDeleteClick(todo.id)}>Delete</button>
        </div>
      </li>
      </div>
      
    );
  }
  