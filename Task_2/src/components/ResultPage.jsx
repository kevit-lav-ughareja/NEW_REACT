import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./ResultPage.css";

const ResultPage = () => {
  const navigatate = useNavigate();
  const { state } = useLocation();
  const { candidate, score, total } = state || {};

  return (
    <>
      <div className="result-wrapper">
        <div className="result-card">
          <h2 className="result-title">Result Page</h2>
          <p className="result-text">Name: {candidate?.name}</p>
          <p className="result-text">
            Score: {score} / {total}
          </p>
          <NavLink to="/">
            <button className="result-btn">Go for other topic test</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default ResultPage;
