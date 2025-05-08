import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, MapPin } from 'lucide-react';

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-background/90 border-t border-white/10 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start">
            <Mail className="h-5 w-5 text-mint mr-3 mt-1" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-white/70">info@rbgiftingsolutions.com</p>
            </div>
          </div>
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-pink mr-3 mt-1" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-white/70">3rd Floor, Tech Park, Whitefield, Bangalore 560066</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
            <Link href="/privacy" className="text-sm text-white/70 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-white/70 hover:text-white">
              Terms of Service
            </Link>
            <Link href="/refunds" className="text-sm text-white/70 hover:text-white">
              Refund Policy
            </Link>
            <Link href="/shipping" className="text-sm text-white/70 hover:text-white">
              Shipping Info
            </Link>
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a 
                  key={item.name}
                  href={item.href}
                  className="text-white/70 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-white/50">
          &copy; {new Date().getFullYear()} RB Gifting Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 