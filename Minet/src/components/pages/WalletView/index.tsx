import WatchListItem from "../../molecules/ListItem";
import OverviewWalletTab from "../../molecules/WalletTab";
import Footer from "../../organisms/Footer";
import Header from "../../organisms/Header";
import SideMenu from "../../organisms/SideMenu";
import WalletList from "../../organisms/WalletList";

const WalletPage = () => {
  return (
    <div>
      <Header />
      <SideMenu/>
      <WatchListItem />
      <OverviewWalletTab/>
      <WalletList walletList={[]} />
      <Footer />
    </div>
  );
};

export default WalletPage;
