import Footer from "../../organisms/Footer";
import Header from "../../organisms/Header";
import SideMenu from "../../organisms/SideMenu";
import TradeList from '../../organisms/TradeList';

const TradePage = () => {
  return (
    <div>
      <Header />
      <SideMenu/>
        <TradeList tradeList={[]} />
      <Footer />
    </div>
  );
}

export default TradePage