import Slider from "./components/Slider/Slider";
import Design from "./components/Design/Design";
import Collections from "./components/Collections/Collections";
import Services from "./components/Services/Services";
import Popular from "./components/Popular/Popular";
import Ethical from "./components/Ethical/Ethical";
import Beautiful from "./components/Beautiful/Beautiful";
import Subscribe from "./components/Subscribe/Subscribe";
import Photos from "./components/Photos/Photos";
import Unique from "./components/Unique/Unique"
const Home = () => {
  return (
    <div className="home">
      <Slider />
      <Design />
      <Collections />
      <Services />
      <Popular />
      <Unique />
      <Ethical />
      <Beautiful />
      <Subscribe />
      <Photos /> 
    </div>
  );
};

export default Home;
