import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
const CTASection = () => {
  return <section id="pricing" className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-0">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start building <span className="gradient-text">better habits</span> today
          </h2>
          <p className="text-lg mb-8 text-muted-foreground">
            Join thousands of users who have transformed their lives with HabeoPrax.
          </p>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Free Plan */}
            <div className="rounded-2xl border bg-background p-6 shadow-sm">
              <div className="mb-4">
                <h3 className="text-lg font-medium">Free</h3>
                <div className="mt-2 flex items-baseline">
                  <span className="text-3xl font-bold">$0</span>
                  <span className="text-sm text-muted-foreground ml-1">/month</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Perfect for getting started with habit building.</p>
              </div>
              
              <ul className="mb-6 space-y-2 text-sm">
                {["Track up to 5 habits", "Basic streak tracking", "7-day habit history", "Daily reminders", "Basic achievements"].map((feature, i) => <li key={i} className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-habit-green" />
                    <span>{feature}</span>
                  </li>)}
              </ul>
              
              <Button className="w-full" variant="outline">Get Started</Button>
            </div>
            
            {/* Premium Plan */}
            <div className="rounded-2xl border-2 border-primary bg-background p-6 shadow-md relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-medium">Premium</h3>
                <div className="mt-2 flex items-baseline">
                  <span className="text-3xl font-bold">$4.99</span>
                  <span className="text-sm text-muted-foreground ml-1">/month</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Everything you need for serious habit building.</p>
              </div>
              
              <ul className="mb-6 space-y-2 text-sm">
                {["Unlimited habit tracking", "Advanced streak tracking", "Full habit history", "Smart reminders", "All achievements", "Detailed analytics", "Priority support"].map((feature, i) => <li key={i} className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-habit-purple" />
                    <span>{feature}</span>
                  </li>)}
              </ul>
              
              <Button className="w-full">
                Choose Premium
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </div>
            
            {/* Teams Plan */}
            <div className="rounded-2xl border bg-background p-6 shadow-sm">
              <div className="mb-4">
                <h3 className="text-lg font-medium">Teams</h3>
                <div className="mt-2 flex items-baseline">
                  <span className="text-3xl font-bold">$9.99</span>
                  <span className="text-sm text-muted-foreground ml-1">/user/month</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">For organizations building team habits together.</p>
              </div>
              
              <ul className="mb-6 space-y-2 text-sm">
                {["All Premium features", "Team habit tracking", "Group analytics", "Admin dashboard", "Team challenges", "Custom rewards", "API access", "Dedicated support"].map((feature, i) => <li key={i} className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-habit-blue" />
                    <span>{feature}</span>
                  </li>)}
              </ul>
              
              <Button className="w-full" variant="outline">Contact Sales</Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CTASection;