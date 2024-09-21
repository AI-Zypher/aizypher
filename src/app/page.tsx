import First from "../components/firstpage";
import Second from "../components/second_comp";
import SponsorsPage from "../components/Sponsorpage";
import Third from "../components/third_section";
import Fourth from "../components/mirroimage";
import NavBar from "../components/navbar";
import Footer from "../components/footerpage";
import Maps from "../components/maps";

export default function Home() {
  return (
    <div className="App">
      <NavBar />
      <First />
      <Second />
      <Fourth />
      <Maps /> 
      <Third />
      <SponsorsPage />
      {/* <Event /> */}
      <Footer />
      {/* <Dashboard /> */}
    </div>
  );
}
