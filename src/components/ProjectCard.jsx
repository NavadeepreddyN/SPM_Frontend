import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p>Progress: {project.progress}%</p>
      <Link to={`/project/${project.id}`}>View Details</Link>
    </div>
  );
};

export default ProjectCard;