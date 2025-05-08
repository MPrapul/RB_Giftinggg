import { motion } from 'framer-motion';
import Head from 'next/head';
import HeroSection from '@/components/HeroSection';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import Link from 'next/link';

export default function Home() {
  // Select featured products (first 4 products)
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      <Head>
        <title>RB Gifting Solutions | Corporate Gifting & Event Services</title>
        <meta name="description" content="Premium corporate gifting and event solutions for businesses of all sizes. Create meaningful connections through thoughtful gifting." />
      </Head>

      <HeroSection />

      {/* Featured Products Section */}
      <div className="bg-white text-[#333] py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[rgb(3,3,60)]">Featured Products</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our collection of premium corporate gifting solutions designed to make a lasting impression.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-[rgb(3,3,60)] rounded-lg overflow-hidden shadow-md">
                <ProductCard
                  id={product.id}
                  name={product.name}
                  imageUrl={product.imageUrl}
                  category={product.category}
                  price={product.price}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products" className="inline-block bg-[rgb(3,3,60)] text-white px-8 py-3 rounded-md font-medium hover:bg-[rgb(6,6,90)] transition-colors">
              View All Products
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-[rgb(3,3,60)] text-white py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose RB Gifting Solutions</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              We combine creativity, quality, and personalization to create memorable gifting experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 p-8 rounded-lg text-center"
            >
              <div className="w-16 h-16 bg-mint/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-mint">✦</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Approach</h3>
              <p className="text-white/80">We tailor every gifting solution to match your brand identity and specific needs.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 p-8 rounded-lg text-center"
            >
              <div className="w-16 h-16 bg-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-pink">✦</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
              <p className="text-white/80">We source only the highest quality products to ensure your gifts make the right impression.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/5 p-8 rounded-lg text-center"
            >
              <div className="w-16 h-16 bg-mustard/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-mustard">✦</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">End-to-End Service</h3>
              <p className="text-white/80">From ideation to delivery, we handle every aspect of the gifting process with care.</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center bg-[rgb(3,3,60)] text-white p-12 rounded-lg"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to transform your corporate gifting experience?</h2>
            <Link href="/contact" className="bg-white text-[rgb(3,3,60)] px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
} 