import "../home.css";
import { ScrollTrigger } from "./scrollFunction.js";
function HomeHeader() {
  const [containerRef, isVisible] = ScrollTrigger({
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });
  return (
    <div className="HomeHeader" ref={containerRef}>
      {isVisible && <h1> Inspired. Creative. Functional.</h1>}
      {isVisible && (
        <h2>
          "Good buildings come from good people, and all problems are solved by
          good design."
        </h2>
      )}
    </div>
  );
}

export default HomeHeader;
