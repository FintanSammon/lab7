// Importing useState hook from React and axios for HTTP requests
import { useState } from "react";
import axios from "axios";

// Defining the Create component for book creation
function Create() {
    // State variables to store book information: title, cover, and author
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');
    
    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Logging the current state values to the console
        console.log("Title: "+ title + " Cover:" + cover + " Author: " + author);

        // Creating a book object with the state values
        const book = {
            title: title,
            cover: cover,
            author: author
        }

        // Sending a POST request to the server with the new book data
        axios.post('http://localhost:4000/api/book', book)
        .then()
        .catch();
    }
    
    return (
        <div>
            <h2>This is my Create Component</h2>
            {/* Form for creating a new book */}
            <form onSubmit={handleSubmit}>
                {/* Input field for the book's title */}
                <div className="form-group">
                    <label>Add Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>

                {/* Input field for the book's cover */}
                <div className="form-group">
                    <label>Add Book Cover: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>

                {/* Input field for the book's author */}
                <div className="form-group">
                    <label>Add Book Author: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>

                {/* Submit button */}
                <div>
                    <input type="submit" value="Create Book" />
                </div>
            </form>
        </div>
    );
}

// Exporting the Create component for use in other parts of the application
export default Create;
