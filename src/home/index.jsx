import Header from "@/header/index.jsx";
import Footer from "@/footer/index.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col flex-grow">
        <Hero />
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
