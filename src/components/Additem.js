import React, { Component } from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";

class AddItem extends Component {
  state = { show: false };

  toggleModal = () => {
    this.setState({ show: !this.state.show });
  };

  handleClose = (task) => {
    this.props.handleAdd(task);
    this.toggleModal();
  };

  render() {
    return (
      <>
        <div>
          {this.state.show && <Modal handleClose={this.handleClose}></Modal>}
        </div>
        <div>
          <h3 className="add" onClick={this.toggleModal}>
            <i className="fas fa-plus-circle"></i>
            Create New Task
          </h3>
        </div>
      </>
    );
  }
}

export default AddItem;

// const container =  document.createElement("div");
// document.body.appendChild(container);
// ReactDOM.render(<AddItem/>, container);
