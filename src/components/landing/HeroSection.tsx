import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, BarChart2, CheckCircle, Star, Users, Settings, Sparkles } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-24 pb-16">
      {/* Background with animated elements */}
      <div className="absolute inset-0 z-0 bg-secondary/50">
        <div className="absolute inset-0 bg-gradient-radial from-habit-light-purple/10 to-transparent"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-habit-purple/5 animate-float" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute top-1/2 -left-12 w-32 h-32 rounded-full bg-habit-blue/5 animate-float" style={{ animationDelay: "1.2s" }}></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <Badge className="w-fit gap-1 px-3 py-1.5 text-sm font-medium animate-fade-in">
              <Sparkles className="h-3.5 w-3.5 text-habit-purple" />
              <span>Turn good intentions into habits</span>
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Build habits that <span className="gradient-text">last forever</span>
            </h1>
            
            <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
              HabeoPrax makes building positive habits a delightful experience with 
              smart tracking, insightful stats, and rewarding achievements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button size="lg" className="group bg-gradient-to-r from-habit-purple to-habit-blue hover:opacity-90">
                Get started for free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-habit-light-purple/50">
                See how it works
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[
                    { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330", fallback: "AW" },
                    { src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36", fallback: "JD" },
                    { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d", fallback: "TD" },
                    { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb", fallback: "SR" }
                  ].map((profile, i) => (
                    <Avatar key={i} className="h-8 w-8 border-2 border-background shadow-sm">
                      <AvatarImage src={profile.src} alt="User" />
                      <AvatarFallback className="bg-secondary text-xs">{profile.fallback}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">2,000+</span> habit builders
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-habit-yellow text-habit-yellow" />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">4.9</span> rating
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              {[
                { icon: <CheckCircle className="h-4 w-4 text-habit-green" />, text: "No credit card required" },
                { icon: <Users className="h-4 w-4 text-habit-blue" />, text: "Team collaboration" },
                { icon: <Settings className="h-4 w-4 text-habit-purple" />, text: "Customizable goals" },
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  {feature.icon}
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative mt-8 lg:mt-0 flex items-center justify-center">
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-habit-blue/5 animate-float" style={{ animationDelay: "0.8s" }}></div>
            
            <div className="relative w-full max-w-md animate-float">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl border-2 border-habit-light-purple bg-background shadow-xl">
                <div className="bg-secondary/30 p-4 border-b">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-habit-purple" />
                      <span className="ml-1 font-semibold">My Habits</span>
                    </div>
                    <Badge variant="secondary" className="ml-auto bg-habit-light-purple/30 text-habit-purple">Today</Badge>
                  </div>
                </div>
                
                <div className="p-4 space-y-4">
                  {[
                    { name: 'Morning Meditation', icon: '🧘‍♂️', color: 'bg-habit-light-purple', streak: 15 },
                    { name: 'Daily Exercise', icon: '🏃‍♂️', color: 'bg-blue-100', streak: 8 },
                    { name: 'Read 20 Pages', icon: '📚', color: 'bg-green-100', streak: 21 },
                    { name: 'Drink Water', icon: '💧', color: 'bg-yellow-100', streak: 30 },
                  ].map((habit, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-xl border p-3 animate-fade-in hover:shadow-sm transition-all" style={{animationDelay: `${(i * 0.1) + 0.3}s`}}>
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${habit.color}`}>
                        <span className="text-lg">{habit.icon}</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{habit.name}</div>
                        <div className="text-xs text-muted-foreground">
                          🔥 {habit.streak} day streak
                        </div>
                      </div>
                      <div className="h-8 w-8 rounded-lg border-2 border-habit-green flex items-center justify-center bg-green-50">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="absolute -right-12 -top-12 h-24 w-24 rounded-2xl border bg-background p-2 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <div className="h-full w-full rounded-xl bg-habit-purple/10 flex flex-col items-center justify-center">
                  <Award className="h-8 w-8 text-habit-purple" />
                  <span className="text-xs font-medium mt-1">Achiever</span>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 h-28 w-40 rounded-2xl border bg-background p-2 shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="h-full w-full rounded-xl bg-blue-50 p-2 flex flex-col justify-center">
                  <div className="text-xs font-medium mb-1">Weekly Progress</div>
                  <BarChart2 className="h-5 w-5 text-habit-blue mb-1" />
                  <div className="flex justify-between h-8">
                    {[20, 45, 30, 80, 65, 45, 90].map((h, i) => (
                      <div key={i} className="w-2 bg-habit-blue/20 rounded-sm flex items-end">
                        <div className="w-full bg-habit-blue rounded-sm" style={{height: `${h}%`}}></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-6 top-1/3 transform translate-x-1/2 -translate-y-1/2 h-auto w-32 rounded-xl border bg-background p-2 shadow-md animate-float" style={{ animationDelay: '1.8s' }}>
                <div className="h-full w-full rounded-lg bg-green-50 p-2">
                  <div className="flex items-center">
                    <span className="text-lg">🎉</span>
                    <span className="ml-1 text-xs font-medium">Congrats!</span>
                  </div>
                  <p className="text-[10px] mt-1">You've completed your daily meditation goal!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
