function StartScreen({ dispatch }) {
  return (
    <div className="quiz-wrapper">
      <h3>Are you a</h3>
      <div class="sentence sentence-1">
        <span class="letter">JAVASCRIPT</span>
      </div>

      <div class="sentence sentence-2">
        <span class="letter">J</span>
        <span class="letter">A</span>
        <span class="letter">V</span>
        <span class="letter">A</span>
        <span class="letter">S</span>
        <span class="letter">C</span>
        <span class="letter">R</span>
        <span class="letter">I</span>
        <span class="letter">P</span>
        <span class="letter">T</span>
      </div>

      <div class="sentence sentence-3">
        <span class="letter">J</span>
        <span class="letter">A</span>
        <span class="letter">V</span>
        <span class="letter">A</span>
        <span class="letter">S</span>
        <span class="letter">C</span>
        <span class="letter">R</span>
        <span class="letter">I</span>
        <span class="letter">P</span>
        <span class="letter">T</span>
      </div>

      <div class="sentence sentence-4">
        <span class="letter">J</span>
        <span class="letter">A</span>
        <span class="letter">V</span>
        <span class="letter">A</span>
        <span class="letter">S</span>
        <span class="letter">C</span>
        <span class="letter">R</span>
        <span class="letter">I</span>
        <span class="letter">P</span>
        <span class="letter">T</span>
      </div>

      <div class="sentence sentence-5">
        <span class="letter">J</span>
        <span class="letter">A</span>
        <span class="letter">V</span>
        <span class="letter">A</span>
        <span class="letter">S</span>
        <span class="letter">C</span>
        <span class="letter">R</span>
        <span class="letter">I</span>
        <span class="letter">P</span>
        <span class="letter">T</span>
      </div>

      <div class="sentence sentence-6">
        <span class="letter">J</span>
        <span class="letter">A</span>
        <span class="letter">V</span>
        <span class="letter">A</span>
        <span class="letter">S</span>
        <span class="letter">C</span>
        <span class="letter">R</span>
        <span class="letter">I</span>
        <span class="letter">P</span>
        <span class="letter">T</span>
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
