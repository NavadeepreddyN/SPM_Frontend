import { useParams } from "react-router-dom";
import { projects } from "../data/dummyData";
import TaskList from "../components/TaskList";
import ProgressBar from "../components/ProgressBar";
import MilestoneTracker from "../components/MilestoneTracker";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) return <h2>Project Not Found</h2>;

  return (
    <div>
      <h2>{project.title}</h2>
      <ProgressBar progress={project.progress} />
      <TaskList tasks={project.tasks} />
      <MilestoneTracker />
    </div>
  );
};

export default ProjectDetails;