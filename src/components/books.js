// Importing the BookItem component for individual book display
import BookItem from "./bookItem";

// Defining the Books functional component for rendering a list of books
function Books(props){
    // Using map function to iterate over each book in the myBooks prop
    return props.myBooks.map(
        (book) => {
            // For each book, return a BookItem component
            // Passing the book object as a prop to BookItem
            // Using the book's _id as a key for React's rendering optimization
            return <BookItem mybook={book} key={book._id}></BookItem>
        }
    );
}

// Exporting the Books component for use in other parts of the application
export default Books;
