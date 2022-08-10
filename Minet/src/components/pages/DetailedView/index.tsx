import { Grid } from '@mui/material'
import WatchListItem from '../../molecules/ListItem'
import OverviewWalletTab from '../../molecules/WalletTab'
import Footer from '../../organisms/Footer'
import Header from '../../organisms/Header'
import SideMenu from '../../organisms/SideMenu'

const DetailsPage = () => {
  return (
    <div>
      <Header />
      <SideMenu/>
      <WatchListItem />
      <OverviewWalletTab/>
      <Grid container>
        <Grid item>
          {/* Content */}
          {/* Content */}
        </Grid>
        <Grid item>
          {/* Prices */}
        </Grid>
      </Grid>
      <Footer/>
    </div>
  );
}

export default DetailsPage