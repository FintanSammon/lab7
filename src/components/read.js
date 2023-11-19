// Importing necessary hooks and components
import { useEffect, useState } from "react";
import Books from "./books";
import axios from "axios";

// Functional component 'Read' to fetch and display book data
function Read() {
    // State to store the book data
    const [data, setData] = useState([]);

    // useEffect hook to perform side effects in this functional component
    useEffect(() => {
        // Using axios to fetch book data from the API
        axios.get('http://localhost:4000/api/books')
            .then(
                (response) => {
                    // Updating the state with the data received from the server
                    setData(response.data);
                }
            )
            .catch(
                (error) => {
                    // Logging errors to the console if the request fails
                    console.log(error);
                }
            );
    }, []); // Empty dependency array to run the effect once on component mount

    return (
        <div>
            <h2>Hello from my Read Component</h2>
            {/* Passing the fetched book data to the Books component as props */}
            <Books myBooks={data}></Books>
        </div>
    );
}

// Exporting the Read component for use in other parts of the app
export default Read;
