import { Grid, Icon } from "@mui/material";
import Button from "../../atoms/ButtonComponent";
import Footer from "../../organisms/Footer";
import Header from "../../organisms/Header";

interface Props {
  sell?: boolean;
}

const PaymentPage = (props: Props) => {
  return (
    <div>
      <Header />
      <Icon />
      {/* Quantity */}
      {/* Content */}
      <Grid>
        <Button varient={undefined}>
          {props.sell ? "buy crypto" : "sell crypto"}
        </Button>
        <Button varient={undefined}>GO TO USD COIN</Button>
      </Grid>
      <Footer />
    </div>
  );
};

export default PaymentPage;
