import { motion } from 'framer-motion';
import { Code2, Database, Terminal, Layout, GitBranch, Type, Server } from 'lucide-react';

const skills = [
  {
    name: 'React',
    icon: Code2,
    description: 'Building modern, interactive user interfaces with React and its ecosystem.',
  },
  {
    name: 'JavaScript',
    icon: Terminal,
    description: 'Expert in modern JavaScript (ES6+) and its advanced features.',
  },
  {
    name: 'HTML/CSS',
    icon: Layout,
    description: 'Creating responsive and accessible web layouts with semantic HTML and modern CSS.',
  },
  {
    name: 'Node.js',
    icon: Server,
    description: 'Developing scalable backend services and RESTful APIs with Node.js.',
  },
  {
    name: 'Tailwind CSS',
    icon: Layout,
    description: 'Building beautiful, responsive designs with utility-first CSS framework.',
  },
  {
    name: 'Git',
    icon: GitBranch,
    description: 'Version control and collaborative development workflows.',
  },
  {
    name: 'TypeScript',
    icon: Type,
    description: 'Writing type-safe, maintainable code with TypeScript.',
  },
  {
    name: 'MongoDB',
    icon: Database,
    description: 'Working with NoSQL databases and data modeling.',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-pink-900/40 dark:from-indigo-900/40 dark:via-purple-900/30 dark:to-pink-900/40 backdrop-blur-sm"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 dark:bg-gray-900/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 dark:hover:bg-gray-900/20 transition-all duration-500 ease-in-out group border border-gray-200/20 dark:border-gray-800/20"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform duration-500 ease-in-out">
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Always learning and exploring new technologies to stay at the forefront of web development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 