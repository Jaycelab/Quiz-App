function StartScreen({ dispatch }) {
  return (
    <div className="quiz-wrapper">
      <h3>Are you a JavaScript</h3>
      <h2>STAN?</h2>
      <p>Number of Questions: 0</p>
      <p>Total Score: 0</p>
      <button
        className="btn-start"
        onClick={() => dispatch({ type: "active" })}
      >
        Let's Begin
      </button>
    </div>
  );
}

export default StartScreen;
