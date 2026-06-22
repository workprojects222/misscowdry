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
    <section id="contact" ref={containerRef} className="relative overflow-hidden bg-charcoal py-24 md:py-32 lg:py-48">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20 lg:mb-24 max-w-3xl"
        >
          <p className="text-ivory-white/50 text-xs tracking-[0.3em] uppercase mb-6">Get In Touch</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-[-0.02em] text-ivory-white mb-8">
            Let's Build Together
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-ivory-white/70">
            Have questions or want to get involved? We'd love to hear from you. Reach out and join us in making a difference in the community.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="rounded-[32px] border border-ivory-white/10 bg-ivory-white/5 p-10 md:p-12 lg:p-16"
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
                    className="px-6 py-3 text-xs tracking-[0.1em] uppercase text-ivory-white/60 hover:text-ivory-white border border-ivory-white/20 hover:border-ivory-white/40 transition-colors"
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
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="space-y-8 rounded-[32px] border border-ivory-white/10 bg-ivory-white/5 p-10 md:p-12 lg:p-16"
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
                ))}
              </div>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="space-y-8 rounded-[32px] border border-ivory-white/10 bg-ivory-white/5 p-8"
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
