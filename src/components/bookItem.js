// Importing the Card component from react-bootstrap
import Card from 'react-bootstrap/Card';

// Functional component 'BookItem' for displaying individual book information
function BookItem(props) {
  return (
    // Wrapping the entire component in a div
    <div>
      {/* Using Card component from react-bootstrap for styling */}
      <Card>
        {/* Displaying the book's title in the Card's header */}
        <Card.Header>{props.mybook.title}</Card.Header>

        {/* Card's body to contain the book details */}
        <Card.Body>
          {/* Using blockquote for styling and semantic markup */}
          <blockquote className="blockquote mb-0">
            {/* Displaying the book cover image */}
            <img src={props.mybook.cover} alt={`Cover of the book ${props.mybook.title}`} />

            {/* Displaying the author's name in the footer */}
            <footer>
              {props.mybook.author}
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

// Exporting BookItem for use in other components
export default BookItem;
