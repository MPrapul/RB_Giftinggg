import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import PageHeader from '../components/PageHeader';

export default function Events() {
  // Sample icons for services (we'd use actual icons in a real implementation)
  const serviceIcons = {
    event: "🎯",
    gift: "🎁",
    theme: "🎨",
    documentation: "📸",
  };

  return (
    <>
      <Head>
        <title>Events | RB Gifting Solutions</title>
        <meta name="description" content="Learn about our corporate events and celebration services" />
      </Head>

      <PageHeader 
        title="Corporate Events" 
        subtitle="Creating extraordinary experiences that leave lasting impressions" 
      />

      <div className="bg-white text-[#333] py-12 md:py-20">
        <div className="container">
          {/* Our Services Section - Moved to top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-24"
          >
            <h2 className="text-4xl font-bold mb-12 text-center text-[rgb(3,3,60)]">Our Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm">
                <div className="w-16 h-16 bg-mint/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-mint">{serviceIcons.event}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[rgb(3,3,60)]">Event Planning</h3>
                <p className="text-gray-700">Comprehensive event planning and management</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm">
                <div className="w-16 h-16 bg-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-pink">{serviceIcons.gift}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[rgb(3,3,60)]">Gift Curation</h3>
                <p className="text-gray-700">Personalized corporate gifting solutions</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm">
                <div className="w-16 h-16 bg-mustard/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-mustard">{serviceIcons.theme}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[rgb(3,3,60)]">Theme Design</h3>
                <p className="text-gray-700">Creative theme development and execution</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm">
                <div className="w-16 h-16 bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-blue-400">{serviceIcons.documentation}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[rgb(3,3,60)]">Documentation</h3>
                <p className="text-gray-700">Professional event photography and video</p>
              </div>
            </div>
          </motion.div>

          {/* What Our Clients Say Section - Moved up */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-24"
          >
            <h2 className="text-4xl font-bold mb-12 text-center text-[rgb(3,3,60)]">What Our Clients Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  text: "The team at RB Gifting Solutions delivered an incredible wellness program for our employees. The feedback was overwhelmingly positive.",
                  author: "Priya Singh, HR Director"
                },
                {
                  text: "Our annual company celebration was flawlessly executed. The attention to detail and personalized approach made all the difference.",
                  author: "Rahul Mehra, CEO"
                },
                {
                  text: "The customized gift packages for our Diwali celebration were thoughtful and of excellent quality. Our clients were truly impressed.",
                  author: "Ananya Sharma, Marketing Head"
                }
              ].map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg shadow-sm"
                >
                  <p className="text-gray-700 italic mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                  <p className="text-mint font-medium">{testimonial.author}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <h2 className="text-4xl font-bold mb-12 text-center text-[rgb(3,3,60)]">Event Categories</h2>

          {/* Corporate Events Section */}
          <div className="mb-20">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
              <div className="lg:w-1/2">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold mb-4 text-[rgb(3,3,60)]">Corporate Events</h2>
                  <p className="text-gray-700 mb-8 text-lg">
                    From team building to annual celebrations, we create memorable corporate events.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {["Team Building", "Annual Meets", "Product Launches", "Award Ceremonies"].map((item, index) => (
                      <div 
                        key={index}
                        className="py-2 px-4 bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg text-center text-[rgb(3,3,60)]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
              <div className="lg:w-1/2 relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/sample-images/Corporate.webp" 
                  alt="Corporate event venue"
                  width={800}
                  height={400}
                  priority
                  className="object-cover object-center w-full h-full absolute inset-0"
                />
              </div>
            </div>
          </div>

          {/* Wellness Events Section */}
          <div className="mb-20">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="lg:w-1/2 relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Wellness event with fitness coach"
                  width={800}
                  height={400}
                  className="object-cover object-center w-full h-full absolute inset-0"
                />
              </div>
              <div className="lg:w-1/2">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold mb-4 text-[rgb(3,3,60)]">Wellness Events</h2>
                  <p className="text-gray-700 mb-8 text-lg">
                    Promote employee wellness through engaging health and fitness events.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {["Yoga Sessions", "Fitness Challenges", "Mental Health Workshops", "Nutrition Seminars"].map((item, index) => (
                      <div 
                        key={index}
                        className="py-2 px-4 bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg text-center text-[rgb(3,3,60)]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Festive Celebrations Section */}
          <div className="mb-20">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
              <div className="lg:w-1/2">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold mb-4 text-[rgb(3,3,60)]">Festive Celebrations</h2>
                  <p className="text-gray-700 mb-8 text-lg">
                    Make every festival special with our curated celebration packages.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {["Diwali", "Christmas", "New Year", "Employee Birthdays"].map((item, index) => (
                      <div 
                        key={index}
                        className="py-2 px-4 bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg text-center text-[rgb(3,3,60)]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
              <div className="lg:w-1/2 relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Festive celebration"
                  width={800}
                  height={400}
                  className="object-cover object-center w-full h-full absolute inset-0"
                />
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-center bg-[rgb(3,3,60)] text-white p-12 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-6">Ready to create a memorable event for your team?</h2>
            <a href="/contact" className="bg-white text-[rgb(3,3,60)] px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">Contact Us Today</a>
          </motion.div>
        </div>
      </div>
    </>
  );
} 