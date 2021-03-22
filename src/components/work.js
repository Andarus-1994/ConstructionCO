import "./work.css";
import Footer from "./footer.js";
import Demo1 from "../assets/demo1.jpg";
import Demo2 from "../assets/demo2.jpg";
import Demo3 from "../assets/demo3.jpg";
import Demo4 from "../assets/demo4.jpg";

function Work() {
  return (
    <div className="work">
      <div className="mainHeaderWork">
        <h1>Our Work</h1>
      </div>
      <div className="workPreview">
        <ul>
          <li>
            <img src={Demo1} alt="images"></img>
            <p>Home Bourdeux</p>
          </li>
          <li>
            <img src={Demo2} alt="images"></img>
            <p>Design of 2 parts</p>
          </li>
          <li>
            <img src={Demo3} alt="images"></img>
            <p>Beach Design</p>
          </li>
          <li>
            <img src={Demo4} alt="images"></img>
            <p>Semi-Bungalow</p>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Work;
