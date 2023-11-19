// Importing styles and dependencies
import './App.css'; // Custom CSS for the app
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap for styling
import Header from './components/Header'; // Header component (unused in this snippet)
import Content from './components/Content'; // Content component to display main content
import Footer from './components/Footer'; // Footer component (unused in this snippet)
import Container from 'react-bootstrap/Container'; // Bootstrap Container for layout
import Nav from 'react-bootstrap/Nav'; // Bootstrap Nav for navigation links
import Navbar from 'react-bootstrap/Navbar'; // Bootstrap Navbar for a navigation bar

// Importing React Router components for client-side routing
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Read from './components/read'; // Read component for displaying books
import Create from './components/create'; // Create component to add new books
import Books from './components/books'; // Books component (unused in this snippet)

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        {/* Navigation bar using Bootstrap */}
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              {/* Navigation links */}
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        
        {/* Defining Routes for the app */}
        <Routes>
          {/* Route for the home page */}
          <Route path='/' element={<Content></Content>}></Route>
          {/* Route for the read page */}
          <Route path='/read' element={<Read></Read>}></Route>
          {/* Route for the create page */}
          <Route path='/create' element={<Create></Create>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// Exporting the App component for use in the index.js
export default App;
