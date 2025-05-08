import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import Image from 'next/image';

export default function Products() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  // Update selected category and subcategory when URL query changes
  useEffect(() => {
    if (router.isReady) {
      const { category, subcategory } = router.query;
      
      if (category && typeof category === 'string') {
        setSelectedCategory(category);
      } else {
        setSelectedCategory(null);
      }
      
      if (subcategory && typeof subcategory === 'string') {
        setSelectedSubcategory(subcategory);
      } else {
        setSelectedSubcategory(null);
      }
    }
  }, [router.isReady, router.query]);

  // Get filtered products
  const getFilteredProducts = () => {
    // First filter by category if selected
    let filtered = selectedCategory && selectedCategory !== 'All' 
      ? products.filter(product => product.category === selectedCategory)
      : products;
    
    // Then filter by subcategory if selected
    if (selectedSubcategory) {
      filtered = filtered.filter(product => product.subcategory === selectedSubcategory);
    }
    
    return filtered;
  };

  // Filter products based on selections
  const filteredProducts = getFilteredProducts();
  
  // Get current category title and description
  const getCategoryInfo = () => {
    if (selectedSubcategory) {
      return {
        title: selectedSubcategory,
        description: `Premium ${selectedSubcategory} from our collection`
      };
    }
    
    if (!selectedCategory || selectedCategory === 'All') {
      return {
        title: 'Our Products',
        description: 'Explore our wide range of premium corporate gifting solutions'
      };
    }
    
    const descriptions: Record<string, string> = {
      'Bags': 'Discover our exclusive collection of premium bags perfect for gifting. From elegant leather totes to eco-friendly options, find the perfect bag for every occasion.',
      'Bean Bag': 'Comfortable and stylish bean bags for office relaxation areas and breakout spaces.',
      'Books': 'Curated collections of books for professional development, inspiration, and corporate knowledge sharing.',
      'Electronics': 'High-quality electronic gadgets and accessories for the modern professional.',
      'Ergonomics Products': 'Products designed to improve workplace comfort and productivity.',
      'Fitness': 'Premium fitness products for employee wellness and corporate health initiatives.',
      'Home Decor': 'Elegant home and office décor items to enhance any space.',
      'Work From Home Accessories': 'Essential accessories to improve the work-from-home experience.',
      'Neon': 'Custom neon signs and lighting for office branding and ambiance.',
      'Self Pampers': 'Luxury self-care items for employee appreciation and wellness.',
      'Sipper': 'Premium water bottles and tumblers for hydration on the go.',
      'T-Shirts & Jackets & Hoodies': 'Custom branded apparel for corporate events and team building.'
    };
    
    return {
      title: selectedCategory,
      description: descriptions[selectedCategory] || `Premium ${selectedCategory} for corporate gifting`
    };
  };
  
  const { title, description } = getCategoryInfo();
  
  return (
    <>
      <Head>
        <title>{title} | RB Gifting Solutions</title>
        <meta name="description" content={description} />
      </Head>

      <div className="w-full bg-white py-16 md:py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[rgb(3,3,60)]">{title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>
      </div>

      <div className="bg-white text-[#333] py-12 md:py-20">
        <div className="container">
          {/* Products Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id}>
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    imageUrl={product.imageUrl}
                    category={product.category}
                    price={product.price}
                    subcategory={product.subcategory}
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl text-gray-700 mb-4">No products found</h3>
              <p className="text-gray-500 mb-8">Try adjusting your filters to find what you're looking for.</p>
              <button
                onClick={() => router.push('/products')}
                className="bg-[rgb(3,3,60)] text-white px-6 py-3 rounded-md font-medium hover:bg-[rgb(3,3,60)]/90 transition-colors"
              >
                View All Products
              </button>
            </div>
          )}

          {/* Contact CTA */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center bg-white p-12 rounded-lg mt-12 border border-gray-200 shadow-sm"
          >
            <h2 className="text-2xl font-bold mb-6 text-[rgb(3,3,60)]">Can't find what you're looking for?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We offer custom gifting solutions for your specific needs. 
              Contact us to discuss your requirements.
            </p>
            <a href="/contact" className="bg-[rgb(3,3,60)] text-white px-8 py-3 rounded-md font-medium hover:bg-[rgb(3,3,60)]/90 transition-colors">Contact Us</a>
          </motion.div>
        </div>
      </div>
    </>
  );
} 