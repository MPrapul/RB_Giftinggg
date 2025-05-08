import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export interface ProductCardProps {
  id: string;
  name: string;
  imageUrl: string;
  category: string;
  price: number;
  subcategory?: string;
}

export default function ProductCard({ 
  id, 
  name, 
  imageUrl, 
  category, 
  price, 
  subcategory
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="card group bg-white rounded-md overflow-hidden shadow-sm border border-gray-100"
    >
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-[rgb(3,3,60)] group-hover:text-blue-700 transition-colors">{name}</h3>
        {subcategory && (
          <p className="text-sm text-gray-500 mt-1">{subcategory}</p>
        )}
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-medium text-[#4ade80]">₹{price.toLocaleString()}</span>
          <Link
            href={`/products/${id}`}
            className="inline-flex items-center text-sm font-medium text-[rgb(3,3,60)] hover:text-blue-700 transition-colors"
          >
            Details
            <svg
              className="ml-1 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
} 