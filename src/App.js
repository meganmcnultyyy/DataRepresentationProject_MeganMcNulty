import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap StyleSheet
import Container from 'react-bootstrap/Container'; // Bootstrap Navbar
import Nav from 'react-bootstrap/Nav'; // Bootstrap Navbar
import Navbar from 'react-bootstrap/Navbar'; // Bootstrap Navbar
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"; // Importing Routing 
import { AllAssessments } from './components/allAssessments'; // Read Class from allAssessments.js
import { CreateAssessment } from './components/createAssessment'; // Create Class from createAssessments.js
import { EditAssessment } from './components/editAssessment'; // Import editAssessment component


class App extends React.Component { // Changing to a function and extneds React Component to make the class a component

  render() { // renders HTML to the web page by using a function

    return ( //  output of the method or function.
      <Router> {/* Routing */}
        <div className="App">
          <Navbar className="colour-nav justify-content-center" variant="dark"> {/* Bootstrap Navbar */}
            <Container>
              <Nav className="me-auto">
                <Nav.Link href="/allAssessments">Assessments</Nav.Link> {/* Navbar Links  */}
                <Nav.Link href="/createAssessment">New Assessment</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          <Routes> {/* Routing the navbar to display the content, read and footer components */}
            <Route path='/' element={<AllAssessments></AllAssessments>} exact></Route>
            <Route path='/allAssessments' element={<AllAssessments></AllAssessments>} exact></Route>
            <Route path='/createAssessment' element={<CreateAssessment></CreateAssessment>} exact></Route>
            <Route path='/editAssessment/:id' element={<EditAssessment></EditAssessment>}></Route> {/* Routing to show Edit Component */}
          </Routes>
        </div>
      </Router>
    );

  }

}

export default App;
