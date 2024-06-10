import { Pencil } from 'lucide-react';
import educationData from '../data/educationData';
import '../styles/EducationSection.css';
import { useState } from 'react';

function EducationSection() {
  const [education, setEducation] = useState(educationData);
  const [isEditing, setIsEditing] = useState(false);
  const [tempEducation, setTempEducation] = useState(educationData);
  const [newEducation, setNewEducation] = useState({
    titleOfStudy: '',
    school: '',
    startDate: '',
    endDate: '',
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setTempEducation(education);
    setNewEducation({
      titleOfStudy: '',
      school: '',
      startDate: '',
      endDate: '',
    });
    setIsEditing(false);
  };

  const handleSaveClick = () => {
    setEducation(tempEducation);
    setIsEditing(false);
  };

  const handleChange = (e, index, field) => {
    const updatedEducation = [...tempEducation];
    updatedEducation[index][field] = e.target.value;
    setTempEducation(updatedEducation);
  };

  const handleNewEducationChange = (e, field) => {
    const updatedNewEducation = { ...newEducation };
    updatedNewEducation[field] = e.target.value;
    setNewEducation(updatedNewEducation);
  }

  const handleAddNewEducation = () => {
    setTempEducation([...tempEducation, newEducation]);
    setNewEducation({
      titleOfStudy: '',
      school: '',
      startDate: '',
      endDate: '',
    });
  }

  const renderEducation = (education, index) => {
    if (isEditing) {
      return (
        <div key={index}>
            <p>
              Title of Study: <input type='text' value={education.titleOfStudy} onChange={(e) => handleChange(e, index, 'titleOfStudy')} />
            </p>
            <p>
              School: <input type='text' value={education.school} onChange={(e) => handleChange(e, index, 'school')} />
            </p>
            <p>
              Date of Study: <input type="date" value={education.startDate} onChange={(e) => handleChange(e, index, 'startDate')} /> - <input type="date" value={education.endDate} onChange={(e) => handleChange(e, index, 'endDate')} />
            </p>
            <hr className='divider' />
        </div>
      );
    } else {
      return (
        <div key={index}>
          <p>
            Title of Study: <text>{education.titleOfStudy}</text>
          </p>
          <p>
            School: <text>{education.school}</text>
          </p>
          <p>
            Date of Study: <text>{education.startDate} - {education.endDate}</text>
          </p>
          <hr className='divider' />
        </div>
      );
    }
  };

  return (
    <>
      <div className='education-section'>
        <h2 className='editable-heading'>
          <span className='default-text'>Education</span>
          <span className='hover-text' onClick={handleEditClick}>Edit <Pencil size={18} /></span>
        </h2>
        {isEditing && (
          <div className='edit-buttons'>
            <button onClick={handleSaveClick}>Save</button>
            <button onClick={handleCancelClick}>Cancel</button>
          </div>
      )}
      {tempEducation.map(renderEducation)}
      {isEditing && (
        <div className='new-work-form'>
          <h3>Add New Education</h3>
          <p>
            Title of Study: <input type="text" value={newEducation.titleOfStudy} onChange={(e) => handleNewEducationChange(e, 'titleOfStudy')} />
          </p>
          <p>
            School: <input type="text" value={newEducation.school} onChange={(e) => handleNewEducationChange(e, 'school')} />
          </p>
          <p>
            Date: <input type="date" value={newEducation.startDate} onChange={(e) => handleNewEducationChange(e, 'startDate')} /> - <input type="date" value={newEducation.endDate} onChange={(e) => handleNewEducationChange(e, 'endDate')} />
          </p>
          <button onClick={handleAddNewEducation}>Add</button>
        </div>
      )}
      </div>
    </>
  );
}

export default EducationSection;
