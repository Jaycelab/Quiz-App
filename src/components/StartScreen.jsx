function StartScreen({ dispatch }) {
  return (
    <div className="quiz-wrapper">
      <h3>Are you a</h3>
      <div className="sentence sentence-1">
        <span className="letter">JAVASCRIPT</span>
      </div>

      <div className="sentence sentence-2">
        <span className="letter">J</span>
        <span className="letter">A</span>
        <span className="letter">V</span>
        <span className="letter">A</span>
        <span className="letter">S</span>
        <span className="letter">C</span>
        <span className="letter">R</span>
        <span className="letter">I</span>
        <span className="letter">P</span>
        <span className="letter">T</span>
      </div>

      <div className="sentence sentence-3">
        <span className="letter">J</span>
        <span className="letter">A</span>
        <span className="letter">V</span>
        <span className="letter">A</span>
        <span className="letter">S</span>
        <span className="letter">C</span>
        <span className="letter">R</span>
        <span className="letter">I</span>
        <span className="letter">P</span>
        <span className="letter">T</span>
      </div>

      <div className="sentence sentence-4">
        <span className="letter">J</span>
        <span className="letter">A</span>
        <span className="letter">V</span>
        <span className="letter">A</span>
        <span className="letter">S</span>
        <span className="letter">C</span>
        <span className="letter">R</span>
        <span className="letter">I</span>
        <span className="letter">P</span>
        <span className="letter">T</span>
      </div>

      <div className="sentence sentence-5">
        <span className="letter">J</span>
        <span className="letter">A</span>
        <span className="letter">V</span>
        <span className="letter">A</span>
        <span className="letter">S</span>
        <span className="letter">C</span>
        <span className="letter">R</span>
        <span className="letter">I</span>
        <span className="letter">P</span>
        <span className="letter">T</span>
      </div>

      <div className="sentence sentence-6">
        <span className="letter">J</span>
        <span className="letter">A</span>
        <span className="letter">V</span>
        <span className="letter">A</span>
        <span className="letter">S</span>
        <span className="letter">C</span>
        <span className="letter">R</span>
        <span className="letter">I</span>
        <span className="letter">P</span>
        <span className="letter">T</span>
      </div>
      <h3 className="stan">Stan?</h3>
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
