import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="w-full bg-[rgb(3,3,60)] py-16 md:py-20 mb-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{title}</h1>
        {subtitle && (
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
} 