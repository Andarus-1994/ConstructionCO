import "../home.css";
import { ScrollTrigger } from "./scrollFunction.js";

function HomeDescription() {
  const [containerRef, isVisible] = ScrollTrigger({
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });
  const [containerRef2, isVisible2] = ScrollTrigger({
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  return (
    <div className="HomeDescription" ref={containerRef}>
      {isVisible && <h1> We Take Pride In The Projects We've Done </h1>}
      {isVisible && (
        <h2 ref={containerRef2}>
          While our clients’ satisfaction is our primary metric for excellence,
          we have also been recognized with numerous awards over the years for
          safety, business practices, and design excellence. We are proud to be
          at the forefront of green building practices, with dozens of
          LEED-certified projects, many achieving silver, gold and even platinum
          LEED certification. We understand that projects represent not only
          buildings, but the plans for the future of our clients
        </h2>
      )}
      {isVisible2 && <h1>We Offer a Wide Range of Services</h1>}
      {isVisible2 && (
        <h2>
          From conception to completion, our entire team of estimators,
          designers, project managers and experienced executives make our
          clients’ needs a priority. We have experience in a wide variety of
          projects and delivery methods, and use both time-proven practices and
          cutting-edge techniques to make sure our customers’ projects meet
          their maximum potential.
        </h2>
      )}
    </div>
  );
}

export default HomeDescription;
