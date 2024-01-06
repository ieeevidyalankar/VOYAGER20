import React, { useEffect } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./TechTalks.css";
import namansir from "../../assets/naman_sir.webp";
import avisir from "../../assets/avi_sir.webp";
import jeevantikamaam from "../../assets/jeevantikamaam.webp";
import navinsir from "../../assets/navin_sir.webp";
import arshsir from "../../assets/arsh_sir.webp";
import fb from "../../assets/facebook.svg";
import insta from "../../assets/instagram.svg";
import ld from "../../assets/linkedin.svg";
import { useLocation } from "react-router-dom";

const speakers = [
  {
    id: 1,
    img: namansir,
    name: "Naman Bhayani",
    desc: "Research Engineer II at Jupiter",
    topic: "Computer Vision",
    date: "27th March, 2022",
    fb: "https://www.facebook.com/rapternmn",
    ln: "https://www.linkedin.com/in/naman-bhayani-9b183692",
    reg: "https://forms.gle/e5cu8Aesg87Hib1B9",
    yt: "https://youtu.be/_GP9MI9X36A",
  },
  {
    id: 2,
    img: avisir,
    name: "Avi Dvivedi",
    desc: "Founder at XRDI",
    topic: "XR Genesis",
    date: "3rd April, 2022",
    in: "https://www.instagram.com/mr.aviraldwivedi",
    ln: "https://www.linkedin.com/in/avidwivedi",
    reg: "https://forms.gle/evs69hyxMSMkVjBa7",
    yt: "https://youtu.be/SUnUn2VBIX4",
  },
  {
    id: 3,
    img: jeevantikamaam,
    name: "Jeevantika Lingalwar",
    desc: "Cloud Solution Architect - Microsoft",
    topic: "Cloud Computing",
    date: "3rd April, 2022",
    in: "https://www.instagram.com/our_camaraderie/",
    ln: "https://www.linkedin.com/in/jeevantika-lingalwar",
    reg: "https://forms.gle/9ApWZtt9E6As3EpP9",
    yt: "https://youtu.be/bpd7BGFdywU",
  },
  {
    id: 4,
    img: navinsir,
    name: "Navin Manaswi",
    desc: "Chief Metaverse Officer",
    topic: "Metaverse-Career and Future",
    date: "9th April, 2022",
    fb: "https://www.facebook.com/navin.manaswi.98",
    ln: "https://www.linkedin.com/in/navin-manaswi-1a708b8",
    reg: "https://forms.gle/dqqFvTHAVmwSbYiL8",
    yt: "https://youtu.be/YaYhROltzmM",
  },
  // {
  //   id: 5,
  //   img: arshsir,
  //   name: "Arsh Goyal",
  //   desc: "Senior Software Engineer at Samsung India",
  //   topic: "Competitive Programming",
  //   date: "9th April, 2022",
  //   in: "https://www.instagram.com/arshgoyalyt",
  //   ln: "https://www.linkedin.com/in/arshgoyal",
  //   reg: "https://forms.gle/uSi6DDrxJWh9PDiQ9",
  // },
];

const TechTalks = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <div className="talks-comp">
        <h1 id="page-title">TECH TALKS</h1>
        <div className="speaker-card-container">
          {speakers.map((speaker) => {
            return (
              <div className="speaker-card" key={speaker.id}>
                <div className="speaker-wrapper">
                  <img src={speaker.img} alt="" />
                  <div className="speaker-name">{speaker.name}</div>
                  <div className="speaker-designation">{speaker.desc}</div>
                  <div className="event-topic">
                    <p>{speaker.topic}</p>
                    <p className="date">{speaker.date}</p>
                    {speaker.reg && speaker.yt ? (
                      <div className="buttons">
                        <div className="register-btn">
                          <a href={speaker.yt} rel="noreferrer" target="_blank">
                            Watch now
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div className="buttons">
                        <div className="register-btn">
                          <a
                            href={speaker.reg}
                            rel="noreferrer"
                            target="_blank"
                          >
                            Register here
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="icons">
                  {speaker.ln && (
                    <li>
                      <a target="_blank" href={speaker.ln} rel="noreferrer">
                        <img src={ld} fill="#2c516e" alt="" />
                      </a>
                    </li>
                  )}
                  {speaker.fb && (
                    <li>
                      <a target="_blank" href={speaker.fb} rel="noreferrer">
                        <img src={fb} fill="#2c516e" alt="" />
                      </a>
                    </li>
                  )}
                  {speaker.in && (
                    <li>
                      <a target="_blank" href={speaker.in} rel="noreferrer">
                        <img src={insta} fill="#2c516e" alt="" />
                      </a>
                    </li>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TechTalks;
