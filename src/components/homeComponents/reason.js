import "../home.css";
import { ScrollTrigger } from "./scrollFunction.js";

function Reasons(props) {
  const [containerRef, isVisible] = ScrollTrigger({
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  return (
    <div className="reasons">
      <h1> Why to choose us?</h1>
      <ul ref={containerRef}>
        {props.list.map((reason, index) =>
          isVisible ? (
            <li key={index}>
              {" "}
              <img src={"./assets/" + reason.img} alt="icons" />
              <h2>{reason.name}</h2> <p>{reason.description}</p>
            </li>
          ) : (
            ""
          )
        )}
      </ul>
    </div>
  );
}

export default Reasons;
