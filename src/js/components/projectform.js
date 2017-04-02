import React from 'react';
import MenuApi from '../menu/api';
import $ from "jquery";

function swap(elToDeactivate, elToActivate){
  $(elToDeactivate).addClass('hidden');
  $(elToActivate).removeClass('hidden');
}

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      color: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    let data = {"name": this.state.name, "color": this.state.color };
    MenuApi.createProject(data);
    event.preventDefault();
  }

  render() {
    return (
      <span>
        <a href="#" id="perm1" onClick={swap.bind(this, '#perm1', '#temp1')} className="adding-button">+ Add project</a>
        <div id="temp1" className="panel adding-panel hidden bg-gray">
          <form onSubmit={this.handleSubmit} className="bg-gray">
            <div className="input-group">
              <input type="text" name="name" className="form-control" onChange={this.handleInputChange} placeholder="Project Name" />
              <span className="input-group-btn">
                <input type="color" name="color" defaultValue="#ff0000" onChange={this.handleInputChange} />
              </span>
            </div>
            <div className="input-group">
              <input type="submit" className="btn btn-primary" value="Submit" />
              <a href="#" onClick={swap.bind(this, '#temp1', '#perm1')} className="btn btn-link text-muted">Close</a>
            </div>
          </form>
        </div>
      </span>
    );
  }
}

export default ProjectForm;
