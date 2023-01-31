import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./FunEvents.css";

const Workshop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="fun-section">
      <Navbar />
      <div className="fun-comp">
        <div className="leftbox">
          <div className="content">
            <h1>FUN EVENTS</h1>
            <p>A LITTLE FUN FOR EVERYONE LET'S GET READY!</p>
          </div>
        </div>
        <div className="events">
          <ul>
            <li>
              <div className="time">
                <h2>
                  31st
                  <br />
                  <span>January</span>
                </h2>
              </div>
              <div className="details">
                <h3>Inception</h3>
                <p>
                  Think Fast, Answer The Questions Faster And Win The Game! Show
                  The Power Of Your Knowledge.
                </p>
                <a
                  href="https://forms.gle/iBwPyeLBBRhbTTxK9"
                  target="_blank"
                  rel="noreferrer"
                >
                  REGISTER
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Workshop;
