import education from '../data/educationData';
import '../styles/WorkSection.css';

function EducationSection() {
  return (
    <>
      <div className='education-section'>
        <h3>Education</h3>
        {education.map((item, index) => (
          <div key={index}>
            <p>Title of Study: {item.titleOfStudy}</p>
            <p>School: {item.school}</p>
            <p>Date of Study: {item.dateOfStudy}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default EducationSection;
