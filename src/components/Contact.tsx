import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { sectionRevealVariants, headingLineVariants, paragraphVariants } from '../animations';

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" ref={containerRef} className="relative overflow-hidden bg-charcoal py-20 md:py-24 lg:py-32">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-12 md:mb-14 lg:mb-16 max-w-3xl space-y-4"
        >
          <motion.p 
            variants={paragraphVariants}
            className="text-ivory-white/50 text-xs tracking-[0.3em] uppercase"
          >
            Get In Touch
          </motion.p>
          
          <div className="overflow-hidden">
            <motion.h2 
              variants={headingLineVariants}
              custom={0}
              className="text-[clamp(1.8rem,5vw,7rem)] font-light tracking-[-0.02em] text-ivory-white"
            >
              Let's Build Together
            </motion.h2>
          </div>
          
          <motion.p 
            variants={paragraphVariants}
            className="text-base md:text-lg leading-relaxed text-ivory-white/70"
          >
            Have questions or want to get involved? We'd love to hear from you. Reach out and join us in making a difference in the community.
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ delay: 0.15, duration: 0.8, ease: 'easeOut' }}
            className="rounded-[24px] border border-ivory-white/10 bg-charcoal/60 p-6 md:p-8 lg:p-10"
            whileHover={{ y: -4 }}
          >
            <div className="space-y-10 mb-12">
              {[
                { label: 'Location', value: 'Cowdray Park, Bulawayo, Zimbabwe' },
                { label: 'Email', value: 'info@cowdrayparkfoundation.org' },
                { label: 'Phone', value: '0714913385' },
              ].map((item) => (
                <div key={item.label} className="border-t border-ivory-white/10 pt-6">
                  <p className="text-ivory-white/50 text-xs tracking-[0.15em] uppercase mb-3">{item.label}</p>
                  <p className="text-ivory-white text-lg">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-ivory-white/10 pt-10">
              <p className="text-ivory-white/50 text-xs tracking-[0.15em] uppercase mb-6">Follow Us</p>
              <div className="flex flex-wrap gap-4">
                {['Instagram', 'Facebook', 'Twitter'].map((social) => (
                  <button
                    key={social}
                    className="px-4 py-2 text-[0.65rem] tracking-[0.12em] uppercase text-ivory-white/60 hover:text-ivory-white border border-ivory-white/20 hover:border-ivory-white/40 transition-colors"
                  >
                    {social}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            className="space-y-5 rounded-[24px] border border-ivory-white/10 bg-charcoal/60 p-6 md:p-8 lg:p-10"
            whileHover={{ y: -4 }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-ivory-white/50 text-xs tracking-[0.15em] uppercase mb-3">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full py-4 bg-transparent border-b border-ivory-white/20 text-ivory-white placeholder-ivory-white/30 focus:border-ivory-white focus:outline-none transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-ivory-white/50 text-xs tracking-[0.15em] uppercase mb-3">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full py-4 bg-transparent border-b border-ivory-white/20 text-ivory-white placeholder-ivory-white/30 focus:border-ivory-white focus:outline-none transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-ivory-white/50 text-xs tracking-[0.15em] uppercase mb-3">Subject</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full py-4 bg-transparent border-b border-ivory-white/20 text-ivory-white placeholder-ivory-white/30 focus:border-ivory-white focus:outline-none transition-colors"
                placeholder="How can we help?"
                required
              />
            </div>

            <div>
              <label className="block text-ivory-white/50 text-xs tracking-[0.15em] uppercase mb-3">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full py-4 bg-transparent border-b border-ivory-white/20 text-ivory-white placeholder-ivory-white/30 focus:border-ivory-white focus:outline-none transition-colors resize-none"
                placeholder="Your message..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-10 py-5 bg-luxury-gold text-rich-black text-sm font-medium tracking-[0.1em] uppercase hover:bg-champagne-gold transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
