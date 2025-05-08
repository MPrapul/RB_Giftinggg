export const categories = [
  'All',
  'Bags',
  'Bean Bag',
  'Books',
  'Electronics',
  'Ergonomics Products',
  'Fitness',
  'Home Decor',
  'Work From Home Accessories',
  'Neon',
  'Self Pampers',
  'Sipper',
  'T-Shirts & Jackets & Hoodies'
];

// Subcategories for all product types
export const subcategories = {
  'Bags': ['Premium Bags', 'Work Bags', 'Gift Bags', 'Sustainable Collection'],
  'Electronics': ['Audio', 'Charging', 'Wearables', 'Computer Accessories'],
  'Books': ['Business', 'Motivational', 'Technical', 'Lifestyle'],
  'Fitness': ['Yoga', 'Sports Equipment', 'Wearables', 'Accessories'],
  'Home Decor': ['Desk Accessories', 'Wall Art', 'Lighting', 'Plants'],
  'Work From Home Accessories': ['Desk Organization', 'Comfort Items', 'Tech Accessories', 'Productivity Tools']
};

export interface Product {
  id: string;
  name: string;
  category: string;
  imageUrl: string;
  description?: string;
  price: number;
  subcategory?: string;
}

// Convert existing bagType to subcategory for consistency
export const products: Product[] = [
  {
    id: 'bag-1',
    name: 'Executive Laptop Bag',
    category: 'Bags',
    subcategory: 'Premium Bags',
    imageUrl: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    description: 'Premium laptop bag with multiple compartments for the busy professional.',
    price: 3499
  },
  {
    id: 'beanbag-1',
    name: 'Ergonomic Bean Bag',
    category: 'Bean Bag',
    imageUrl: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    description: 'Comfortable bean bag for your home office or relaxation area.',
    price: 4999
  },
  {
    id: 'book-1',
    name: 'Leadership Collection',
    category: 'Books',
    subcategory: 'Business',
    imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    description: 'Set of bestselling leadership books to inspire and motivate.',
    price: 2999
  },
  {
    id: 'electronics-1',
    name: 'Wireless Earbuds',
    category: 'Electronics',
    subcategory: 'Audio',
    imageUrl: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    description: 'High-quality wireless earbuds with noise cancellation.',
    price: 5499
  },
  {
    id: 'ergonomics-1',
    name: 'Adjustable Desk Stand',
    category: 'Ergonomics Products',
    imageUrl: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    description: 'Height-adjustable desk stand for better posture during work.',
    price: 2799
  },
  {
    id: 'fitness-1',
    name: 'Fitness Tracker',
    category: 'Fitness',
    subcategory: 'Wearables',
    imageUrl: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    description: 'Smart fitness tracker to monitor physical activity and health metrics.',
    price: 6999
  },
  {
    id: 'decor-1',
    name: 'Minimalist Desk Clock',
    category: 'Home Decor',
    subcategory: 'Desk Accessories',
    imageUrl: 'https://images.unsplash.com/photo-1585586463948-9e40851ed193?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    description: 'Elegant desk clock with a sleek, minimalist design.',
    price: 1999
  },
  {
    id: 'wfh-1',
    name: 'Productivity Bundle',
    category: 'Work From Home Accessories',
    subcategory: 'Productivity Tools',
    imageUrl: 'https://images.unsplash.com/photo-1591710668263-bee1e9db2a26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    description: 'Complete set of accessories to boost productivity while working from home.',
    price: 7499
  },
  {
    id: 'neon-1',
    name: 'Custom Neon Sign',
    category: 'Neon',
    imageUrl: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    description: 'Personalized neon sign with company logo or motivational quote.',
    price: 8999
  },
  {
    id: 'pamper-1',
    name: 'Deluxe Spa Kit',
    category: 'Self Pampers',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    description: 'Premium spa kit for relaxation and self-care.',
    price: 3999
  },
  {
    id: 'sipper-1',
    name: 'Insulated Water Bottle',
    category: 'Sipper',
    imageUrl: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    description: 'Double-walled insulated water bottle to keep drinks hot or cold.',
    price: 1499
  },
  {
    id: 'apparel-1',
    name: 'Custom Branded Hoodie',
    category: 'T-Shirts & Jackets & Hoodies',
    subcategory: 'Hoodies',
    imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    description: 'High-quality hoodie with custom embroidery or print.',
    price: 2499
  },
  // Additional products
  {
    id: 'electronics-2',
    name: 'Wireless Charging Pad',
    category: 'Electronics',
    subcategory: 'Charging',
    imageUrl: 'https://images.unsplash.com/photo-1606318175045-92092d2590ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    description: 'Sleek wireless charging pad compatible with all Qi-enabled devices.',
    price: 2999
  },
  {
    id: 'bag-2',
    name: 'Canvas Tote Bag',
    category: 'Bags',
    subcategory: 'Sustainable Collection',
    imageUrl: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    description: 'Durable canvas tote bag perfect for daily use or as a gift bag.',
    price: 1299
  },
  {
    id: 'decor-2',
    name: 'Succulent Plant Set',
    category: 'Home Decor',
    subcategory: 'Plants',
    imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    description: 'Set of 3 low-maintenance succulents in decorative pots.',
    price: 1899
  },
  {
    id: 'fitness-2',
    name: 'Yoga Mat and Block Set',
    category: 'Fitness',
    subcategory: 'Yoga',
    imageUrl: 'https://images.unsplash.com/photo-1573384529864-9ba780f9df1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    description: 'Premium yoga mat with support blocks for home fitness.',
    price: 3299
  },
  {
    id: 'wfh-2',
    name: 'Ergonomic Keyboard',
    category: 'Work From Home Accessories',
    subcategory: 'Tech Accessories',
    imageUrl: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    description: 'Comfortable ergonomic keyboard to reduce wrist strain during long work hours.',
    price: 4499
  },
  {
    id: 'apparel-2',
    name: 'Embroidered Corporate Polo',
    category: 'T-Shirts & Jackets & Hoodies',
    subcategory: 'T-Shirts',
    imageUrl: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    description: 'High-quality polo shirts with subtle logo embroidery.',
    price: 1899
  },
  // Bag products
  {
    id: 'premium-bag-1',
    name: 'Elegant Leather Tote',
    category: 'Bags',
    subcategory: 'Premium Bags',
    imageUrl: '/sample-images/bags/leather-tote-red.jpg',
    description: 'Sophisticated leather tote bag with premium finish and ample storage space.',
    price: 2499
  },
  {
    id: 'work-bag-1',
    name: 'Canvas Laptop Bag',
    category: 'Bags',
    subcategory: 'Work Bags',
    imageUrl: '/sample-images/bags/canvas-laptop-bag.jpg',
    description: 'Durable canvas laptop bag with padded compartments for your devices.',
    price: 1899
  },
  {
    id: 'eco-bag-1',
    name: 'Eco-Friendly Jute Bag',
    category: 'Bags',
    subcategory: 'Sustainable Collection',
    imageUrl: '/sample-images/bags/mini-satchel.jpg',
    description: 'Environmentally friendly jute bag that combines style with sustainability.',
    price: 899
  },
  {
    id: 'premium-bag-2',
    name: 'Leather Executive Briefcase',
    category: 'Bags',
    subcategory: 'Premium Bags',
    imageUrl: '/sample-images/bags/leather-briefcase.jpg',
    description: 'Professional leather briefcase with multiple compartments and brass hardware.',
    price: 3299
  },
  {
    id: 'gift-bag-1',
    name: 'Festive Gift Bag Set',
    category: 'Bags',
    subcategory: 'Gift Bags',
    imageUrl: '/sample-images/bags/gift-bag-set.jpg',
    description: 'Set of elegant gift bags in various sizes for different gifting occasions.',
    price: 599
  },
  {
    id: 'work-bag-2',
    name: 'Commuter Backpack',
    category: 'Bags',
    subcategory: 'Work Bags',
    imageUrl: '/sample-images/bags/canvas-laptop-bag.jpg',
    description: 'Comfortable backpack designed for daily commuters with laptop protection.',
    price: 1599
  }
]; 