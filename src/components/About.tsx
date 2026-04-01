import { motion } from 'motion/react';
import { Code2, Briefcase, GraduationCap, Globe } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '3+', icon: Briefcase },
  { label: 'Projects Completed', value: '25+', icon: Code2 },
  { label: 'Current GPA', value: '3.8', icon: GraduationCap },
  { label: 'Languages', value: '4', icon: Globe },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative group"
          >
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative aspect-square rounded-3xl overflow-hidden glass border border-slate-700 p-2">
              <img
                src="/profile.jpg"
                alt="Samuel Tigstu"
                className="w-full h-full object-cover rounded-2xl filter grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback if the user hasn't uploaded their image yet
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop";
                }}
              />
              <div className="absolute bottom-6 left-6 right-6 glass-card p-4 backdrop-blur-md">
                <p className="text-sm font-medium text-slate-300">
                  Electrical & Computer Engineering Student
                </p>
                <p className="text-xs text-slate-400 mt-1">Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4 text-lg text-slate-300 leading-relaxed">
              <p>
                I am a 5th-year Electrical & Computer Engineering student with a profound passion for building innovative digital solutions. My journey bridges the gap between hardware logic and software creativity.
              </p>
              <p>
                As a versatile developer and creator, I specialize in full-stack web development, AI training, and multimedia production. Whether it's architecting a robust backend, integrating SMS APIs, or editing engaging YouTube content, I bring a unique blend of technical precision and creative flair to every project.
              </p>
              <p>
                Fluent in English and Amharic, with basic knowledge of German and Spanish, I thrive in diverse environments and am constantly seeking new challenges to expand my skill set.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-4 text-center group"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-violet-400 group-hover:text-cyan-400 transition-colors" />
                  <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
