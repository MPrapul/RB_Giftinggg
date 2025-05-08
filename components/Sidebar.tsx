import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Menu, X, ChevronDown, ChevronUp, Facebook, Twitter, Instagram } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/utils/cn';
import { categories } from '@/data/products';

export default function Sidebar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const toggleProducts = () => {
    setProductsOpen(!productsOpen);
  };

  // Function to close sidebar
  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          type="button"
          className="p-2 text-white"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <div
        className={cn(
          'fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-background transform transition-transform duration-300 ease-in-out lg:translate-x-0 border-r border-white/10',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex justify-between items-center p-4 lg:hidden">
          <div className="h-8 w-8" /> {/* Empty spacer */}
          <button
            type="button"
            className="p-2 text-white"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-col justify-between h-full p-6 overflow-y-auto">
          <div>
            <div className="mb-2 flex flex-col items-center">
              <Link href="/" className="flex flex-col items-center" onClick={closeSidebar}>
                <div className="relative w-28 h-28">
                  <Image 
                    src="/sample-images/rb_logo.png" 
                    alt="RB Gifting Solutions Logo" 
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                  />
                </div>
              </Link>
              <div className="text-gray-400 text-sm italic mt-1">gifting & events</div>
            </div>

            <nav className="flex flex-col mt-12">
              <Link href="/" className="px-4 py-3 text-gray-400 hover:text-white text-sm border-b border-white/10" onClick={closeSidebar}>
                HOME
              </Link>
              
              <Link href="/about" className="px-4 py-3 text-gray-400 hover:text-white text-sm border-b border-white/10" onClick={closeSidebar}>
                ABOUT US
              </Link>

              {/* Products Section with Dropdown */}
              <div className="border-b border-white/10">
                <button 
                  onClick={toggleProducts}
                  className="w-full flex justify-between items-center px-4 py-3 text-mint uppercase text-sm"
                >
                  <span>PRODUCTS</span>
                  {productsOpen ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
                
                {productsOpen && (
                  <div className="flex flex-col">
                    {categories.map((category) => (
                      <Link
                        key={category}
                        href={`/products?category=${encodeURIComponent(category)}`}
                        className={`px-4 py-3 text-sm ${
                          router.asPath.includes(`category=${encodeURIComponent(category)}`)
                            ? 'text-white'
                            : 'text-gray-400 hover:text-white'
                        }`}
                        onClick={closeSidebar}
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Events Link */}
              <Link href="/events" className="px-4 py-3 text-gray-400 hover:text-white text-sm border-b border-white/10" onClick={closeSidebar}>
                EVENTS
              </Link>

              {/* Contact Link */}
              <Link href="/contact" className="px-4 py-3 text-gray-400 hover:text-white text-sm border-b border-white/10" onClick={closeSidebar}>
                CONTACT
              </Link>
            </nav>
          </div>

          <div className="flex justify-center space-x-6 pt-6 mt-8">
            <a href="#" className="text-white hover:text-mint" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-white hover:text-mint" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-white hover:text-mint" aria-label="Instagram">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
} 