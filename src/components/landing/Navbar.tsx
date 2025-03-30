
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <CheckCircle className="h-6 w-6 text-habit-purple" />
          <span className="text-xl font-bold">HabeoPrax</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm font-medium hover:text-primary">Features</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-primary">Testimonials</a>
          <a href="#faq" className="text-sm font-medium hover:text-primary">FAQ</a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary">Pricing</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">Log in</Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
