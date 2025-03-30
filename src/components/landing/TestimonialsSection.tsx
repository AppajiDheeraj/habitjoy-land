
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Fitness Enthusiast",
    content: "HabeoPrax has completely transformed my morning routine. The streak feature keeps me motivated to maintain my exercise habit. After 60 days, it's now second nature!",
    avatar: "👨",
    stars: 5
  },
  {
    name: "Sophia Chen",
    role: "Productivity Coach",
    content: "I recommend HabeoPrax to all my clients. The insights and analytics help identify patterns and make adjustments to habits that aren't sticking. It's been a game changer.",
    avatar: "👩",
    stars: 5
  },
  {
    name: "Marcus Johnson",
    role: "Software Developer",
    content: "As someone who needs to stay hydrated while coding, the water tracking feature and reminders have helped me develop a consistent habit of drinking water throughout the day.",
    avatar: "👨🏾",
    stars: 4
  },
  {
    name: "Emma Wilson",
    role: "Medical Student",
    content: "The badges and rewards system gives me that extra motivation to stay consistent with my study habits. It's like having a personal cheerleader!",
    avatar: "👩🏼",
    stars: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by habit builders <span className="gradient-text">worldwide</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            See how HabeoPrax is helping people build meaningful habits and transform their lives.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div className="ml-3">
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {Array(testimonial.stars).fill(0).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-habit-yellow text-habit-yellow" />
                  ))}
                </div>
                
                <p className="text-sm">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
