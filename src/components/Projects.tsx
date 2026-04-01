import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with secure payment integration, user authentication, and an intuitive admin dashboard.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop',
    tags: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
    category: 'Web Development',
    link: '#',
  },
  {
    title: 'SMS Notification System',
    description: 'Automated SMS alert system integrated with Twilio and Infobip APIs for real-time customer updates and marketing campaigns.',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
    tags: ['Python', 'Twilio API', 'Infobip API'],
    category: 'Web Development',
    link: '#',
  },
  {
    title: 'Animated Explainer Series',
    description: 'A series of 2D animated educational videos created for a YouTube channel, focusing on complex technical concepts.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
    tags: ['Moho', 'After Effects', 'Premiere Pro'],
    category: 'Video & Animation',
    link: '#',
  },
  {
    title: 'AI Data Labeling Pipeline',
    description: 'Developed a streamlined process for annotating and labeling large datasets used to train custom machine learning models.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop',
    tags: ['Python', 'Data Processing', 'AI Training'],
    category: 'AI/Data Work',
    link: '#',
  },
  {
    title: 'Corporate WordPress Site',
    description: 'Custom WordPress theme development for a local business, optimized for SEO and fast loading speeds.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    tags: ['WordPress', 'PHP', 'CSS3'],
    category: 'Web Development',
    link: '#',
  },
  {
    title: 'YouTube Channel Management',
    description: 'End-to-end management of a tech channel, including content strategy, video editing, thumbnail design, and SEO optimization.',
    image: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=800&auto=format&fit=crop',
    tags: ['CapCut', 'Content Strategy', 'SEO'],
    category: 'Video & Animation',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card group overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 text-xs font-semibold bg-violet-500/80 backdrop-blur-md text-white rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium bg-slate-800 text-slate-300 rounded-md border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-sm font-semibold text-violet-400 hover:text-cyan-400 transition-colors group/link"
                  >
                    View Project
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                  <div className="flex gap-3">
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
