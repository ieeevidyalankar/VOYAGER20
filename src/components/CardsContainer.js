import React, { useEffect } from "react";
import "./CardsContainer.css";
import workshop from "../assets/workshop.webp";
import competitions from "../assets/competitions.webp";
import techTalk from "../assets/tech-talk.webp";
import funEvents from "../assets/fun-events.webp";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// gsap.registerPlugin(ScrollTrigger);

const CardsContainer = () => {
  const items = [
    {
      id: 1,
      title: "Competitions",
      url: "/competitions",
      img: competitions,
    },
    {
      id: 2,
      title: "Workshops",
      url: "/workshop",
      img: workshop,
    },
    {
      id: 3,
      title: "Fun Events",
      url: "/funevents",
      img: funEvents,
    },
    {
      id: 4,
      title: "Tech Talks",
      url: "/techtalks",
      img: techTalk,
    },
  ];

  useEffect(() => {
    setTimeout(function () {
      AOS.init();
    }, 1000);
  }, []);

  return (
    <div className="cards">
      <div className="cards-list">
        {items.map((item, i) => {
          return (
            <div className="card-li" key={item.id}>
              <img
                data-aos="zoom-in-right"
                className="card-img"
                src={item.img}
                alt=""
              />
              <Link
                className="card-title"
                to={item.url}
                rel="noopener noreferrer"
              >
                {item.title}
              </Link>
            </div>
          );
        })}
        {/* <li className="card-li">
              <img
                data-aos="zoom-in-right"
                className="card-img"
                id={`img1`}
                src={workshop}
                alt=""
              />
              <Link className="card-title" to="/workshop">
                Workshop
              </Link>
            </li> */}
      </div>
    </div>
  );
};

export default CardsContainer;
