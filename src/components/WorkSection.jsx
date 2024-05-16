import workExperience from "../data/workExperience";

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
    const techStackText = techStack.join(", ");
    return (
      <>
        <p>Project Tech Stack:</p>
        <p>{techStackText}</p>
      </>
    );
  };

  const renderExperience = (experience, index) => {
    return (
      <div key={index}>
        <p>Company Name: {experience.companyName}</p>
        <p>Position Title: {experience.positionTitle}</p>
        <p>Date: {experience.startDate} - {experience.endDate}</p>
        {renderMainResponsibilities(experience.responsibilities)}
        {renderTechStack(experience.projectTechStack)}
      </div>
    );
  };

  return (
    <>
      <div>
        <h3>Work Experience</h3>
        {workExperience.map(renderExperience)}
      </div>
    </>
  );
}

export default WorkSection;
