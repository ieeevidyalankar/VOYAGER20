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
                  1st and 2nd
                  <br />
                  <span>February</span>
                </h2>
              </div>
              <div className="details">
                <h3>The Creative Forge</h3>
                <p>
                  A Blender 3D workshop is designed to teach individuals the
                  skills and techniques needed to use Blender effectively. To
                  learn how to use it to create professional-grade 3D designs,
                  animations and visual effects.
                </p>
                {/* <a
                  href="https://youtu.be/2_x906nn5SM"
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch now
                </a> */}
              </div>
            </li>
            <li>
              <div className="time">
                <h2>
                  6th
                  <br />
                  <span>February</span>
                </h2>
              </div>
              <div className="details">
                <h3>Scrab The Web</h3>
                <p>
                  Web scraping enables you to gather large amounts of
                  information from multiple web pages quickly and efficiently.
                  This data can then be used for a variety of purposes,
                  including Data Analysis, Machine Learning etc.
                </p>
                {/* <a
                  href="https://youtu.be/2_x906nn5SM"
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch now
                </a> */}
              </div>
            </li>
            <li>
              <div className="time">
                <h2>
                  8th
                  <br />
                  <span>February</span>
                </h2>
              </div>
              <div className="details">
                <h3>Breawing JavaFX</h3>
                <p>
                  To provide you with knowledge needed to get started with
                  JavaFX platform,a modern, efficient, and fully featured
                  toolkit for developing rich client applications.
                </p>
                {/* <a
                  href="https://youtu.be/muz_BXjiGCE"
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch now
                </a> */}
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
