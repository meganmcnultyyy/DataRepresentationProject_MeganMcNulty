import React from "react";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import {Link } from "react-router-dom";
import axios from "axios";

export class AssessmentListing extends React.Component {
    
    constructor(){ 
        super();
        this.DeleteAssessment = this.DeleteAssessment.bind(this);
    }

    DeleteAssessment(e){ {/* Delete Book Method */}
        e.preventDefault();
        axios.delete('http://localhost:4000/api/assessment/'+this.props.assessment._id)
        .then(()=>{this.props.ReloadData()}) // once deleted, call this function 
        .catch();
    }

    render() {
        return (
            <div className="cardCSS">
                <br></br>
                <Card style={{ width: '80rem'}}>
                <Card.Body varient="primary">
                    <Card.Header className="h1">{this.props.assessment.heading}</Card.Header>
                    <br></br>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.assessment.module}</Card.Subtitle>
                    <Card.Text> 
                        {this.props.assessment.overview}
                        <br></br>
                        {this.props.assessment.dueDate}
                    </Card.Text>
                </Card.Body>
                    {/* <Button>Edit</Button> Edit Button from React Bootstrap*/}
                    <Link to={"/editAssessment/"+this.props.assessment._id} className="btn btn-primary">Edit Assessment Details</Link> {/* Click on edit button link and changes the url of the app */} 
                    <Button variant="danger" onClick={this.DeleteAssessment} >Delete Assessment from List</Button> {/* Delete Button from React Bootstrap */}
                </Card>
            </div>
        )
    }
}