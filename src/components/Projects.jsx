import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Globe } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Task Manager',
    description: 'An intelligent task management system with AI-powered task prioritization, natural language processing for task creation, and smart scheduling features.',
    technologies: ['React', 'Node.js', 'TensorFlow.js', 'MongoDB', 'Express'],
    image: '/projects/ai-task-manager.jpg',
    github: 'https://github.com/adityarane/ai-task-manager',
    live: 'https://ai-task-manager.vercel.app',
    features: ['AI Task Prioritization', 'NLP Integration', 'Smart Scheduling', 'Team Collaboration']
  },
  {
    title: 'E-Learning Platform',
    description: 'A comprehensive e-learning platform with video streaming, interactive quizzes, progress tracking, and real-time student-teacher communication.',
    technologies: ['Next.js', 'WebRTC', 'PostgreSQL', 'Redis', 'AWS S3'],
    image: '/projects/e-learning.jpg',
    github: 'https://github.com/adityarane/e-learning-platform',
    live: 'https://e-learning-platform.vercel.app',
    features: ['Video Streaming', 'Interactive Quizzes', 'Progress Tracking', 'Real-time Chat']
  },
  {
    title: 'Smart Home Dashboard',
    description: 'A modern IoT dashboard for smart home management with real-time device monitoring, automation rules, and energy consumption analytics.',
    technologies: ['React', 'Firebase', 'MQTT', 'Chart.js', 'Material-UI'],
    image: '/projects/smart-home.jpg',
    github: 'https://github.com/adityarane/smart-home-dashboard',
    live: 'https://smart-home-dashboard.vercel.app',
    features: ['Device Control', 'Automation Rules', 'Energy Analytics', 'Mobile Responsive']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in web development.
          </p>
          <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors"
                      aria-label="View live demo"
                    >
                      <Globe className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {project.features.map((feature) => (
                        <li key={feature} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                          <Code2 className="w-4 h-4 mr-2 text-blue-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/adityarane"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <Github className="w-5 h-5 mr-2" />
            View More Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 