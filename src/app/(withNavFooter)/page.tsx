import Banner from "@/components/PageComponents/HomePage/Banner";
import UniquePrice from "./home-pages/unique-prices/page";
import PopularItems from "./home-pages/popular-items/page";
import NewArrivals from "./home-pages/new-arrivals/page";
import BetterExperience from "./home-pages/better-experience/page";
import BusinessSales from "./home-pages/business-sales/page";
import NewsLetter from "./home-pages/news-letter/page";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <UniquePrice/>
      <NewArrivals/>
      <PopularItems/>
      <BetterExperience/>
      <BusinessSales/>
      <NewsLetter/>
    </div>
  );
};

export default Home;
