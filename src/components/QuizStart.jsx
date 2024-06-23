const QuizStart = () => {
  return (
    <div className="quiz">
      <div className="quiz-header">
        <h2>Questions</h2>
      </div>
      <div className="quiz-body">
        <li>Answer 1</li>
        <li>Answer 2</li>
        <li>Answer 3</li>
        <li>Answer 4</li>
      </div>
      {/*number of questions*/}
      <div className="quiz-footer">
        <p>Total Questions 0/50</p>
        <button className="btn-start">Next</button>
      </div>
    </div>
  );
};

export default QuizStart;
