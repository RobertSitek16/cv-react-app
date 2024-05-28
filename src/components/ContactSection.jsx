import { Github, Linkedin, Phone } from 'lucide-react';
import constants from '../data/constans';
import '../styles/ContactSection.css';

function ContactSection() {
  return (
    <>
      <ul className='icon-list'>
        <li> <a href={constants.LINKEDIN}> <Linkedin size={28} /> </a> </li>
        <li> <a href={constants.GITHUB}> <Github size={28} /> </a> </li>
        <li> <a href={`mailto:${constants.EMAIL}`}> {constants.EMAIL} </a> </li>
        <li> <a href={`tel:${constants.PHONE}`}> <Phone size={28} /> </a> </li>
      </ul>
    </>
  );
}

export default ContactSection;
