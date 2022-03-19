import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./Workshop.css";

const Workshop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="work-section">
      <Navbar />
      <div className="workshop-comp">
        <div className="leftbox">
          <div className="content">
            <h1>Workshop</h1>
            <p>Technology is the best when it brings people together!</p>
          </div>
        </div>
        <div className="events">
          <ul>
            <li>
              <div className="time">
                <h2>
                  19th
                  <br />
                  <span>MARCH</span>
                </h2>
              </div>
              <div className="details">
                <h3>Power Of CMD</h3>
                <p>
                  In the workshop you will understand what is Command line and
                  whats so special about it. We will learn shell script in a fun
                  way by making games that run on the command prompt.
                </p>
                <a
                  href="https://youtu.be/2_x906nn5SM"
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch now
                </a>
              </div>
            </li>

            <li>
              <div className="time">
                <h2>
                  2nd
                  <br />
                  <span>APRIL</span>
                </h2>
              </div>
              <div className="details">
                <h3>Stack Game Using Three.js</h3>
                <p>
                  In this workshop we will learn Three.js which is a javascript
                  library that helps us to add 3D objects in web. We will start
                  from the basics and make a Stack game.
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
