import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { EXPERIENCES } from '../constants';

export default function Experience() {
  const count = EXPERIENCES.length;

  return (
    <div className="w-full h-screen overflow-hidden">
      <Parallax pages={count} className="w-full h-full">
        {/* Static race track border spanning all pages */}
        <ParallaxLayer offset={0} speed={0} factor={count}>
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Thick vertical 'track' line */}
            <div className="w-4 h-full bg-gray-300 mx-auto rounded-full" />
          </div>
        </ParallaxLayer>

        {EXPERIENCES.map((exp, i) => (
          <ParallaxLayer key={i} offset={i} speed={0.6}>
            <div className="relative w-full h-screen flex items-center px-6">
              {/* Stop dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <div className="w-5 h-5 bg-cyan-400 rounded-full shadow-lg" />
              </div>

              {/* Content */}
              <div className="ml-12 max-w-2xl mx-auto text-white">
                <p className="text-sm text-gray-400 mb-1">{exp.year}</p>
                <p className="text-lg font-semibold mb-1">
                  {exp.role} at {exp.company}
                </p>
                <p className="text-gray-200 mb-2">{exp.description}</p>
                <p className="text-sm text-cyan-300">
                  {exp.technologies.join(', ')}
                </p>
              </div>
            </div>
          </ParallaxLayer>
        ))}
      </Parallax>
    </div>
  );
}
