import { motion } from 'motion/react';
import { MonitorSmartphone, Video, Film, Bot } from 'lucide-react';

const services = [
  {
    title: 'Website Development',
    description: 'Custom, responsive, and high-performance websites tailored to your brand. From landing pages to complex web applications.',
    icon: MonitorSmartphone,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'group-hover:border-blue-500/50',
  },
  {
    title: 'Video Editing',
    description: 'Professional video editing for YouTube, social media, and marketing campaigns using Premiere Pro and CapCut.',
    icon: Video,
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'group-hover:border-violet-500/50',
  },
  {
    title: 'Animation',
    description: 'Engaging 2D animations and explainer videos using Moho and Cartoon Animator to bring your ideas to life.',
    icon: Film,
    color: 'text-fuchsia-400',
    bg: 'bg-fuchsia-500/10',
    border: 'group-hover:border-fuchsia-500/50',
  },
  {
    title: 'AI & Data Tasks',
    description: 'Data labeling, prompt engineering, and AI model training support to enhance your machine learning projects.',
    icon: Bot,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'group-hover:border-cyan-500/50',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card p-8 group transition-all duration-300 ${service.border}`}
            >
              <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-7 h-7 ${service.color}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
