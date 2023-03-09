import React, { Component } from "react";
import { getProject, createProject } from "./../../actions/ProjectAction";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import classnames from "classnames";

class UpdateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      projectName: "",
      projectIdentifier: "",
      description: "",
      start_date: "",
      end_date: "",
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getProject(id);
  }

  componentWillReceiveProps(nextProps) {
    const {
      id, // is equal to const id = nextProps.project.id;
      projectName,
      projectIdentifier,
      description,
      start_date,
      end_date,
    } = nextProps.project;
    this.setState({
      id, //genrally we wil be writing id:this.id -->to get value into this local id varibale from const id
      projectName, //since they are hvaing same names ..so setsate will be
      // getting values directly from const in ablove
      projectIdentifier,
      description,
      start_date,
      end_date,
    });
  }

  onChange = (event) => {
    // console.log("--on Change Trrigeereed--",event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmit = (event) => {
    event.preventDefault();
    const updatedProject = {
      id: this.state.id,
      projectName: this.state.projectName,
      projectIdentifier: this.state.projectIdentifier,
      description: this.state.description,
      start_date: this.state.start_date,
      end_date: this.state.end_date,
    };
    // console.log("newww projectt",newProject);
    this.props.createProject(updatedProject, this.props.history);
  };
  render() {
    return (
      <div>
        <div className="project">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Edit Project form</h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg "
                      placeholder="Project Name"
                      name="projectName"
                      value={this.state.projectName}
                      onChange={this.onChange}
                    />
                                         
                  </div>
                                         
                  <div className="form-group">
                                             
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Unique Project ID"
                      name="projectIdentifier"
                      disabled
                      value={this.state.projectIdentifier}
                    />
                                         
                  </div>
                                                         
                  <div className="form-group">
                                               
                    <textarea
                      className="form-control form-control-lg"
                      placeholder="Project Description"
                      name="description"
                      onChange={this.onChange}
                      value={this.state.description}
                    ></textarea>
                                         
                  </div>
                   <h6>Start Date</h6>           
                  <div className="form-group">
                                             
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="start_date"
                      onChange={this.onChange}
                      value={this.state.start_date}
                    />
                                       
                  </div>
                  <h6>Estimated End Date</h6>                 
                  <div className="form-group">
                                             
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="end_date"
                      onChange={this.onChange}
                      value={this.state.end_date}
                    />
                                     
                  </div>
                                   
                  <input
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                  />
                                 
                </form>
                           
              </div>
                   
            </div>
             
          </div>
           
        </div>
      </div>
    );
  }
}

UpdateProject.propTypes = {
  getProject: PropTypes.func.isRequired,
  createProject: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  project: state.projects.project,
});
export default connect(mapStateToProps, { getProject, createProject })(
  UpdateProject
);
