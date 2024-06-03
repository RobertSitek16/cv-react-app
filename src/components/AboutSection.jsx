import { Pencil } from "lucide-react";
import { useState } from "react";
import "../styles/AboutSection.css";
import constants from "../data/constans";
import AboutModal from "./AboutModal";

function AboutSection() {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(() => {
    return localStorage.getItem("description") || constants.DESCRIPTION;
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveModal = (newDescription) => {
    setDescription(newDescription);
    localStorage.setItem("description", newDescription);
    setIsEditing(false);
  };

  const handleCloseModal = () => {
    setIsEditing(false);
  };

  return (
    <div className="about-section">
      <h1>Robert Sitek</h1>
      <h2>Passionate Java Developer</h2>
      <h2 className="editable-heading">
        <span className="default-text">About</span>
        <span className="hover-text" onClick={handleEditClick}>
          Edit <Pencil size={18} />
        </span>
      </h2>
      <AboutModal
        isOpen={isEditing}
        onClose={handleCloseModal}
        onSave={handleSaveModal}
        value={description}
      />
      <p>{description}</p>
    </div>
  );
}

export default AboutSection;
