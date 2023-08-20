import React from 'react';

const Step1 = ({ formData, handleChange,disableField }) => {
  return (
    <div>
   <div className='wrapper'>
   <form>
        <label htmlFor="projectName">Project Name:</label><br/>
        <input onChange={handleChange} value={formData.projectName} type="text" id="projectName" name="projectName" disabled={disableField}/><br/>
        <label htmlFor="projectDescription">Project Description:</label><br/>
        <input onChange={handleChange} value={formData.projectDescription} type="text" id="projectDescription" name="projectDescription" disabled={disableField}/><br/>
        <label htmlFor="client">Client:</label><br/>
        <input onChange={handleChange} value={formData.client} type="text" id="client" name="client" disabled={disableField}/><br/>
        <label htmlFor="contractor">Contractor:</label><br/>
        <input onChange={handleChange} value={formData.contractor} type="text" id="contractor" name="contractor" disabled={disableField}/>
    </form>
   </div>
      </div>
  );
};

export default Step1;
