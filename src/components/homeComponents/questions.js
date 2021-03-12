import "../home.css";
import React, { useState } from "react";
import { ScrollTrigger } from "./scrollFunction.js";
function Questions(props) {
  console.log(props);
  const [displayQuestion, setDisplayQuestion] = useState({
    id: null,
    show: false,
  });
  const [containerRef, isVisible] = ScrollTrigger({
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });

  return (
    <div className="questions">
      <h1> Frequently Asked Questions</h1>
      <ul ref={containerRef}>
        {props.list.map(
          (question, index) =>
            isVisible && (
              <li
                key={index}
                onClick={() => setDisplayQuestion({ id: index, show: true })}
              >
                <div className="question">
                  {" "}
                  <h1>{question.name}</h1>
                  {((displayQuestion.id !== index &&
                    displayQuestion.show === true) ||
                    displayQuestion.id === null) && <span>+</span>}
                </div>
                {displayQuestion.id === index &&
                  displayQuestion.show === true && <p>{question.answer}</p>}
              </li>
            )
        )}
      </ul>
    </div>
  );
}

export default Questions;
