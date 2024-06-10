import { useState } from 'react';
import { Pencil } from 'lucide-react';
import workExperienceData from '../data/workExperienceData';
import '../styles/WorkSection.css';

function WorkSection() {
  const [workExperience, setWorkExperience] = useState(workExperienceData);
  const [isEditing, setIsEditing] = useState(false);
  const [tempWorkExperience, setTempWorkExperience] = useState(workExperienceData);
  const [newExperience, setNewExperience] = useState({
    companyName: '',
    positionTitle: '',
    startDate: '',
    endDate: '',
    responsibilities: [],
    projectTechStack: []
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setTempWorkExperience(workExperience);
    setNewExperience({
      companyName: '',
      positionTitle: '',
      startDate: '',
      endDate: '',
      responsibilities: [],
      projectTechStack: []
    });
    setIsEditing(false);
  };

  const handleSaveClick = () => {
    setWorkExperience(tempWorkExperience);
    setIsEditing(false);
  };

  const handleChange = (e, index, field) => {
    const updatedWorkExperience = [...tempWorkExperience];
    if (field === 'responsibilities' || field === 'projectTechStack') {
      updatedWorkExperience[index][field] = e.target.value.split(',');
    } else {
      updatedWorkExperience[index][field] = e.target.value;
    }
    setTempWorkExperience(updatedWorkExperience);
  };

  const handleNewExperienceChange = (e, field) => {
    const updatedNewExperience = { ...newExperience };
    if (field === 'responsibilities' || field === 'projectTechStack') {
      updatedNewExperience[field] = e.target.value.split(',');
    } else {
      updatedNewExperience[field] = e.target.value;
    }
    setNewExperience(updatedNewExperience);
  };

  const handleAddNewExperience = () => {
    setTempWorkExperience([...tempWorkExperience, newExperience]);
    setNewExperience({
      companyName: '',
      positionTitle: '',
      startDate: '',
      endDate: '',
      responsibilities: [],
      projectTechStack: []
    });
  };

  const renderListItems = (items) => {
    return items.map((item, index) => <li key={index}>{item}</li>);
  };

  const renderMainResponsibilities = (responsibilities) => {
    return (
      <>
        <p>Main Responsibilities:</p>
        <ul>{renderListItems(responsibilities)}</ul>
      </>
    );
  };

  const renderTechStack = (techStack) => {
    const techStackText = techStack.join(', ');
    return (
      <>
        <p>Project Tech Stack:</p>
        <text>{techStackText}</text>
      </>
    );
  };

  const renderExperience = (experience, index) => {
    if (isEditing) {
      return (
        <div key={index}>
          <p>
            Company Name: <input type="text" value={experience.companyName} onChange={(e) => handleChange(e, index, 'companyName')} />
          </p>
          <p>
            Position Title: <input type="text" value={experience.positionTitle} onChange={(e) => handleChange(e, index, 'positionTitle')} />
          </p>
          <p>
            Date: <input type="text" value={experience.startDate} onChange={(e) => handleChange(e, index, 'startDate')} /> - <input type="text" value={experience.endDate} onChange={(e) => handleChange(e, index, 'endDate')} />
          </p>
          <p>Main Responsibilities:</p>
          <textarea value={experience.responsibilities.join(',')} onChange={(e) => handleChange(e, index, 'responsibilities')} />
          <p>Project Tech Stack:</p>
          <textarea value={experience.projectTechStack.join(',')} onChange={(e) => handleChange(e, index, 'projectTechStack')} />
          <hr className='divider' />
        </div>
      );
    } else {
      return (
        <div key={index}>
          <p>
            Company Name: <text>{experience.companyName}</text>
          </p>
          <p>
            Position Title: <text>{experience.positionTitle}</text>
          </p>
          <p>
            Date: <text>{experience.startDate} - {experience.endDate}</text>
          </p>
          {renderMainResponsibilities(experience.responsibilities)}
          {renderTechStack(experience.projectTechStack)}
          <hr className='divider' />
        </div>
      );
    }
  };

  return (
    <>
      <div className='work-section'>
        <h2 className='editable-heading'>
          <span className='default-text'>Work Experience</span>
          <span className='hover-text' onClick={handleEditClick}>Edit <Pencil size={18} /></span>
        </h2>
        {isEditing && (
          <div className='edit-buttons'>
            <button onClick={handleSaveClick}>Save</button>
            <button onClick={handleCancelClick}>Cancel</button>
          </div>
        )}
        {tempWorkExperience.map(renderExperience)}
        {isEditing && (
          <div className='new-experience-form'>
            <h3>Add New Experience</h3>
            <p>
              Company Name: <input type="text" value={newExperience.companyName} onChange={(e) => handleNewExperienceChange(e, 'companyName')} />
            </p>
            <p>
              Position Title: <input type="text" value={newExperience.positionTitle} onChange={(e) => handleNewExperienceChange(e, 'positionTitle')} />
            </p>
            <p>
              Date: <input type="text" value={newExperience.startDate} onChange={(e) => handleNewExperienceChange(e, 'startDate')} /> - <input type="text" value={newExperience.endDate} onChange={(e) => handleNewExperienceChange(e, 'endDate')} />
            </p>
            <p>Main Responsibilities:</p>
            <textarea value={newExperience.responsibilities.join(',')} onChange={(e) => handleNewExperienceChange(e, 'responsibilities')} />
            <p>Project Tech Stack:</p>
            <textarea value={newExperience.projectTechStack.join(',')} onChange={(e) => handleNewExperienceChange(e, 'projectTechStack')} />
            <button onClick={handleAddNewExperience}>Add</button>
          </div>
        )}
      </div>
    </>
  );
}

export default WorkSection;
