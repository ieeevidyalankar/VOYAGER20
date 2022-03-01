import React, { useEffect } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./TechTalks.css";
import s1 from "../../assets/speaker1.webp";
import s2 from "../../assets/speaker2.webp";
import fb from "../../assets/facebook.svg";
import insta from "../../assets/instagram.svg";
import ld from "../../assets/linkedin.svg";
import { useLocation } from "react-router-dom";

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
          <div className="speaker-card">
            <div className="speaker-wrapper">
              <a href="#">
                <img src={s1} alt="" />
              </a>
              <div className="speaker-name">Hitesh Hinduja</div>
              <div className="speaker-designation">
                Datascientist at Ola Electric
              </div>
            </div>
            <div className="event-topic">
              <p>Topic: ML Interpretation</p>
              <div className="buttons">
                <div className="register-btn">
                  <button>Register Here</button>
                </div>
              </div>
            </div>
            <div className="icons">
              <li>
                <a href="#">
                  <img src={fb} fill="#2c516e" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={insta} fill="#2c516e" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={ld} fill="#2c516e" alt="" />
                </a>
              </li>
            </div>
          </div>

          <div className="speaker-card">
            <div className="speaker-wrapper">
              <a href="#">
                <img src={s2} alt="" />
              </a>
              <div className="speaker-name">Rahul Sasi</div>
              <div className="speaker-designation">Founder of CloudSEK</div>
            </div>
            <div className="event-topic">
              <p>Topic: Cyber Security</p>
              <div className="buttons">
                <div className="register-btn">
                  <button>Register Here</button>
                </div>
              </div>
            </div>
            <div className="icons">
              <li>
                <a href="#">
                  <img src={fb} fill="#2c516e" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={insta} fill="#2c516e" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={ld} fill="#2c516e" alt="" />
                </a>
              </li>
            </div>
          </div>

          <div className="speaker-card">
            <div className="speaker-wrapper">
              <a href="#">
                <img src={s1} alt="" />
              </a>
              <div className="speaker-name">Hitesh Hinduja</div>
              <div className="speaker-designation">
                Datascientist at Ola Electric
              </div>
            </div>
            <div className="event-topic">
              <p>Topic: ML Interpretation</p>
              <div className="buttons">
                <div className="register-btn">
                  <button>Register Here</button>
                </div>
              </div>
            </div>
            <div className="icons">
              <li>
                <a href="#">
                  <img src={fb} fill="#2c516e" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={insta} fill="#2c516e" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={ld} fill="#2c516e" alt="" />
                </a>
              </li>
            </div>
          </div>

          <div className="speaker-card">
            <div className="speaker-wrapper">
              <a href="#">
                <img src={s2} alt="" />
              </a>
              <div className="speaker-name">Rahul Sasi</div>
              <div className="speaker-designation">Founder of CloudSEK</div>
            </div>
            <div className="event-topic">
              <p>Topic: Cyber Security</p>
              <div className="buttons">
                <div className="register-btn">
                  <button>Register Here</button>
                </div>
              </div>
            </div>
            <div className="icons">
              <li>
                <a href="#">
                  <img src={fb} fill="#2c516e" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={insta} fill="#2c516e" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={ld} fill="#2c516e" alt="" />
                </a>
              </li>
            </div>
          </div>
          <div className="speaker-card">
            <div className="speaker-wrapper">
              <a href="#">
                <img src={s2} alt="" />
              </a>
              <div className="speaker-name">Rahul Sasi</div>
              <div className="speaker-designation">Founder of CloudSEK</div>
            </div>
            <div className="event-topic">
              <p>Topic: Cyber Security</p>
              <div className="buttons">
                <div className="register-btn">
                  <button>Register Here</button>
                </div>
              </div>
            </div>
            <div className="icons">
              <li>
                <a href="#">
                  <img src={fb} fill="#2c516e" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={insta} fill="#2c516e" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={ld} fill="#2c516e" alt="" />
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TechTalks;
