import { FaTimes } from 'react-icons/fa';

const VideoModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal video-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className="modal-content">
          {project.isMultiVideo ? (
            <>
              <div className="modal-info">
                <h2>{project.title}</h2>
                <p className="modal-tagline">{project.tagline}</p>
                {project.website && (
                  <a 
                    href={project.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-website-link"
                  >
                    🌐 Visit Website
                  </a>
                )}
                <div className="modal-tech-tags">
                  {project.tech.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className="modal-multi-videos">
                {project.videos.map((video, index) => (
                  <div key={index} className="modal-video-section">
                    <h3 className="video-section-title">{video.title}</h3>
                    <p className="video-section-description">{video.description}</p>
                    <div className="modal-video">
                      <div className="video-wrapper" dangerouslySetInnerHTML={{ __html: video.embedCode }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="modal-section">
                <h3>🎯 Problem</h3>
                <p>{project.problem}</p>
              </div>

              <div className="modal-section">
                <h3>💡 Solution</h3>
                <div dangerouslySetInnerHTML={{ __html: project.solution.replace(/\n/g, '<br/>') }} />
              </div>
            </>
          ) : (
            <>
              <div className="modal-video">
                <div className="video-wrapper" dangerouslySetInnerHTML={{ __html: project.embedCode }} />
              </div>

              <div className="modal-info">
                <h2>{project.title}</h2>
                <p className="modal-tagline">{project.tagline}</p>
                <div className="modal-tech-tags">
                  {project.tech.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h3>🎯 Problem</h3>
                <p>{project.problem}</p>
              </div>

              <div className="modal-section">
                <h3>💡 Solution</h3>
                <div dangerouslySetInnerHTML={{ __html: project.solution.replace(/\n/g, '<br/>') }} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoModal;

