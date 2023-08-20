import React, { useState } from "react";
import * as XLSX from "xlsx";

const Step2 = ({ formData, handleChange, setFormData,excelData,setExcelData }) => {
  // onchange states
  const [excelFile, setExcelFile] = useState(null);
  const [typeError, setTypeError] = useState(null);
  const [disableField, setDisableField] = useState(false);
  const x = [];
  const y = [];
  const z = [];

  // onchange event
  const handleFile = (e) => {
    let fileTypes = [
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "text/csv",
    ];
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileTypes.includes(selectedFile.type)) {
        setTypeError(null);
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFile(e.target.result);
        };
      } else {
        setTypeError("Please select only excel file types");
        setExcelFile(null);
      }
    } else {
      console.log("Please select your file");
    }
  };

  // submit event
  const handleFileSubmit = (e) => {
    e.preventDefault();
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: "buffer" });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      calculation(data);
      setExcelData(data.slice(0));
    }
  };

  //calculatiing values
  const calculation = (data) => {
    data.map((data) => {
      x.push(data.X);
      y.push(data.Y);
      z.push(data.Z);
    });
    setFormData((prev) => ({
      ...prev,
      maxX: Math.max(...x),
      minX: Math.min(...x),
      maxY: Math.max(...y),
      minY: Math.min(...y),
      maxZ: Math.max(...z),
      minZ: Math.min(...z),
    }));
    setDisableField(true);
  };

  return (
    <>
      <div className="wrapper">
        {/* form */}
        <form className="form-group custom-form" onSubmit={handleFileSubmit}>
          <input
            type="file"
            className="form-control"
            required
            onChange={handleFile}
          />
          <button type="submit" className="btn btn-success btn-md">
            UPLOAD
          </button>
          {typeError && (
            <div className="alert alert-danger" role="alert">
              {typeError}
            </div>
          )}
        </form>

        <form>
          <label htmlFor="maxX">Max X:</label>
          <br />
          <input
            type="text"
            id="maxX"
            name="maxX"
            value={formData.maxX}
            onChange={handleChange}
            disabled={disableField}
          />
          <br />
          <label htmlFor="minX">Min X:</label>
          <br />
          <input
            type="text"
            id="minX"
            name="minX"
            value={formData.minX}
            onChange={handleChange}
            disabled={disableField}
          ></input>
          <br />
          <label htmlFor="maxY">Max Y:</label>
          <br />
          <input
            type="text"
            id="maxY"
            name="maxY"
            value={formData.maxY}
            onChange={handleChange}
            disabled={disableField}
          />
          <br />
          <label htmlFor="minY">Min Y:</label>
          <br />
          <input
            type="text"
            id="minY"
            name="minY"
            value={formData.minY}
            onChange={handleChange}
            disabled={disableField}
          ></input>
          <br />
          <label htmlFor="maxZ">Max Z:</label>
          <br />
          <input
            type="text"
            id="maxZ"
            name="maxZ"
            value={formData.maxZ}
            onChange={handleChange}
            disabled={disableField}
          />
          <br />
          <label htmlFor="minZ">Min Z:</label>
          <br />
          <input
            type="text"
            id="minZ"
            name="minZ"
            value={formData.minZ}
            onChange={handleChange}
            disabled={disableField}
          ></input>
        </form>

        {/* view data */}
        {/* <div className="viewer">
          {excelData ? (
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    {Object.keys(excelData[0]).map((key) => (
                      <th key={key}>{key}</th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {excelData.map((individualExcelData, index) => (
                    <tr key={index}>
                      {Object.keys(individualExcelData).map((key) => (
                        <td key={key}>{individualExcelData[key]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            //  ):(excelFile ? (<div>Please enter the values manualy</div>):
            //    (<div>No File is uploaded yet!</div>)

            <div>No File is uploaded yet!</div>
          )}
        </div> */}
      </div>
    </>
  );
};

export default Step2;
