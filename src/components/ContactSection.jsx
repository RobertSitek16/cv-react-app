import constants from '../data/constans';
import '../styles/ContactSection.css';

function ContactSection() {
  return (
    <>
      <ul>
        <li>Address: {constants.ADDRESS}</li>
        <li>Phone: {constants.PHONE}</li>
        <li>Email: {constants.EMAIL}</li>
        <li>Linkedin: {constants.LINKEDIN}</li>
        <li>GitHub: {constants.GITHUB}</li>
      </ul>
    </>
  );
}

export default ContactSection;
