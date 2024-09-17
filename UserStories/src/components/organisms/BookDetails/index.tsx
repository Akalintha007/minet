import { Grid, Typography } from "@mui/material";
import BookDetailThumbnail from "../../atoms/Thumbnail";
import BookDetailsTabs from "../../molecules/DetailsTab";

interface BookData {
  id: string;
  img: string;
  title: string;
  author: string;
  reads: string;
  tagLine:string
}



const BookDetails:React.FC<BookData> = ({id,img,title,author,tagLine}) => {
  return (
    <div id={id}>
      <Grid container>
        <Grid item>
          <Typography>{title}</Typography>
          <Typography>{tagLine}</Typography>
          <Typography>{author}</Typography>
          {/* ICON with label */}
          {/* Buttons in the grid */}
          <BookDetailsTabs />
        </Grid>
        <Grid item>
          <BookDetailThumbnail img={img}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default BookDetails;
