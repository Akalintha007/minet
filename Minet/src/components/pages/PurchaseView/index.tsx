import { Grid } from '@mui/material';
import React from 'react'
import DeliveryDropDown from '../../molecules/DeliveryDropDown';
import WatchListItem from '../../molecules/ListItem';
import CryptoCardGrid from '../../organisms/CryptoCardGrid';
import Footer from '../../organisms/Footer';
import Header from '../../organisms/Header';
import OrderSummary from '../../organisms/OrderSummary';
import SideMenu from '../../organisms/SideMenu';

interface Props {
    sell: boolean
}

const Purchase = (props:Props) => {
  return (
    <div>
      <Header />
      <SideMenu/>
      <Grid container>
        <Grid item>
        </Grid>
        <CryptoCardGrid cryptos={[]}/>
        <WatchListItem />
        {/* Prices */}
        <DeliveryDropDown />
      </Grid>
      <Grid item>
        <OrderSummary sell={props.sell} />
      </Grid>
      <Footer />
    </div>
  );
}

export default Purchase