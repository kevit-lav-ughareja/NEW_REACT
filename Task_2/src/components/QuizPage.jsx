import DummyData from "./DummyData";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./QuizPage.css";

const QuizPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const candidate = location.state;
  const questions = DummyData[candidate.language] || [];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const handleAnswer = (selected) => {
    let updatedScore = score;
    if (selected === questions[current].correctAnswer) {
      updatedScore = score + 1;
      setScore(updatedScore);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      navigate("/result", {
        state: { candidate, score: updatedScore, total: questions.length },
      });
    }
  };
  if (!candidate) return <div>No candidate info</div>;

  /*  if (questions.length === 0) {
    return <div>No questions available for this language.</div>;
  } */
  const question = questions[current];
  /*  if (!question) {
    return <div>No more questions.</div>;
  } */
  return (
    <>
      <div className="quiz-wrapper">
        <div className="quiz-container">
          <h2 className="quiz-heading">Question{current + 1}</h2>
          <p className="quiz-question">{question.question}</p>
          <div className="quiz-options">
            {question.options.map((option, index) => (
              <button
                className="quiz-option-button"
                key={index}
                onClick={() => {
                  handleAnswer(option);
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default QuizPage;
