'use client';

import { useState } from 'react';
import SubHeader from '@/app/components/SubHeader';
import { PhoneIcon, MailIcon, MapPinIcon, CheckCircleIcon, ClockIcon } from '@/app/components/Icons';
import { siteConfig } from '@/app/lib/data';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <SubHeader
        title="Contact Us"
        breadcrumbs={[{ label: 'Contact Us' }]}
        subtitle="Get in touch with our team for inquiries, quotes, or any questions about our services."
      />

      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <p className="text-muted mb-8">
                Have questions about our services? Need a quote for your project?
                We&apos;re here to help. Reach out to us through any of the following channels.
              </p>

              <div className="space-y-6">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-primary-50 group-hover:bg-primary rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                    <PhoneIcon size={22} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Phone</h4>
                    <p className="text-muted">{siteConfig.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-primary-50 group-hover:bg-primary rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                    <MailIcon size={22} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Email</h4>
                    <p className="text-muted">{siteConfig.email}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPinIcon size={22} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Address</h4>
                    <p className="text-muted">
                      {siteConfig.address.street}<br />
                      {siteConfig.address.city}, {siteConfig.address.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ClockIcon size={22} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Working Hours</h4>
                    <p className="text-muted">
                      Sunday - Thursday: 8:00 AM - 6:00 PM<br />
                      Friday - Saturday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-8 p-6 bg-green-50 rounded-2xl border border-green-200">
                <h4 className="font-bold text-foreground mb-2">Quick Response via WhatsApp</h4>
                <p className="text-muted text-sm mb-4">
                  Get instant replies to your queries through WhatsApp.
                </p>
                <a
                  href={`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, '')}?text=Hi, I'm interested in your services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-green-500 hover:bg-green-600 !text-white w-full"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#fff">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
                <p className="text-muted mb-8">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircleIcon size={40} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                    <p className="text-muted mb-6">
                      Your message has been sent successfully. We&apos;ll contact you shortly.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
                      }}
                      className="btn btn-outline"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="form-group mb-0">
                        <label htmlFor="name" className="form-label">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="form-input"
                          placeholder="Your full name"
                        />
                      </div>

                      <div className="form-group mb-0">
                        <label htmlFor="email" className="form-label">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="form-input"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="form-group mb-0">
                        <label htmlFor="phone" className="form-label">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="form-input"
                          placeholder="+974 XXXX XXXX"
                        />
                      </div>

                      <div className="form-group mb-0">
                        <label htmlFor="service" className="form-label">
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="form-input"
                        >
                          <option value="">Select a service</option>
                          <option value="duct-sealing">Duct Sealing System</option>
                          <option value="water-tightness">Water Tightness & Lining</option>
                          <option value="structural">Structural Strengthening</option>
                          <option value="fireproofing">Fire Proofing & Insulation</option>
                          <option value="epoxy-flooring">Epoxy & Industrial Flooring</option>
                          <option value="crack-injection">Crack Injection</option>
                          <option value="guniting">Guniting & Shotcreting</option>
                          <option value="concrete-repair">Concrete Repair & Grouting</option>
                          <option value="other">Other Services</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message" className="form-label">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="form-input form-textarea"
                        placeholder="Tell us about your project requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="spinner w-5 h-5" />
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115456.32803946156!2d51.43540399999999!3d25.285436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x1cfa88cf72c36c0!2sDoha%2C%20Qatar!5e0!3m2!1sen!2s!4v1703982100000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Green Ladder Qatar Location"
        />
      </section>
    </>
  );
}

