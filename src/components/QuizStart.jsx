function QuizStart({ questions, totalQuestions, index }) {
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
        <p>
          {/*using index + for current question */}
          Number of Questions {index} / {totalQuestions}
        </p>
        <button className="btn-next">Next</button>
      </div>
    </div>
  );
}
export default QuizStart;
