import React, { useEffect, useReducer } from "react";
import { QuizQuestions } from "./components/Questions";
import StartScreen from "./components/StartScreen";
import QuizStart from "./components/QuizStart";

function reducer(state, action) {
  {
    /*conditional case using data received parameter to return current state which will update question and answer status*/
  }
  switch (action.type) {
    case "data-received":
      return { ...state, questions: action.payload, status: "ready" };
      {
        /*when status is active,status state will be active*/
      }
    case "active":
      return { ...state, status: "active" };
  }
}
{
  /*passing index instead of 0*/
}

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
};

function App() {
  {
    /*clearing state. Reducer to update initial state*/
  }

  {
    /*question with an initial state of 0, deconstructing */
  }

  const [{ status, questions, index }, dispatch] = useReducer(
    reducer,
    initialState
  );

  {
    /*fetching questions from QuizQuestions array and updating the state. Using type to display content */
  }
  useEffect(function () {
    if (QuizQuestions) {
      dispatch({ type: "data-received", payload: QuizQuestions });
    }
  }, []);

  {
    /*Displaying total number of questions*/
  }

  const totalQuestions = questions.length;

  {
    /*if above condition is true, data received true , move to return section*/
    /*Status & Start Screen true*/
  }
  return (
    <main className="container">
      {status === "ready" && <StartScreen dispatch={dispatch} />}
      {status === "active" && (
        <QuizStart
          questions={questions[index]}
          dispatch={dispatch}
          totalQuestions={totalQuestions}
          index={index + 1}
        />
      )}
    </main>
  );
}

export default App;
