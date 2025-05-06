"use client";

import AboutSection from "./about-section";
import Faqs from "./faqs";
import HeroSection from "./hero-section";
import JoinCommunity from "./join-community";
import { sections } from "./navbar";
import Roadmap from "./roadmap";
import SlickGridSlider from "./slick-grid-slider";
import TokenomicsAndFinancials from "./tokenomics-financial";

const Home = () => {
  return (
    <div className="">
      {sections.map((section) => (
        <section key={section} id={section}>
          {section === "home" && (
            <>
              <div className="px-6">
                <div className="max-w-[1240px] w-full mx-auto">
                  <HeroSection />
                </div>
              </div>
              {/* <div className="max-w-[1240px] w-full mx-auto px-6">
                <div className="pt-32">
                  <HowToBuy />
                </div>
              </div> */}
            </>
          )}

          <div className="max-w-[1240px] w-full mx-auto px-6">
            {section === "about" && (
              <div className="pt-32">
                <AboutSection />
              </div>
            )}

            {/* {section === "buy" && (
              <div className="pt-32">
                <HowToBuy />
              </div>
            )} */}

            {section === "tokenomics" && (
              <div className="pt-32">
                <TokenomicsAndFinancials />
              </div>
            )}

            {section === "roadmap" && (
              <div className="pt-32">
                {" "}
                <Roadmap />
              </div>
            )}

            {section === "team" && (
              <div className="pt-32">
                <SlickGridSlider />
              </div>
            )}
            {section === "faqs & community" && (
              <div className="pt-32">
                <Faqs />
              </div>
            )}

            {section === "faqs & community" && (
              <div className="pt-32">
                {" "}
                <JoinCommunity />{" "}
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Navbar */}
      {/* <nav className="fixed top-0 left-0 w-full bg-gray-900 py-4 px-6 flex justify-center space-x-6 z-50">
        {sections.map((section) => (
          <button
            key={section}
            className={`text-lg cursor-pointer ${
              activeSection === section
                ? "text-purple-500 font-bold"
                : "text-gray-400"
            }`}
            onClick={() => scrollToSection(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}

        <Button variant={"secondary"} asChild>
          <Link href={"/login"}>Login</Link>
        </Button>
      </nav> */}

      {/* Footer */}
      <footer className="py-10 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} TAWT. All rights reserved.</p>
        <p>Privacy Policy | Terms & Conditions</p>
      </footer>
    </div>
  );
};

export default Home;
