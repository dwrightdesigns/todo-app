import React from "react";

const Modal = ({ handleClose }) => {
  const [task, setTask] = React.useState("");

  return (
    <div className="modal display-block">
      <section className="modal-main">
        <input type="text" onChange={(e) => setTask(e.target.value)}></input>
        <button
          className="button"
          onClick={() => handleClose(task)}
          disabled={task === ""}
        >
          Add Task
        </button>
      </section>
    </div>
  );
};

export default Modal;
