import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className='h-full'>
      <h2 className="text-4xl text-center sticky top-0 z-50 py-10 mt-10">Projects</h2>

      <Parallax pages={PROJECTS.length}>
        {PROJECTS.map((project, i) => (
          <ParallaxLayer
            key={i}
            offset={i}
            speed={0.5 + i * 0.5}
            style={{ zIndex: i, width: "100vw" }}
            sticky={{ start: i, end: PROJECTS.length }}
          >
            <div className="flex justify-center items-center mx-auto pt-8 border-cyan-100 px-8 m-8">
              <ProjectCard {...project} index={i} />
            </div>
          </ParallaxLayer>
        ))}
      </Parallax>
    </div>
  );
};

export default Projects;
