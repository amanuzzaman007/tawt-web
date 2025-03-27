import SectionTitle from "@/components/section-title";
import UserItem from "./user-item";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "slick-carousel/slick/slick-theme.css";

const teams = [
  {
    name: "Ali Rizvi",
    role: "Founder & CEO at Simplitaught",
    twitter: "https://www.linkedin.com/in/ali-rizvi-76329a18/",
    image: "/teams/webp/ali-rizvi.webp",
  },
  {
    name: "Adnan Arshad",
    role: "Head of Product",
    twitter: "https://www.linkedin.com/in/muhammad-adnan-arshad-9a6a5937",
    image: "/teams/webp/adnan.webp",
  },
  {
    name: "Hafsah Naveed",
    role: "Operations Manager and Content Supervisor",
    twitter: "https://www.linkedin.com/in/hafsahnaveed",
    image: "/teams/webp/hafsa.webp",
  },

  {
    name: "Zarmeen Iqbal",
    role: "Marketing Lead",
    twitter: "http://linkedin.com/in/zarmeen-iqbal-1703811b4",
    image: "/teams/webp/zarmeen.webp",
  },

  {
    name: "Darren Thompson",
    role: "Head of Marketing",
    twitter: "https://www.linkedin.com/in/helpotherpeople/",
    image: "/teams/webp/darren.webp",
  },
  {
    name: "Umair Amjad",
    role: "Head of Software Development",
    twitter: "https://www.linkedin.com/in/umair-a-a1549047/",
    image: "/teams/webp/umair_amzad.webp",
  },

  {
    name: "Hafiz Tamoor Shehzad",
    role: "AI & ML Researcher",
    twitter: "http://www.linkedin.com/in/hafiz-tamoor-shehzad/",
    image: "/teams/webp/taimoor.webp",
  },

  {
    name: "Zaman Hridoy",
    role: "Software Engineer",
    twitter: "https://www.linkedin.com/in/md-amanuzzaman-059214145/",
    image: "/teams/webp/zaman.jpg",
  },
  {
    name: "ABU HURERAH",
    role: "Software Engineer",
    twitter: "https://www.linkedin.com/in/abuhurerahfarooq/",
    image: "/teams/webp/abu.webp",
  },

  {
    name: "Junaid Sultan",
    role: "Software Engineer",
    twitter: "https://www.linkedin.com/in/junaidsultan/",
    image: "/teams/webp/junaid.webp",
  },

  {
    name: "Nabeel Mustafa",
    role: "Content Curator",
    twitter: "https://www.linkedin.com/in/nabeelmustafa20070001",
    image: "/teams/webp/nabeel.webp",
  },
  {
    name: "Khadija Jamil",
    role: "Content Curator",
    twitter: "https://www.linkedin.com/in/khadija-jamil-195904262",
    image: "/teams/webp/khadija.webp",
  },

  {
    name: "Muhammad Huzaifa Bukhari",
    role: "SQA Engineer",
    twitter: "https://www.linkedin.com/in/muhammadhuzaifabukhari/",
    image: "/teams/webp/bukhari.webp",
  },
  {
    name: "Muhammad Umar",
    role: "Account Manager",
    twitter: "https://www.linkedin.com/in/muhammad-umar-579155239/",
    image: "/teams/webp/muhammad_umar.webp",
  },

  {
    name: "Anzar Nawaiz",
    role: "Content Curator",
    twitter: "http://linkedin.com/in/anzar-nawaiz-999781218",
    image: "/teams/webp/anzar.webp",
  },
  {
    name: "Sara Mazhar",
    role: "Content Curator",
    twitter: "http://linkedin.com/in/sara-mazhar-094bab234",
    image: "/teams/webp/sara.webp",
  },
];

function SlickGridSlider() {
  const sliderRef = useRef<Slider | null>(null);
  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    className: "center",
    centerMode: false,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto space-y-8">
      <SectionTitle title="Teams" />

      <div className="slider-container">
        <Slider
          ref={(slider) => {
            sliderRef.current = slider;
          }}
          {...settings}
        >
          {teams.map((team) => (
            <div key={team.name}>
              <UserItem
                name={team.name}
                role={team.role}
                twitter={team.twitter}
                image={team.image}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div style={{ textAlign: "center" }}>
        <Button variant={"ghost"} onClick={previous}>
          <FaAngleLeft />
        </Button>
        <Button variant={"ghost"} onClick={next}>
          <FaAngleRight />
        </Button>
      </div>
    </div>
  );
}

export default SlickGridSlider;
