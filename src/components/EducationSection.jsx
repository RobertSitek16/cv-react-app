import { Pencil } from 'lucide-react';
import education from '../data/educationData';
import '../styles/EducationSection.css';

function EducationSection() {
  return (
    <>
      <div className='education-section'>
        <h2 className='editable-heading'>
          <span className='default-text'>Education</span>
          <span className='hover-text'>Edit <Pencil size={18} /></span>
        </h2>
        {education.map((item, index) => (
          <div key={index} className='education-item'>
            <p>
              Title of Study: <text>{item.titleOfStudy}</text>
            </p>
            <p>
              School: <text>{item.school}</text>
            </p>
            <p>
              Date of Study: <text>{item.dateOfStudy}</text>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default EducationSection;
