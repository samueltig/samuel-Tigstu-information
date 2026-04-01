import { motion } from 'motion/react';
import { Briefcase, Youtube, Cpu, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    period: '2021 - Present',
    description: 'Designed and developed custom websites, API integrations, and backend systems for various clients. Specialized in WordPress, PHP, and Python automation.',
    icon: Briefcase,
    color: 'from-blue-500 to-cyan-400',
  },
  {
    role: 'YouTube Channel Manager',
    company: 'Tech & Education Channel',
    period: '2022 - Present',
    description: 'Managed end-to-end content production. Handled video editing (Premiere Pro, CapCut), thumbnail design, SEO optimization, and audience engagement strategy.',
    icon: Youtube,
    color: 'from-red-500 to-orange-400',
  },
  {
    role: 'Technical Project Consultant',
    company: 'Various Clients',
    period: '2023 - Present',
    description: 'Provided freelance services in 2D animation (Moho), marketing content creation, data labeling for AI models, and automated SMS marketing setups.',
    icon: Cpu,
    color: 'from-violet-500 to-fuchsia-400',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-slate-900 border-4 border-slate-800 transform -translate-x-1/2 flex items-center justify-center z-10">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${exp.color}`} />
                </div>

                {/* Content Box */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                  index % 2 === 0 ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'
                }`}>
                  <div className="glass-card p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group">
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${exp.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
                    
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${exp.color} bg-opacity-10`}>
                        <exp.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    </div>
                    
                    <div className={`flex items-center gap-2 mb-4 text-sm font-medium text-violet-400 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                      <span className="text-slate-500 mx-1">•</span>
                      <span className="text-slate-300">{exp.company}</span>
                    </div>
                    
                    <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
