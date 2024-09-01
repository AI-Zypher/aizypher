import First from "../components/firstpage";
import Second from "../components/second_comp";
import SponsorsPage from "../components/Sponsorpage";
import Third from "../components/third_section";
import Fourth from "../components/mirroimage";
import Event from "../components/Event";

export default function Home() {
  return (
    <div className="App">
      <First />
      <Second />
      <Fourth />
      <Third />
      <SponsorsPage />
      {/* <Event /> */}
    </div>
  );
}
