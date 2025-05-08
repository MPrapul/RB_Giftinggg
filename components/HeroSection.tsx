import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const slides = [
    {
      image: '/sample-images/daria-shevtsova-d7v2EXFJcWY-unsplash.jpg',
      title: 'Creating Joy',
      subtitle: 'Through Perfect Gifts'
    },
    {
      image: '/sample-images/kasturi-roy-LgYKTcpYpio-unsplash.jpg',
      title: 'Crafting Memories',
      subtitle: 'One Gift at a Time'
    },
    {
      image: '/sample-images/micheile-henderson-Afjk-6oFzPE-unsplash.jpg',
      title: 'Meaningful Moments',
      subtitle: 'Thoughtful Presentations'
    }
  ];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000); // Change image every 6 seconds
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background Image Slideshow */}
      {slides.map((slide, index) => (
        <motion.div 
          key={slide.image}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: currentImageIndex === index ? 1 : 0,
            zIndex: currentImageIndex === index ? 10 : 0
          }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src={slide.image}
            alt={`Gift presentation image ${index + 1}`}
            fill
            priority={index === 0}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-background/40" />
        </motion.div>
      ))}

      {/* Text Overlay - Positioned to the right */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center z-20">
        <div className="w-full max-w-7xl mx-auto flex justify-end pr-8 md:pr-16 lg:pr-24">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="text-right"
          >
            <h1 className="mb-2 text-5xl font-normal text-white tracking-wide md:text-6xl lg:text-7xl">
              {slides[currentImageIndex].title}
            </h1>
            <h2 className="text-2xl font-light text-white tracking-wide md:text-3xl">
              {slides[currentImageIndex].subtitle}
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Slideshow Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              currentImageIndex === index ? 'bg-white w-8' : 'bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 