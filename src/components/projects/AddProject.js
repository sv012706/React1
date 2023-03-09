import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "./../../actions/ProjectAction";
import PropTypes from "prop-types";
import classnames from "classnames";
//PropTypes: to ensure that components use the correct data type and pass the right data,
class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: "",
      projectIdentifier: " ",
      description: "",
      start_date: "",
      end_date: "",
      errors: {}, //form error realted to any field is mapped to the error with this errors object
    };
  }

  //this method will work before this component recieve new props
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        //whenever component recieves props error
        //..we are adding the props error to object errors in this component
        errors: nextProps.errors,
      });
    }
  }
  onChange = (event) => {
    // console.log("--on Change Trrigeereed--",event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmit = (event) => {
    event.preventDefault();
    const newProject = {
      projectName: this.state.projectName,
      projectIdentifier: this.state.projectIdentifier,
      description: this.state.description,
      start_date: this.state.start_date,
      end_date: this.state.end_date,
    };
    // console.log("newww projectt",newProject);
    this.props.createProject(newProject, this.props.history);
  };
  render() {
    const {errors}=this.state; ///is same as --const errors=this.state.errors; //know as desturcting
    return (
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Create Project form</h5>
              <hr />
              <form onSubmit={this.onSubmit}>
                <h6>projectName</h6>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg ",{"is-invalid":errors.projectName})}
                    placeholder="Project Name"
                    name="projectName"
                    value={this.state.projectName}
                    onChange={this.onChange}
                  />
                  {errors.projectName&&(
                    <div className="invalid-feedback">{errors.projectName}</div>
                  )}
                </div>
                <h6>ProjectId</h6>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg ",{"is-invalid":errors.projectIdentifier})}
                    placeholder="Unique Project ID"
                    name="projectIdentifier"
                    value={this.state.projectIdentifier}
                    onChange={this.onChange}
                  />
                  {errors.projectIdentifier&&(
                    <div className="invalid-feedback">{errors.projectIdentifier}</div>
                  )}
                </div>
                <h6>Desc</h6>
                <div className="form-group">
                  <textarea
                  className={classnames("form-control form-control-lg ",{"is-invalid":errors.description})}
                    placeholder="Project Description"
                    name="description"
                    value={this.state.description}
                    onChange={this.onChange}
                  ></textarea>
                  {errors.description&&(
                    <div className="invalid-feedback">{errors.description}</div>
                  )}
                </div>

                <h6>Start Date</h6>

                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="start_date"
                    value={this.state.start_date}
                    onChange={this.onChange}
                  />
                  <p>{errors.start_date}</p>
                </div>

                <h6>Estimated End Date</h6>

                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="end_date"
                    value={this.state.end_date}
                    onChange={this.onChange}
                  />
                  <p>{errors.end_date}</p>
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
    );
  }
}
AddProject.propTypes = {
  //createProject is the property and
  //we are specifying which datatype its is(in this case it is a fucntion ..so.. prop.func)
  createProject: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

// mapStateToProps(container) is called every time the store state changes.(it is a Container)
// mapStateToProps(container) receives the entire store state,
//and should return an object of data(relvante data). this component needs
const mapStateToProps = (state) => ({
  //error on left side is the error object present inside the constructtor
  //to the error object we are providing error data from state
  errors: state.errors,
});
export default connect(mapStateToProps, { createProject })(AddProject);
//In AddProject method  we are passing CreateProject datatype..
//So proptypes make sure we are passing correct datatype
//mapStateToProps()
