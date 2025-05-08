import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Mail, MapPin, Calendar } from 'lucide-react';
import PageHeader from '../components/PageHeader';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [appointmentState, setAppointmentState] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    purpose: '',
  });
  
  const [activeTab, setActiveTab] = useState('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (activeTab === 'contact') {
      setFormState((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      setAppointmentState((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    // This is where you would normally send the form data to your backend
    // For this example, we'll simulate a successful submission after a delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      if (activeTab === 'contact') {
        setFormState({
          name: '',
          email: '',
          message: '',
        });
      } else {
        setAppointmentState({
          name: '',
          email: '',
          date: '',
          time: '',
          purpose: '',
        });
      }
    }, 1500);
  };

  // Generate next 14 available days for appointment scheduling
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip Sundays (day 0)
      if (date.getDay() !== 0) {
        const formattedDate = date.toISOString().split('T')[0];
        dates.push(formattedDate);
      }
    }
    
    return dates;
  };
  
  // Available time slots
  const timeSlots = [
    "10:00 AM", "11:00 AM", "12:00 PM", 
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  return (
    <>
      <Head>
        <title>Contact Us | RB Gifting Solutions</title>
        <meta name="description" content="Get in touch with RB Gifting Solutions for all your corporate gifting needs" />
      </Head>

      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with our team to discuss your gifting requirements" 
      />

      <div className="bg-white text-[#333] py-12 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Tabs */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex mb-4 border-b border-gray-200">
                <button 
                  className={`py-2 px-4 font-medium ${activeTab === 'contact' ? 'text-mint border-b-2 border-mint' : 'text-gray-500'}`}
                  onClick={() => setActiveTab('contact')}
                >
                  Send Message
                </button>
                <button 
                  className={`py-2 px-4 font-medium ${activeTab === 'appointment' ? 'text-mint border-b-2 border-mint' : 'text-gray-500'}`}
                  onClick={() => setActiveTab('appointment')}
                >
                  Schedule Appointment
                </button>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                {activeTab === 'contact' ? (
                  <>
                    <h2 className="text-2xl font-bold mb-6 text-[rgb(3,3,60)]">Send Us a Message</h2>
                    
                    {submitSuccess && activeTab === 'contact' ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-mint/10 border border-mint text-[rgb(3,3,60)] p-4 rounded-md mb-6"
                      >
                        <p>Thank you for your message! We'll get back to you soon.</p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Your Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formState.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-mint focus:border-transparent"
                          />
                        </div>

                        <div className="mb-4">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formState.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-mint focus:border-transparent"
                          />
                        </div>

                        <div className="mb-6">
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Your Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={5}
                            required
                            value={formState.message}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-mint focus:border-transparent"
                          />
                        </div>

                        {submitError && (
                          <div className="bg-pink/10 border border-pink text-[rgb(3,3,60)] p-4 rounded-md mb-6">
                            <p>{submitError}</p>
                          </div>
                        )}

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-[rgb(3,3,60)] text-white px-6 py-2 rounded-md font-medium hover:bg-[rgb(6,6,90)] transition-colors disabled:opacity-70"
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                      </form>
                    )}
                  </>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold mb-6 text-[rgb(3,3,60)]">Schedule an Appointment</h2>
                    
                    {submitSuccess && activeTab === 'appointment' ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-mint/10 border border-mint text-[rgb(3,3,60)] p-4 rounded-md mb-6"
                      >
                        <p>Thank you for scheduling an appointment! We'll confirm your slot soon.</p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                          <label htmlFor="appointment-name" className="block text-sm font-medium text-gray-700 mb-1">
                            Your Name
                          </label>
                          <input
                            type="text"
                            id="appointment-name"
                            name="name"
                            required
                            value={appointmentState.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-mint focus:border-transparent"
                          />
                        </div>

                        <div className="mb-4">
                          <label htmlFor="appointment-email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="appointment-email"
                            name="email"
                            required
                            value={appointmentState.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-mint focus:border-transparent"
                          />
                        </div>

                        <div className="mb-4">
                          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                            Preferred Date
                          </label>
                          <select
                            id="date"
                            name="date"
                            required
                            value={appointmentState.date}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-mint focus:border-transparent"
                          >
                            <option value="">Select a date</option>
                            {generateAvailableDates().map((date) => (
                              <option key={date} value={date}>
                                {new Date(date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="mb-4">
                          <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                            Preferred Time
                          </label>
                          <select
                            id="time"
                            name="time"
                            required
                            value={appointmentState.time}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-mint focus:border-transparent"
                          >
                            <option value="">Select a time</option>
                            {timeSlots.map((time) => (
                              <option key={time} value={time}>
                                {time}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="mb-6">
                          <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-1">
                            Purpose of Meeting
                          </label>
                          <select
                            id="purpose"
                            name="purpose"
                            required
                            value={appointmentState.purpose}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-mint focus:border-transparent"
                          >
                            <option value="">Select purpose</option>
                            <option value="Corporate Gifting">Corporate Gifting</option>
                            <option value="Event Planning">Event Planning</option>
                            <option value="Custom Order">Custom Order</option>
                            <option value="General Inquiry">General Inquiry</option>
                          </select>
                        </div>

                        {submitError && (
                          <div className="bg-pink/10 border border-pink text-[rgb(3,3,60)] p-4 rounded-md mb-6">
                            <p>{submitError}</p>
                          </div>
                        )}

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-[rgb(3,3,60)] text-white px-6 py-2 rounded-md font-medium hover:bg-[rgb(6,6,90)] transition-colors disabled:opacity-70"
                        >
                          {isSubmitting ? 'Scheduling...' : 'Schedule Appointment'}
                        </button>
                      </form>
                    )}
                  </>
                )}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-[rgb(3,3,60)] p-8 rounded-lg text-white h-full">
                <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-mint mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Visit Us</h3>
                      <p className="text-white/80">
                        3rd Floor, Tech Park<br />
                        Whitefield, Bangalore 560066
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-mint mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Email Us</h3>
                      <p className="text-white/80">
                        info@rbgiftingsolutions.com<br />
                        support@rbgiftingsolutions.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Calendar className="w-6 h-6 text-mint mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Business Hours</h3>
                      <p className="text-white/80">
                        Monday to Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="font-medium mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                      <a
                        key={social}
                        href={`#${social}`}
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                      >
                        <span className="sr-only">{social}</span>
                        {/* Replace with actual icons */}
                        <div className="w-5 h-5 text-white">{social.charAt(0).toUpperCase()}</div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center bg-[rgb(3,3,60)] text-white p-12 rounded-lg mt-16"
          >
            <h2 className="text-2xl font-bold mb-6">Looking for custom gifting solutions?</h2>
            <a href="/products" className="bg-white text-[rgb(3,3,60)] px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">Explore Our Products</a>
          </motion.div>
        </div>
      </div>
    </>
  );
} 