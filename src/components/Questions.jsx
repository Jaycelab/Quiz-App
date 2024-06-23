import React from "react";

const Questions = () => {
  const questions = [
    {
      questionText:
        " What is the role of the 'this' keyword in constructor functions?",
      answerOptions: [
        {
          answerText: "Preventing access to object properties",
          isCorrect: false,
        },
        { answerText: "Exposing properties to the object", isCorrect: true },
        {
          answerText: "Creating a new context for the function",
          isCorrect: false,
        },
        {
          answerText: "Accessing the parent function's context",
          isCorrect: false,
        },
      ],
    },
  ];

  return (
    <div className="app">
      {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
      {false ? (
        <div className="score-section">
          You scored 1 out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question 1</span>/{questions.length}
            </div>
            <div className="question-text">Question Text Placeholder</div>
          </div>
          <div className="answer-section">
            <button>Answer 1</button>
            <button>Answer 2</button>
            <button>Answer 3</button>
            <button>Answer 4</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Questions;
