import Tilt from 'react-parallax-tilt';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="project-showcase-card">
      <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2}>
        <div className="project-link" onClick={() => onClick(project)}>
          <div className="project-thumbnail">
            <img
              src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`}
              alt={project.title}
            />
            <div className="project-overlay">
              <div className="play-button">
                ▶ Watch Demo
              </div>
            </div>
          </div>
          <div className="project-content">
            <h3>{project.title}</h3>
            <p className="project-tagline">{project.tagline}</p>
            <div className="project-tech-tags">
              {project.tech.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default ProjectCard;

