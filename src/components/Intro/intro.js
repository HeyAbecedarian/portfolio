import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="IntroText">
          I am <span className="IntroName">prajwal,</span>
          <br />
          Website Designer
        </span>
        <p className="Intropara">
          I am a skilled web designer with experience in creating <br />
          visually appealing and user friendly websites
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="buttonimage" className="btnImg" />
            Hire me
          </button>
        </Link>
      </div>
      <img src={bg} alt="pic" className="bg" />
    </section>
  );
};

export default Intro;
