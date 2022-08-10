import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import React from "react";
import Button from "../../atoms/ButtonComponent";

const ListItem = () => {
  return (
    <div>
      <Card>
        <CardMedia>
          <img src="" alt="" />
        </CardMedia>
        <CardContent>
          <Grid>
            {/* Crypto Name */}
            {/* Crypto Name Shortcut*/}
            {/* Hike */ }
          </Grid>
          <Grid>
            {/* Market Cap */}
            {/* Vol.24H */}
            {/* Circulating Supply */}
          </Grid>
          <Button varient={undefined}>Add To Watchlist</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ListItem;
