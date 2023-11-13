//For bookItem it displays 
import Card from 'react-bootstrap/Card';
function BookItem(props) {
  return (
    <div>


      <Card>
        <Card.Header>{props.mybook.title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={props.mybook.cover}></img>
            <footer>
              {props.mybook.author}
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BookItem;