import "../home.css";
import { ScrollTrigger } from "./scrollFunction.js";
function Testimonials(props) {
  const [containerRef, isVisible] = ScrollTrigger({
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });
  return (
    <div className="testimonials" ref={containerRef}>
      <div className="leftCorner"></div>
      <div className="leftCorner2"></div>
      {isVisible && <h1> Testimonials</h1>}
      {isVisible && (
        <ul>
          {props.list.map((testimonial, index) => (
            <li key={index} style={{ animationDuration: 1.15 * index + "s" }}>
              <div className="Stars">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
              </div>
              <p>"{testimonial.opinion}"</p>
              <h1>{testimonial.name}</h1>
            </li>
          ))}
        </ul>
      )}
      <div className="rightCorner"></div>
    </div>
  );
}

export default Testimonials;
