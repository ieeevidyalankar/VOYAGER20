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
      url: "/fun-events",
      img: funEvents,
    },
    {
      id: 4,
      title: "Tech Talks",
      url: "/tech-talks",
      img: techTalk,
    },
  ];

  useEffect(() => {
    setTimeout(function () {
      AOS.init();
    }, 1000);
  }, []);
  // useEffect(() => {
  //   for (let i = 0; i < 4; i++) {
  //     let el = document.querySelector(`#img${i}`);
  //     gsap.fromTo(
  //       el,
  //       {
  //         autoAlpha: 0,
  //         scale: 0.5,
  //       },
  //       {
  //         autoAlpha: 1,
  //         duration: 1,
  //         scale: 1,
  //         ease: Power2.easeOut,
  //         scrollTrigger: {
  //           trigger: el,
  //           toggleActions: "restart none none reset",
  //         },
  //       }
  //     );
  //   }
  // }, []);

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
              <p
                className="card-title"
                // to={item.url}
                rel="noopener noreferrer"
              >
                {item.title}
              </p>
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
