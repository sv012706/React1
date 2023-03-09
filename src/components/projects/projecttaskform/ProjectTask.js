import React, { Component } from 'react';
import { Link } from "react-router-dom";


 class ProjectTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            summary: "",
            acceptanceCriteria: " ",
            dueDate: "",
            priority: "",
            status: "",
        };
       // this.onChange=this.onChange.bind(this);
      }
      onChange=(event)=>{
          //console.log("------onchange triggered-------",event.target.value);
          this.setState({[event.target.name] : event.target.value });
      }
      onSubmit = (event) => {
        event.preventDefault();
        const newProject = {
            summary: this.state.summary,
            acceptanceCriteria: this.state.acceptanceCriteria,
            dueDate: this.state.dueDate,
            priority: this.state.priority,
            status: this.state.status,
        };
        console.log("----------newww projectt--------",newProject);
      
      };
    render() {
        return (
            <div className="add-PBI">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <Link to="/projectboard" className="btn btn-info">
                            Back to Project Board
                        </Link>
                        <h4 className="display-4 text-center">Add Project Task</h4>
                        <p className="lead text-center">Project Name + Project Code</p>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type="text" 
                                className="form-control form-control-lg"
                                 name="summary" 
                                 placeholder="Project Task summary"
                                 value={this.state.summary}
                                 onChange={this.onChange} />
                            </div>
                            &nbsp;&nbsp;
                            <div className="form-group">
                                <textarea className="form-control form-control-lg" 
                                placeholder="AcceptanceCriteria"
                                 name="acceptanceCriteria"
                                 value={this.state.acceptanceCriteria}
                                 onChange={this.onChange}></textarea>
                            </div>
                            &nbsp;
                            <h6>Due Date</h6>
                            <div className="form-group">
                                <input type="date"
                                 className="form-control form-control-lg"
                                 name="dueDate" 
                                 value={this.state.dueDate}
                                 onChange={this.onChange}/>
                            </div>
                            &nbsp;
                            <div className="form-group">
                                <select className="form-control form-control-lg" 
                                name="priority"
                                value={this.state.priority}
                                onChange={this.onChange}>
                                    <option value={" "}>Select Priority</option>
                                    <option value={"High"}>High</option>
                                    <option value={"Medium"}>Medium</option>
                                    <option value={"Low"}>Low</option>
                                </select>
                            </div>
                            &nbsp;
                            <div className="form-group">
                                <select className="form-control form-control-lg"
                                 name="status"
                                 value={this.state.status}
                                 onChange={this.onChange}>
                                    <option value="">Select Status</option>
                                    <option value="TO_DO">TO DO</option>
                                    <option value="IN_PROGRESS">IN PROGRESS</option>
                                    <option value="DONE">DONE</option>
                                </select>
                            </div>
    
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default ProjectTask;