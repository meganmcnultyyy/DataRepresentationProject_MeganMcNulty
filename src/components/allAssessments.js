import React from "react";
import { Assessments } from "./assessments"; // Books Component from Books.js
import axios from "axios"; // Importing axios to work as our web client

export class AllAssessments extends React.Component { //Accessing the React Functionality & marked for export
    constructor(){
        super();
        this.ReloadData = this.ReloadData.bind(this); 
    }

    ReloadData(){ // Reload data when data has changed
        axios.get('http://localhost:4000/api/assessments') 
        .then((response)=>{
            this.setState({assessments:response.data}) 
        }) 
        .catch((error)=>{ 
            console.log(error);
        })
    }

    componentDidMount(){ // When component becomes active in the view it will tell it what to do 
        axios.get('http://localhost:4000/api/assessments') // Promise // My API
        .then((response)=>{
            this.setState({assessments:response.data}) // My JSON mybooks
        }) // if everything works correctly, html response comes back and set the state
        .catch((error)=>{  //used if errors occur
            console.log(error);
        })
    }

    state = {// Holding the components data
        assessments: [ ]  // An array of books
    }

    render() {
        return ( // Where the visual content of this component will be added
            <div>
                <br></br>
                <h3>LIST OF ALL ASSESSMENTS DUE</h3>
                <Assessments assessments={this.state.assessments} ReloadData={this.ReloadData}></Assessments> {/* Imported from the Books Component & state  is used to contain data or information about the component*/}
            </div>
        );
    }
}