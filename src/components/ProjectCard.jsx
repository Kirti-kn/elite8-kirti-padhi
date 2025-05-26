const ProjectCard = ({ title, description, image, url, technologies, index }) => {
  return (
    <div className="mx-auto bg-gray-900 text-white rounded-3xl px-8 py-12 shadow-2xl transition-transform duration-500 scale-100 md:w-3/5">
      <h2 className="text-center text-2xl font-semibold mb-6">{title}</h2>
      <div className="flex flex-col md:flex-row gap-8 h-full">
        <div className="md:w-3/5 w-full">
          <p className="text-sm leading-relaxed mb-4">
            <span className="text-lg font-serif">{description[0]}</span>{description.slice(1)}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.map((tech, i) => (
              <span key={i} className="bg-cyan-900/40 text-cyan-200 px-3 py-1 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>

        </div>
        <div className="w-full md:w-2/5 h-full rounded-2xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;