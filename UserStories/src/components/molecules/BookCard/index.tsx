import { Card, CardMedia, LinearProgress, Typography } from "@mui/material";
import TypoWithIcon from "../../atoms/TypoWithIcon";

interface BookData {
  id: string;
  img: string;
  title: string;
  author: string;
  reads: string;
}

const BookCard: React.FC<BookData> = ({ img, title, author, id }) => {
  return (
    <div id={id}>
      <Card>
        <CardMedia>
          <img src={img} />
        </CardMedia>
        <Typography>{title}</Typography>
        <Typography>{author}</Typography>
        <TypoWithIcon />
        <LinearProgress />
      </Card>
    </div>
  );
};

export default BookCard;
