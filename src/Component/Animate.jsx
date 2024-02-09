import gsap from "gsap";
import "../Component/Animate.css";
import officeImage from "../assets/office.jpg";
import { useGSAP } from "@gsap/react";
import logo from "../assets/logo.jpg";
const Animate = () => {
  useGSAP(() => {
    const timeLine = gsap.timeline({ defaults: { duration: 1 } });

    timeLine.to(".pre-loader > .overlay", { top: "75%" });
    timeLine.to(".pre-loader > .overlay", { top: "50%", delay: 0.5 });
    timeLine.to(".pre-loader > .overlay", { top: "25%", delay: 0.5 });
    timeLine.to(".pre-loader > .overlay", { top: "0", delay: 0.5 });
    timeLine.to(".pre-loader", { width: "80vw", left: 0, top: "50%" });
    timeLine.set(".pre-loader", { "z-index": -20 });

    timeLine.fromTo("nav", { y: -100 }, { y: 0, opacity: 1 });
    timeLine.fromTo(
      ".first-row .bold-text",
      { y: 100 },
      { y: 0, opacity: 1 },
      "<"
    );
    timeLine.fromTo(
      ".second-row .bold-text",
      { y: 100 },
      { y: 0, opacity: 1, delay: 0.5 }
    );

    const isMobile = !window.matchMedia("(min-width: 768px)").matches;

    if (isMobile) {
      timeLine.fromTo(
        ".mobile-row .copy",
        { y: 100 },
        { y: 0, opacity: 1, delay: 0.5 }
      );
      timeLine.fromTo(
        ".mobile-row .cta",
        { y: 100 },
        { y: 0, opacity: 1, delay: 0.5 }
      );
    } else {
      timeLine.fromTo(
        ".first-row .copy",
        { y: 100 },
        { y: 0, opacity: 1, delay: 0.5 }
      );
      timeLine.set(".round-text", { opacity: 1, delay: 0.5 });
    }
  }, []);

  return (
    <>
      <nav className="opacity-0">
        <img src={logo} alt="logo" />
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Contact</a>
          <a href="#">Testimonials</a>
        </div>
        <button className="cta">Let work together</button>
      </nav>

      <header>
        <div className="row first-row">
          <p className="bold-text opacity-0">The Possibilities</p>

          <p className="copy opacity-0">
            <span>We believe that workspaces</span>
            <span>should be friendly and convenient.</span>
            <span>Here is an invitation into how</span>
            <span>we design workspaces at curved.</span>
          </p>
        </div>

        <div className="row second-row">
          <p className="bold-text opacity-0">Of Workspaces</p>

          <p className="round-text opacity-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="106"
              height="106"
              viewBox="0 0 106 106"
              fill="none"
            >
              <path
                d="M0,53a53,53 0 1,0 106,0a53,53 0 1,0 -106,0"
                id="curve"
              ></path>
              <text x="0" y="53" className="text" textAnchor="middle">
                <textPath xlinkHref="#curve">
                  office workspace . office workspace . office workspace .
                  office workspace office workspace . office workspace office
                  workspace office workspace
                </textPath>
              </text>
            </svg>
          </p>
        </div>

        <div className="row mobile-row">
          <p className="copy opacity-0">
            <span>We believe that workspaces</span>
            <span>should be friendly and convenient.</span>
            <span>Here is an invitation into how</span>
            <span>we design workspaces at curved.</span>
          </p>

          <button className="cta opacity-0">Let work together</button>
        </div>
      </header>

      <div className="pre-loader">
        <img src={officeImage} alt="" />
        <div className="overlay"></div>
      </div>
    </>
  );
};

export default Animate;
