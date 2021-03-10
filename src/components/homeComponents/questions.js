import "../home.css";
import React, { useState } from "react";

function Questions(props) {
  console.log(props);
  const [displayQuestion, setDisplayQuestion] = useState({
    id: null,
    show: false,
  });

  return (
    <div className="questions">
      <h1> Frequently Asked Questions</h1>
      <ul>
        {props.list.map((question, index) => (
          <li
            key={index}
            onClick={() => setDisplayQuestion({ id: index, show: true })}
          >
            <div className="question">
              {" "}
              <h1>{question.name}</h1>
              <span>+</span>
            </div>
            {displayQuestion.id === index && displayQuestion.show === true && (
              <p>{question.answer}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Questions;
