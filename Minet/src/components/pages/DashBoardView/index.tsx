import { Grid } from '@mui/material'
import CryptoCard from '../../molecules/CryptoCard'
import OverviewWalletTab from '../../molecules/WalletTab'
import Footer from '../../organisms/Footer'
import Header from '../../organisms/Header'
import SideMenu from '../../organisms/SideMenu'
import TradeList from '../../organisms/TradeList'
import WalletList from '../../organisms/WalletList'




const DashboardPage = () => {

  const cryptoDataa ={
    id: '',
    name: '',
    imgSrc: '',
    value: ''
  }  

  return (
    <div>
      <Header />
      <SideMenu/>
      <Grid container>
        <Grid item>
          <Grid>
            <CryptoCard cryptoData={cryptoDataa}/>
            <OverviewWalletTab/>
            {/* Illustration */}
          </Grid>
          <Grid>
            <Grid>
              <TradeList tradeList={[]}/>
            </Grid>
            <Grid>
              <WalletList walletList={[]}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item></Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default DashboardPage