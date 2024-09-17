import { Grid } from '@mui/material';
import BookCard from '../../molecules/BookCard';

interface BookData {
  id: string;
  img: string;
  title: string;
  author: string;
  reads: string;
}

interface Props {
  books: BookData[];
}

const BooksGrid = ({books}:Props) => {
  return (
    <div>
        <Grid container>
            {
                books.map(book => {
                    return <Grid item><BookCard id={book.id} img={book.img} title={book.title} author={book.author} reads={book.reads} /></Grid>
                })
            }
        </Grid>
    </div>
  )
}

export default BooksGrid