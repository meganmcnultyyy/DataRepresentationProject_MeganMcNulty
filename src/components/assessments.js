import React from "react";
import { AssessmentListing } from "./assessmentListing";

export class Assessments extends React.Component {
    render() {
        return this.props.assessments?.map((assessment) => { // Passed each component an assessment using props
            return <AssessmentListing assessment={assessment} key={assessment._id} ReloadData = {this.props.ReloadData}></AssessmentListing> // Passed each component an individual assessment & Key creates a unique identifier to avoid internet loop
        }

        );
    }
}