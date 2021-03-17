import "../home.css";
import { ScrollTrigger } from "./scrollFunction.js";

function ServicesList(props) {
  const [containerRef, isVisible] = ScrollTrigger({
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });

  return (
    <div className="servicesList">
      <ul>
        {props.list.map((service, index) => (
          <li key={index} ref={containerRef}>
            {isVisible && (
              <h1 style={{ animation: "fadeInLeft " + 0.5 * index + "s" }}>
                {service.name}
              </h1>
            )}
            {isVisible && <p>Learn More</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServicesList;
