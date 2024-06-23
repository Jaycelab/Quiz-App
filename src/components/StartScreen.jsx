function StartScreen({ dispatch }) {
  return (
    <div className="quiz-wrapper">
      <h3>Are you a JavaScript</h3>
      <div class="sentence sentence-1">
        <span class="letter">STAN?</span>
      </div>

      <div class="sentence sentence-2">
        <span class="letter">S</span>
        <span class="letter">T</span>
        <span class="letter">A</span>
        <span class="letter">N</span>
        <span class="letter">?</span>
      </div>

      <div class="sentence sentence-3">
        <span class="letter">S</span>
        <span class="letter">T</span>
        <span class="letter">A</span>
        <span class="letter">N</span>
        <span class="letter">?</span>
      </div>

      <div class="sentence sentence-4">
        <span class="letter">S</span>
        <span class="letter">T</span>
        <span class="letter">A</span>
        <span class="letter">N</span>
        <span class="letter">?</span>
      </div>

      <div class="sentence sentence-5">
        <span class="letter">S</span>
        <span class="letter">T</span>
        <span class="letter">A</span>
        <span class="letter">N</span>
        <span class="letter">?</span>
      </div>

      <div class="sentence sentence-6">
        <span class="letter">S</span>
        <span class="letter">T</span>
        <span class="letter">A</span>
        <span class="letter">N</span>
        <span class="letter">?</span>
      </div>

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
