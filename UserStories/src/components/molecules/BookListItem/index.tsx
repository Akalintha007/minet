import { Grid, SvgIcon, Typography } from "@mui/material";

interface BookData {
  id: string;
  img: string;
  title: string;
  author: string;
  reads: string;
  position: string;
}


const BookListItem:React.FC<BookData> = ({ id, img, title, author, position }) => {
  return (
    <div id={id}>
      <Grid container direction={"row"}>
        <Grid item>
          <SvgIcon />
          <Typography>{position}</Typography>
        </Grid>
        <Grid item>
          <Grid container direction={"row"}>
            <Grid item>
              <img src={img} alt="" />
            </Grid>
            <Grid item>
              <Grid container direction={"column"}>
                <Grid item>
                  <Typography>{title}</Typography>
                </Grid>
                <Grid item>
                  <Typography>{author}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default BookListItem;
