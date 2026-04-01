import { motion } from 'motion/react';
import { Code, Database, Server, Video, PenTool, Bot, DatabaseZap, Youtube } from 'lucide-react';

const skillCategories = [
  {
    title: 'Development',
    icon: Code,
    skills: [
      { name: 'HTML/CSS', level: 95 },
      { name: 'PHP', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Java', level: 75 },
      { name: 'WordPress', level: 90 },
      { name: 'MySQL', level: 85 },
      { name: 'SMS APIs (Twilio, Infobip)', level: 80 },
    ],
  },
  {
    title: 'Media & Creative',
    icon: Video,
    skills: [
      { name: 'Video Editing (CapCut, Premiere Pro)', level: 90 },
      { name: 'After Effects', level: 75 },
      { name: 'Animation (Moho, Cartoon Animator)', level: 85 },
      { name: 'YouTube Content Creation', level: 95 },
    ],
  },
  {
    title: 'AI & Data',
    icon: Bot,
    skills: [
      { name: 'AI Training', level: 80 },
      { name: 'Data Labeling', level: 90 },
      { name: 'Prompt Engineering', level: 85 },
      { name: 'Machine Learning Basics', level: 70 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="glass-card p-8 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-violet-500/20 text-violet-400">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                      <span className="text-sm font-medium text-violet-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className="h-full bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
