import { FormEvent, useState } from "react";
import { FirstStep } from "./components/first-step";
import { SecondStep } from "./components/second-step";
import { FinalStep } from "./components/final-step";
import { useNavigate } from "react-router-dom";
import "./app.css";

type FormDataType = {
  firstName: string;
  lastName: string;
  age: number;
  aboutMe: string;
  gender: string;
  step: number;
};

const defaultFormParams: FormDataType = {
  firstName: "",
  lastName: "",
  age: 0,
  aboutMe: "",
  gender: "Male",
  step: 0,
};

function App() {
  const [formData, setFormData] = useState(defaultFormParams);
  const headers = ["First Step", "Second Step", "Last Step"];
  const navigate = useNavigate();

  const updateFormData = (field: Partial<FormDataType>) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, ...field };
    });
  };

  const handleNextClick = (event: FormEvent) => {
    event.preventDefault();
    let nextStep = formData.step + 1;
    if (nextStep > headers.length - 1) {
      console.log(formData);
      nextStep = headers.length - 1;
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      step: nextStep,
    }));
    navigate(`/${nextStep}`);
    // console.log(nextStep);
    // console.log(headers.length - 1);
  };

  const handleBackClick = (event: FormEvent) => {
    event.preventDefault();
    const previousStep = Math.max(0, formData.step - 1);
    setFormData((prevFormData) => ({
      ...prevFormData,
      step: previousStep,
    }));
    navigate(`/${previousStep}`);
    // console.log("Step: " + previousStep);
  };

  const getStep = () => {
    const step = formData.step;
    return step === 0 ? (
      <FirstStep {...formData} updateFormData={updateFormData} />
    ) : step === 1 ? (
      <SecondStep {...formData} updateFormData={updateFormData} />
    ) : (
      <FinalStep {...formData} updateFormData={updateFormData} />
    );
  };

  return (
    <div className="app">
      <div className="container">
        <form onSubmit={handleNextClick}>
          <div className="header">{headers[formData.step]}</div>
          <div className="main-body">{getStep()}</div>
          <div className="footer">
            {formData.step !== 0 && (
              <button
                className="back-button"
                type="button"
                onClick={handleBackClick}
              >
                Back
              </button>
            )}
            <button className="next-button">
              {formData.step === headers.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
