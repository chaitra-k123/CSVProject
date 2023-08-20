import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import ResultPage from "./ResultPage";

const TwoStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectName: "",
    projectDescription: "",
    client: "",
    contractor: "",
    maxX: "",
    minX: "",
    maxY: "",
    minY: "",
    maxZ: "",
    minZ: "",
  });
  const [excelData, setExcelData] = useState(null);
  const [disableField, setDisableField] = useState(false);
  const [resultData, setResultData] = useState(null);
  const [showResultPage,setShowResultPage] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(name, value);
    // console.log(formData);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setStep(2);
    setDisableField(true);
  };

  const handleBack = () => {
    setStep(1);
  };
  const handleSubmit = () => {
    console.log(formData);
    setResultData(formData);
    setShowResultPage(true)
  };
  return (
    <div>
      {showResultPage ? (resultData && <ResultPage resultData={resultData} excelData={excelData} />) :
       (<div>
        <Step1
        formData={formData}
        handleChange={handleChange}
        disableField={disableField}
      />
      {step !== 1 && (
        <Step2
          formData={formData}
          handleChange={handleChange}
          setFormData={setFormData}
          excelData={excelData}
          setExcelData={setExcelData}
        />
      )}
      <button onClick={handleBack} disabled={step === 1}>
        Back
      </button>
      {step === 1 ? (
        <button onClick={handleNext}>Next</button>
      ) : (
        <button onClick={handleSubmit}>Submit</button>
      )} 
       </div>)
      }
    </div>
  );
};

export default TwoStepForm;
