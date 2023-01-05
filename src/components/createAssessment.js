import React from "react";
import axios from "axios"; // A JS Library used to make HTTP Requests from Node.js
import { Navigate, useNavigate } from "react-router-dom";

export class CreateAssessment extends React.Component { //Accessing the React Functionality & marked for export

    constructor() { // Binding events
        super(); // inheriting parents constructer
        this.handleSubmit = this.handleSubmit.bind(this); // the correct instance will get invoked
        this.onChangeAssessmentHeading = this.onChangeAssessmentHeading.bind(this);
        this.onChangeAssessmentModule = this.onChangeAssessmentModule.bind(this);
        this.onChangeAssessmentOverview = this.onChangeAssessmentOverview.bind(this);
        this.onChangeAssessmentDueDate = this.onChangeAssessmentDueDate.bind(this);

        this.state = {  
            heading: '',
            module: '',
            overview: '',
            dueDate: ''
        }
    }

    handleSubmit(e) { // When Add Assessment button is clicked it will invoke this method
        e.preventDefault(); // cancels the event, action of the event will not occur
       
        console.log(`button clicked
        ${this.state.heading},,
        ${this.state.module},
        ${this.state.overview},
        ${this.state.dueDate}`); // Print out to console
        
        const assessment = {
            heading: this.state.heading,
            module: this.state.module,
            overview: this.state.overview,
            dueDate: this.state.dueDate
        }

        axios.post('http://localhost:4000/api/assessments',assessment) // Axois Post makes HTTP request with post method and send to url 
        .then() // callback function 
        .catch(); // a function with possible error

        
        this.setState({ // re-rendered with updated state
            heading: '',
            module: '',
            overview:'',
            dueDate: ''
        })
    }

    onChangeAssessmentHeading(e) { // When the value inside the field changes updates the state
        this.setState({
            heading: e.target.value
        })
    }

    onChangeAssessmentModule(e) { // When the value inside the field changes updates the state
        this.setState({
            module: e.target.value
        })
    }

    onChangeAssessmentOverview(e) { // When the value inside the field changes updates the state
        this.setState({
            overview: e.target.value
        })
    }

    onChangeAssessmentDueDate(e) { // When the value inside the field changes updates the state
        this.setState({
            dueDate: e.target.value
        })
    }

    render() {
        return ( // Where the visual content of this component will be added
            <div>
                <br></br>
                <h3>Add a new Assessment to your list</h3>
                <br />
                <form onSubmit={this.handleSubmit}> {/* Assessment Form with submission button */}
                    <div className="form-group">
                        <label>Add Assessment Heading: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.heading}
                            onChange={this.onChangeAssessmentHeading}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Module: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.module}
                            onChange={this.onChangeAssessmentModule}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Overview of Assessment: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.overview}
                            onChange={this.onChangeAssessmentOverview}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Due Date of Assessment: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.dueDate}
                            onChange={this.onChangeAssessmentDueDate}
                        />
                    </div>

                <br />

                    <input type="submit" value="Add Assessment" />
                </form>

                <br />

                

            </div>
        );
    }
}