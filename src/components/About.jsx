import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I'm a passionate Third Year student at Vishwakarma Institute of Information Technology (VIIT),
              pursuing my degree in Computer Science. My journey in technology has been driven by a deep
              curiosity for creating innovative solutions and building user-friendly applications.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              As a web developer, I specialize in creating modern, responsive, and performant web applications
              using cutting-edge technologies. I'm particularly interested in UI/UX design and ensuring that
              the applications I build are not only functional but also provide an exceptional user experience.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 dark:text-white">Education</h3>
                <p className="text-gray-600 dark:text-gray-300">VIIT, Pune</p>
                <p className="text-gray-600 dark:text-gray-300">B.Tech in Computer Science</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">Pune, Maharashtra</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Web Development</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Building modern web applications with React, Node.js, and other cutting-edge technologies.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">UI/UX Design</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Creating intuitive and engaging user interfaces with a focus on user experience.
                </p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Problem Solving</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Analytical thinking and creative problem-solving approaches to complex challenges.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Team Collaboration</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Effective communication and collaboration in team environments.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 