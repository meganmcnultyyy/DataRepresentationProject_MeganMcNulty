import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export function EditAssessment(props) {
    // The useParams hook returns an object of key/value pairs of
    // the dynamic params from the current URL that were matched by
    //the <Route path>.
    let { id } = useParams();
    // update arrays using the React useState()
    // and without the Array object's push() method
    const [heading, setHeading] = useState("");
    const [module, setModule] = useState("");
    const [overview, setOverview] = useState("");
    const [dueDate, setDueDate] = useState(""); // ability to set values
    // useNavigate return a function that we can use to navigate
    const navigate = useNavigate(); // allows you the channge the url of the app
    //useEffect Hook is similar componentDidMount
    useEffect(() => { // Go to server and get record with following id
        //axios is a promised based web client
        //make a HTTP Request with GET method and pass as part of the
        //url.
        axios.get('http://localhost:4000/api/assessment/' + id)
            .then((response) => { // respoonse from record associated with id
                // Assign Response data to the arrays using useState.
                setHeading(response.data.heading); // update fields
                setModule(response.data.module);
                setOverview(response.data.overview);
                setDueDate(response.data.dueDate);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);
    const handleSubmit = (event) => { // Sends record back to database // edit assessment calls handleSubmit
        event.preventDefault();
        const newAssessment = { // Generate new object
            id: id,
            heading: heading,
            module: module,
            overview: overview,
            dueDate: dueDate
        };
        axios.put('http://localhost:4000/api/assessment/' + id, newAssessment) // Axois called to overwrite // pass up new object
            .then((res) => {
                console.log(res.data); // response is the new editted data displayed to the console
                navigate('/allAssessments'); // navigates page back to /allAssessments after edited 
            });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Assessment Heading: </label>
                    <input type="text"
                        className="form-control"
                        value={heading} 
                        onChange={(e) => setHeading(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Module: </label>
                    <input type="text"
                        className="form-control"
                        value={module}
                        onChange={(e) => setModule(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Assessment Overview: </label>
                    <input type="text"
                        className="form-control"
                        value={overview}
                        onChange={(e) => setOverview(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Edit DueDate: </label>
                    <input type="text"
                        className="form-control"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                    />
                </div>
                
                <div className="form-group"> 
                    <input type="submit" value="Edit Assessment" className="btn btn-primary"></input>
                </div>
</form>
</div>
);
}
    