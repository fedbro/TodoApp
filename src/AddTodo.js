export default function AddTodo({
    todo,
    onAddFormSubmit,
    onAddInputChange
  }) {
    return (
      <form onSubmit={onAddFormSubmit}>
        <h2>Todo</h2>
        <label htmlFor="todo">Create todo: </label>
        <input
          name="todo"
          type="text"
          placeholder="Enter new todo"
          value={todo}
          onChange={onAddInputChange}
        />
          <button type="submit">Add ToDo</button>
      </form>
    );
  }
  