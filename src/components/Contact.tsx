import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

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
    <section id="contact" ref={containerRef} className="relative overflow-hidden bg-warm py-24 md:py-32 lg:py-40">
      <div className="container-wide px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 md:mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-charcoal/50 text-xs tracking-[0.3em] uppercase mb-6"
            >
              Get In Touch
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="grid gap-4 xl:grid-cols-[1fr_auto] xl:items-end"
            >
              <div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-[-0.02em] text-charcoal">
                  Let's Build
                </h2>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.02em] text-lime">
                  Together
                </h2>
              </div>
              <p className="text-charcoal/60 text-base md:text-lg leading-relaxed max-w-xl">
                Have questions or want to get involved? We'd love to hear from you. Reach out and join us in making a difference in the community.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="rounded-[32px] border border-charcoal/10 bg-white/10 p-8"
            >
              <div className="space-y-8 mb-10">
                {[
                  { label: 'Location', value: 'Cowdray Park, Bulawayo, Zimbabwe' },
                  { label: 'Email', value: 'info@cowdrayparkfoundation.org' },
                  { label: 'Phone', value: '0714913385' },
                ].map((item) => (
                  <div key={item.label} className="border-t border-charcoal/10 pt-4">
                    <p className="text-charcoal/50 text-xs tracking-[0.15em] uppercase mb-2">{item.label}</p>
                    <p className="text-charcoal text-base">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                {['Instagram', 'Facebook', 'Twitter'].map((social) => (
                  <button
                    key={social}
                    className="px-5 py-3 text-xs tracking-[0.1em] uppercase text-charcoal/60 hover:text-charcoal border border-charcoal/20 hover:border-charcoal/40 transition-colors"
                  >
                    {social}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="space-y-8 rounded-[32px] border border-charcoal/10 bg-white/10 p-8"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-charcoal/50 text-xs tracking-[0.15em] uppercase mb-3">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full py-4 bg-transparent border-b border-charcoal/20 text-charcoal placeholder-charcoal/30 focus:border-charcoal focus:outline-none transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-charcoal/50 text-xs tracking-[0.15em] uppercase mb-3">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full py-4 bg-transparent border-b border-charcoal/20 text-charcoal placeholder-charcoal/30 focus:border-charcoal focus:outline-none transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-charcoal/50 text-xs tracking-[0.15em] uppercase mb-3">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full py-4 bg-transparent border-b border-charcoal/20 text-charcoal placeholder-charcoal/30 focus:border-charcoal focus:outline-none transition-colors"
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div>
                <label className="block text-charcoal/50 text-xs tracking-[0.15em] uppercase mb-3">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full py-4 bg-transparent border-b border-charcoal/20 text-charcoal placeholder-charcoal/30 focus:border-charcoal focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-10 py-5 bg-charcoal text-warm text-sm tracking-[0.1em] uppercase hover:bg-lime hover:text-charcoal transition-colors"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
