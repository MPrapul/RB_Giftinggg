import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { products } from '@/data/products';
import Link from 'next/link';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  
  // Find the product
  const product = products.find(p => p.id === id);
  
  // Handle loading and not found states
  if (router.isFallback || !product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[rgb(3,3,60)] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[rgb(3,3,60)]">Loading product...</p>
        </div>
      </div>
    );
  }
  
  // Find related products (same category)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  
  return (
    <>
      <Head>
        <title>{product.name} | RB Gifting Solutions</title>
        <meta name="description" content={product.description || `Details about ${product.name}`} />
      </Head>

      <div className="bg-white text-[#333] py-12 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white p-2 rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div>
                <div className="flex items-center mb-2">
                  <Link 
                    href="/products" 
                    className="text-sm text-[rgb(3,3,60)]/60 hover:text-[rgb(3,3,60)] mr-2"
                  >
                    Products
                  </Link>
                  <span className="text-sm text-[rgb(3,3,60)]/60 mx-2">/</span>
                  <Link 
                    href={`/products?category=${encodeURIComponent(product.category)}`}
                    className="text-sm text-[rgb(3,3,60)]/60 hover:text-[rgb(3,3,60)]"
                  >
                    {product.category}
                  </Link>
                  {product.subcategory && (
                    <>
                      <span className="text-sm text-[rgb(3,3,60)]/60 mx-2">/</span>
                      <Link 
                        href={`/products?category=${encodeURIComponent(product.category)}&subcategory=${encodeURIComponent(product.subcategory)}`}
                        className="text-sm text-[rgb(3,3,60)]/60 hover:text-[rgb(3,3,60)]"
                      >
                        {product.subcategory}
                      </Link>
                    </>
                  )}
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-3 text-[rgb(3,3,60)]">{product.name}</h1>
                
                <div className="text-2xl font-bold text-mint mb-6">₹{product.price.toLocaleString()}</div>
                
                <div className="prose max-w-none mb-8">
                  <p className="text-gray-600">
                    {product.description || "No description available."}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <button className="bg-[rgb(3,3,60)] text-white px-6 py-3 rounded-md font-medium hover:bg-[rgb(3,3,60)]/90 transition-colors flex-1">
                    Add to Inquiry
                  </button>
                  <a 
                    href="/contact" 
                    className="border border-[rgb(3,3,60)] text-[rgb(3,3,60)] px-6 py-3 rounded-md font-medium hover:bg-[rgb(3,3,60)]/5 transition-colors text-center flex-1"
                  >
                    Contact for Bulk Order
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-20 pt-12 border-t border-gray-200">
              <h2 className="text-2xl font-bold mb-8 text-[rgb(3,3,60)]">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <motion.div
                    key={relatedProduct.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="group"
                  >
                    <Link href={`/products/${relatedProduct.id}`}>
                      <div className="bg-white p-2 rounded-lg overflow-hidden border border-gray-100 shadow-sm mb-4">
                        <div className="relative aspect-square w-full overflow-hidden">
                          <Image
                            src={relatedProduct.imageUrl}
                            alt={relatedProduct.name}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      </div>
                      <h3 className="font-medium text-[rgb(3,3,60)] group-hover:text-blue-700 transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-[#4ade80]">₹{relatedProduct.price.toLocaleString()}</span>
                        {relatedProduct.subcategory && (
                          <span className="text-sm text-gray-500">{relatedProduct.subcategory}</span>
                        )}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
} 