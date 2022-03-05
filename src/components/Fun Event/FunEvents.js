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
                  13th
                  <br />
                  <span>MARCH</span>
                </h2>
              </div>
              <div className="details">
                <h3>Tech Loop</h3>
                <p>
                  Think Fast, Answer The Questions Faster And Win The Game! Show
                  The Power Of Your Knowledge.
                </p>
                {/* <a href="#">REGISTER</a> */}
              </div>
            </li>

            <li>
              <div className="time">
                <h2>
                  20th
                  <br />
                  <span>MARCH</span>
                </h2>
              </div>
              <div className="details">
                <h3>Into The Jumble Verse</h3>
                <p>
                  In Space, No One Can Hear You Clean. Into The Jumble Verse:
                  Sci Fi Bingo, Jumbled Letters and Unique Numbers.
                </p>
                {/* <a href="#">REGISTER</a> */}
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
