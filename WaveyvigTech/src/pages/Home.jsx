import React from "react";
import WhyChoose from "./Home/WhyChoose";
import OurSolution from "./Home/OurSolution";
import OurServices from "./Home/OurServices";
import HeroSection from "./Home/HeroSectionmain"

function Home() {

  return (
    <div>
      {/* Hero Section */}
       <HeroSection />

      {/* Our solution */}
      <OurSolution />

      {/* Our Services Section */}

      <OurServices />

      {/* why choose section */}
      <WhyChoose />
    </div>
  );
}

export default Home;
