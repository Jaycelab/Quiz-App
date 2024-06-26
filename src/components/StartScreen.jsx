function StartScreen({ dispatch }) {
  return (
    <div className="quiz-wrapper">
      <h3>Are you a</h3>
      <div className="sentence sentence-1">
        <span className="letter">JS</span>
      </div>

      <div className="sentence sentence-2">
        <span className="letter">J</span>
        <span className="letter">S</span>
        <span className="letter">c</span>
        <span className="letter">r</span>
        <span className="letter">i</span>
        <span className="letter">p</span>
        <span className="letter">t</span>
      </div>

      <div className="sentence sentence-3">
        <span className="letter">E</span>
        <span className="letter">C</span>
        <span className="letter">M</span>
        <span className="letter">A</span>
        <span className="letter">S</span>
        <span className="letter">c</span>
        <span className="letter">r</span>
        <span className="letter">i</span>
        <span className="letter">p</span>
        <span className="letter">t</span>
      </div>

      <div className="sentence sentence-4">
        <span className="letter">J</span>
        <span className="letter">S</span>
        <span className="letter">&nbsp;</span>
        <span className="letter">E</span>
        <span className="letter">S</span>
        <span className="letter">6</span>
      </div>

      <div className="sentence sentence-5">
        <span className="letter">E</span>
        <span className="letter">C</span>
        <span className="letter">M</span>
        <span className="letter">A</span>
        <span className="letter">-</span>
        <span className="letter">2</span>
        <span className="letter">6</span>
        <span className="letter">2</span>
      </div>

      <div className="sentence sentence-6">
        <span className="letter">J</span>
        <span className="letter">a</span>
        <span className="letter">v</span>
        <span className="letter">a</span>
        <span className="letter">S</span>
        <span className="letter">c</span>
        <span className="letter">r</span>
        <span className="letter">i</span>
        <span className="letter">p</span>
        <span className="letter">t</span>
      </div>

      {/*birds test start*/}
      <div class="main-container">
        <div class="bird-container bird-container--one">
          <div class="bird bird--one">
            <div className="sentence sentence-6">
              <span className="letter">conditionals</span>
            </div>
          </div>
        </div>

        <div class="bird-container bird-container--two">
          <div class="bird bird--two">
            {" "}
            <div className="sentence sentence-6">
              <span className="letter">arrays</span>
            </div>
          </div>
        </div>

        <div class="bird-container bird-container--three">
          <div class="bird bird--three">
            {" "}
            <div className="sentence sentence-6">
              <span className="letter">objects</span>
            </div>
          </div>
        </div>

        <div class="bird-container bird-container--four">
          <div class="bird bird--four">
            {" "}
            <div className="sentence sentence-6">
              <span className="letter">functions</span>
            </div>
          </div>
        </div>
      </div>
      {/*test end*/}

      <h3 className="stan">Stan?</h3>
      <p>Total Questions: 50</p>
      <p>Total Score: 0/50</p>
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
