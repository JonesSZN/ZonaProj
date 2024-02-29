import { Header } from "./Header";
import { Hero } from "./Hero";
import { Founded } from "./Founded";
import { Explore } from "./Explore";
import { Stats } from "./Stats";
import { Service } from "./Service";
import { Articles } from "./Articles";
import { Testimonials } from "./Testimonials";
import { Design } from "./Design";
import { Footer } from "./Footer";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Hero />
      <Founded />
      <Explore />
      <Stats />
      <Service />
      <Articles />
      <Testimonials />
      <Design />
      <Footer />
    </div>
  );
}

export default App;
