import React from 'react';
const ResultPage = ({resultData,excelData}) => {

  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  };
  return (
    
    <div>
        <>
      <div style={{display:"flex", justifyContent:'space-between'}}>
        <div>
            <h4>Project Name : {resultData.projectName}</h4>
            <h4>Project Description : {resultData.projectDescription}</h4>
            <h4>Client : {resultData.client}</h4>
            <h4>Contractor : {resultData.contractor}</h4>
        </div>
        <div>
            <h4>Max_X : {resultData.maxX}</h4>
            <h4>Min_X : {resultData.minX}</h4>
            <h4>Max_Y : {resultData.maxY}</h4>
            <h4>Min_Y : {resultData.minY}</h4>
            <h4>Max_Z : {resultData.maxZ}</h4>
            <h4>Min_Z : {resultData.minZ}</h4>
        </div>
        <div style={{textAlign:'center',alignContent:"center"}}>
            
            <button style={buttonStyle}>
              Download PDF
            </button>
            
            

           
            
        </div>
      </div>
      
      
      <div className='viewer'>
      <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    {excelData && Object.keys(excelData[0]).map((key) => (
                      <th key={key}>{key}</th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {excelData && excelData.map((individualExcelData, index) => (
                    <tr key={index}>
                      {Object.keys(individualExcelData).map((key) => (
                        <td key={key}>{individualExcelData[key]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
      </div>
      </>
    </div>
   
  )
}

export default ResultPage
