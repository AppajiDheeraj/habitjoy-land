
import React from 'react';
import { CheckCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-secondary/30">
      <div className="section-container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="h-6 w-6 text-habit-purple" />
              <span className="text-xl font-bold">HabeoPrax</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Transform your habits, transform your life.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'instagram', 'github'].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center hover:bg-accent/20 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <span className="text-xs">🔗</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              {['Features', 'Pricing', 'Testimonials', 'FAQ', 'Integrations', 'Updates'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-foreground">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              {['About Us', 'Careers', 'Press', 'Blog', 'Partners', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-muted-foreground hover:text-foreground">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Data Processing', 'GDPR'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-muted-foreground hover:text-foreground">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} HabeoPrax. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
