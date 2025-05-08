import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import PageHeader from '../components/PageHeader';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | RB Gifting Solutions</title>
        <meta name="description" content="Learn more about RB Gifting Solutions - your complete gifting and event partner" />
      </Head>

      <PageHeader 
        title="Our Story" 
        subtitle="Creating memorable moments through thoughtful gifting since 2020" 
      />

      <div className="bg-white text-[#333] py-12 md:py-20">
        <div className="container">
          {/* Our Approach/Story - Moved to the top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-24"
          >
            <h2 className="text-4xl font-bold mb-12 text-center text-[rgb(3,3,60)]">Our Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="md:order-1">
                <Image 
                  src="https://images.unsplash.com/photo-1544932806-1ebeb63915dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                  alt="Gifting packages" 
                  width={600}
                  height={400}
                  priority
                  className="rounded-lg shadow-lg object-cover w-full h-auto"
                />
              </div>
              <div className="md:order-2">
                <p className="text-lg text-gray-700 mb-4">
                  RB Gifting Solutions was established with a vision to redefine corporate gifting and event experiences. 
                  What began as a small venture has now evolved into a comprehensive solutions provider trusted by businesses across industries.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  We believe that thoughtful gifting and well-executed events create authentic connections that drive business relationships forward.
                  Our team combines creativity with strategic thinking to deliver experiences that resonate with your brand identity and values.
                </p>
                <p className="text-lg text-gray-700">
                  With years of industry expertise and a passion for excellence, we've established ourselves as a trusted partner for companies 
                  looking to make meaningful impressions through personalized gifting and memorable events.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mission and Vision Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-4xl font-bold mb-8 text-[rgb(3,3,60)]">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-4">
                To transform corporate gifting into meaningful experiences that strengthen relationships and create
                lasting impressions. We believe in the power of thoughtful gestures to build connections and foster
                positive workplace culture.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-4xl font-bold mb-8 text-[rgb(3,3,60)]">Our Vision</h2>
              <p className="text-lg text-gray-700 mb-4">
                To be the leading corporate gifting solution provider, known for our innovative approach, sustainable
                practices, and ability to create personalized experiences that resonate with both givers and recipients.
              </p>
            </motion.div>
          </div>

          {/* Our Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-24"
          >
            <h2 className="text-4xl font-bold mb-12 text-center text-[rgb(3,3,60)]">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm">
                <div className="w-16 h-16 bg-mint/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-mint">✦</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[rgb(3,3,60)]">Excellence</h3>
                <p className="text-gray-700">We strive for perfection in every gift curated and every event planned.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm">
                <div className="w-16 h-16 bg-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-pink">✦</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[rgb(3,3,60)]">Creativity</h3>
                <p className="text-gray-700">We bring fresh, innovative ideas to create unique experiences.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm">
                <div className="w-16 h-16 bg-mustard/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-mustard">✦</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[rgb(3,3,60)]">Integrity</h3>
                <p className="text-gray-700">We build trust through transparent practices and honest communication.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm">
                <div className="w-16 h-16 bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-blue-400">✦</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[rgb(3,3,60)]">Partnership</h3>
                <p className="text-gray-700">We work as an extension of your team to achieve shared goals.</p>
              </div>
            </div>
          </motion.div>

          {/* Leadership Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-24"
          >
            <h2 className="text-4xl font-bold mb-12 text-center text-[rgb(3,3,60)]">Our Leadership</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm">
                <div className="w-32 h-32 overflow-hidden rounded-full mx-auto mb-4">
                  <Image 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                    alt="Founder & CEO" 
                    width={150}
                    height={150}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-[rgb(3,3,60)]">Rani Sharma</h3>
                <p className="text-mint mb-3">Founder & CEO</p>
                <p className="text-gray-700">With over 15 years in corporate event management, Rani brings expertise and vision to every project.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm">
                <div className="w-32 h-32 overflow-hidden rounded-full mx-auto mb-4">
                  <Image 
                    src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                    alt="Creative Director" 
                    width={150}
                    height={150}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-[rgb(3,3,60)]">Bharath Kumar</h3>
                <p className="text-pink mb-3">Creative Director</p>
                <p className="text-gray-700">Bharath leads our creative team with innovative ideas that elevate gifting experiences.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm">
                <div className="w-32 h-32 overflow-hidden rounded-full mx-auto mb-4">
                  <Image 
                    src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                    alt="Operations Manager" 
                    width={150}
                    height={150}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-[rgb(3,3,60)]">Priya Desai</h3>
                <p className="text-mustard mb-3">Operations Manager</p>
                <p className="text-gray-700">Priya ensures flawless execution of every project with attention to detail and process excellence.</p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center bg-[rgb(3,3,60)] text-white p-12 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-6">Ready to elevate your gifting and event experiences?</h2>
            <a href="/contact" className="bg-white text-[rgb(3,3,60)] px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">Contact Us Today</a>
          </motion.div>
        </div>
      </div>
    </>
  );
} 