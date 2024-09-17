import { Grid } from '@mui/material';
import BookListItem from '../../molecules/BookListItem';

interface BookData {
  id: string;
  img: string;
  title: string;
  author: string;
  reads: string;
  position:string;
}

interface Props {
  books: BookData[];
}

const BookList = ({books}: Props) => {
   return (
     <div>
       <Grid container>
         {books.map((book) => {
           return (
             <Grid item>
               <BookListItem id={book.id} img={book.img} title={book.title} author={book.author} reads={book.reads} position={book.position} />
             </Grid>
           );
         })}
       </Grid>
     </div>
   );
}

export default BookList