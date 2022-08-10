import { Card, CardActions } from "@mui/material";
import Button from "../../atoms/ButtonComponent";

interface Props {
  sell: boolean;
}

const OrderSummary = (props: Props) => {
  return (
    <div>
      <Card>
        {/* bitcon amount */}
        {/* invoice */}
        <CardActions>
          <Button varient={undefined} >{props.sell ? "Sell" : "Buy"}</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default OrderSummary;
