import { Card, CardActions } from '@mui/material'
import Button from '../../atoms/ButtonComponent';

interface Props {
    sell: boolean
}

const OrderSummaryItem = (props: Props) => {
  return (
    <div>
      <Card>
        {/* order details */}
        {/* order details */}
        <CardActions>
            <Button varient={undefined}>button</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default OrderSummaryItem