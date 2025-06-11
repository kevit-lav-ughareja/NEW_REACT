import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CandidateFormPage from "./components/CandidateFormPage";
import QuizPage from "./components/QuizPage";
import ResultPage from "./components/ResultPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CandidateFormPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
