import { useSpring, animated } from '@react-spring/web';

const ProjectCard = ({ title, description, image, technologies }) => {
  const styles = useSpring({
    transform: `scale(1) translateY(0px)`,
    config: { mass: 1, tension: 280, friction: 60 },
  });

  return (
    <animated.div style={styles} className="w-full max-w-[1000px] md:h-[500px] bg-gray-900 text-white rounded-3xl p-10 shadow-2xl overflow-hidden mx-auto flex flex-col justify-center mb-10">
      <h2 className="text-center text-2xl font-semibold mb-6">{title}</h2>
      <div className="flex flex-col md:flex-row gap-8 h-full">
        <div className="w-full md:w-2/5">
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
        <div className="w-full md:w-3/5 h-full rounded-2xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
      
    </animated.div>
  );
};

export default ProjectCard;
