import { useRef } from "react";
import { MdAdd } from "react-icons/md";
function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-5">
          <input
            className="inputText"
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input className="inputDate" type="date" ref={dueDateElement} />
        </div>
        <div className="col-3">
          <button type="submit" className="btn btn-success add-button">
            <MdAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
