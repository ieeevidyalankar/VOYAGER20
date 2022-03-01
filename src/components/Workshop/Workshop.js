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
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              dignissimos veritatis dolorem commodi ipsam dolores a perferendis
              unde tempora quis corporis labore iusto aperiam consectetur magnam
              voluptates aspernatur, ab porro?
            </p>
          </div>
        </div>
        <div className="events">
          <ul>
            <li>
              <div className="time">
                <h2>
                  19
                  <br />
                  <span>MARCH</span>
                </h2>
              </div>
              <div className="details">
                <h3>Workshop 1</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eveniet dignissimos veritatis dolorem commodi ipsam dolores a
                  perferendis
                </p>
                <a href="#">REGISTER</a>
              </div>
            </li>

            <li>
              <div className="time">
                <h2>
                  02
                  <br />
                  <span>APRIL</span>
                </h2>
              </div>
              <div className="details">
                <h3>Workshop 2</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eveniet dignissimos veritatis dolorem commodi ipsam dolores a
                  perferendis
                </p>
                <a href="#">REGISTER</a>
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
