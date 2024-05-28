import { Pencil } from 'lucide-react';
import workExperience from '../data/workExperienceData';
import '../styles/WorkSection.css';

function WorkSection() {
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
  };

  return (
    <>
      <div className='work-section'>
        <h2 className='editable-heading'>
          <span className='default-text'>Work Experience</span>
          <span className='hover-text'>Edit <Pencil size={18} /></span>
        </h2>
        {workExperience.map(renderExperience)}
      </div>
    </>
  );
}

export default WorkSection;
