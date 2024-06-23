function QuizStart({ questions }) {
  console.log(questions);
  return (
    <div className="quiz">
      <div className="quiz-header">
        <h2>{questions.question}</h2>
      </div>
      <div className="quiz-body">
        {/*displaying answers mapping through questions options index*/}
        {questions.options.map((option, index) => (
          <li key={option}>{option}</li>
        ))}
      </div>
      {/*number of questions*/}
      <div className="quiz-footer">
        <p>Number of Questions 0/50</p>
        <button className="btn-next">Next</button>
      </div>
    </div>
  );
}
export default QuizStart;
