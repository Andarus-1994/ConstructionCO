import "./work.css";
import Footer from "./footer.js";

function Work() {
  return (
    <div className="work">
      <div className="mainHeaderWork">
        <h1>Our Work</h1>
      </div>
      <div className="workPreview">
        <ul>
          <li>
            <img src={"./assets/demo1"} alt="images"></img>
            <p>Home Bourdeux</p>
          </li>
          <li>
            <img src={"./assets/demo2"} alt="images"></img>
            <p>Design of 2 parts</p>
          </li>
          <li>
            <img src={"./assets/demo3"} alt="images"></img>
            <p>Beach Design</p>
          </li>
          <li>
            <img src={"./assets/demo4"} alt="images"></img>
            <p>Semi-Bungalow</p>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Work;
