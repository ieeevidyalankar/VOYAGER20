import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./Competitions.css";

const Competitions = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <div className="competition-cont">
        <div className="title">
          <h1>Competitions</h1>
        </div>
        {/* <div className="card-container"> */}
        <div className="blog-card">
          <div className="meta">
            <div className="photo" id="photo1"></div>
            <ul className="details">
              <li className="date">March. 26, 2022</li>
            </ul>
          </div>
          <div className="description">
            <h1>Shark Tank</h1>
            <h2>If Opportunity doesn’t Knock, Build a Door.</h2>
            <p>
              {" "}
              Shark Tank event is to encourage and motivate young students who
              aspire to become entrepreneurs. Each team will be given a sector
              in the form of a problem statement in which they have to build an
              entire startup model.
            </p>
            <p className="read-more" id="read-more-1">
              <a
                href="https://forms.gle/BDgmvreedwfLMovv9"
                target="_blank"
                rel="noreferrer"
              >
                Register
              </a>
              <a
                className="ins"
                href="https://drive.google.com/file/d/15UZffsj3zhYUjHFYnEsiPcNJJBFkR16r/view?usp=drivesdk"
                target="_blank"
                rel="noreferrer"
              >
                Event Details
              </a>
            </p>
          </div>
        </div>
        <div className="blog-card alt">
          <div className="meta">
            <div className="photo" id="photo2"></div>
            <ul className="details">
              {/* <li class="author">
                  <a href="#">Jane Doe</a>
                </li> */}
              <li className="date">April. 10, 2022</li>
            </ul>
          </div>
          <div className="description">
            <h1>Codeager</h1>
            <h2>First, solve the problem. Then, write the code.</h2>
            <p>
              Codeager is a Competitive Programming Competition which allows
              budding as well as experiences programmers to test their skills
              and compete with others.
            </p>
            <p className="read-more" id="read-more-1">
              <a
                href="https://forms.gle/bNxSAoxvAorHZU6x9"
                target="_blank"
                rel="noreferrer"
              >
                Register
              </a>
            </p>
          </div>
        </div>
        {/* </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Competitions;
