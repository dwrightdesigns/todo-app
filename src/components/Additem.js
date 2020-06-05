import React, { Component } from "react";
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
        <div className="add">
          <h3 onClick={this.toggleModal}>
            <i className="fas fa-plus-circle"></i>
            Add Item
          </h3>
        </div>
      </>
    );
  }
}

export default AddItem;
