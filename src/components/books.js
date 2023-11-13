import BookItem from "./bookItem";

function Books(props){
    return props.myBooks.map(
        (book)=>{
            return <BookItem mybook={book} key={book._id}></BookItem>
         }
    );
}

export default Books;