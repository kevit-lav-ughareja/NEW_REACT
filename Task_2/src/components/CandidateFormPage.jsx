import { useNavigate } from "react-router-dom";
import "./CandidateFormPage.css";
import formImage from "../assets/form.jpg";

const CandidateFormPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      gender: formData.get("gender"),
      college: formData.get("college"),
      language: formData.get("language"),
    };
    if (!data.name) {
      alert("name is reqiured");
      console.log("I am here");
      return;
    }
    if (!data.gender) {
      alert("name is reqiured");
      return;
    }
    if (!data.college) {
      alert("collage is reqiured");
      return;
    }
    if (!data.language) {
      alert("language is reqiured");
      return;
    }
    navigate("/quiz", { state: data });
  };
  return (
    <div className="form-wrapper">
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="title-wrapper">
          <img src={formImage} alt="Candidate Details" className="form-img" />
          <h2 className="form-title">Candidate Details</h2>
        </div>

        <div className="form-group">
          <label>Name:</label>
          <input name="name"></input>
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select name="gender">
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label>college:</label>
          <input name="college"></input>
        </div>
        <div className="form-group">
          <label>Test Language:</label>
          <select name="language">
            <option value="">Select Language</option>

            <option value="javaScript">JavaScript</option>
            <option value="reactJs">ReactJs</option>
            <option value="oops">OOPs</option>
            <option value="htmlCss">HTML & CSS</option>
          </select>
        </div>
        <button type="submit">Start Test</button>
      </form>
    </div>
  );
};
export default CandidateFormPage;
