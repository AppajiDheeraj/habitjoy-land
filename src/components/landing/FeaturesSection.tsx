import React from 'react';
import { Award, BarChart3, Bell, Calendar, CheckCircle, LineChart, Trophy } from 'lucide-react';
const features = [{
  icon: <CheckCircle className="h-8 w-8 text-habit-purple" />,
  title: "Habit Tracking",
  description: "Track daily, weekly, or monthly habits with just a tap. Mark them complete and watch your progress grow."
}, {
  icon: <BarChart3 className="h-8 w-8 text-habit-blue" />,
  title: "Detailed Analytics",
  description: "Visualize your progress with beautiful charts and gain insights into your habit-forming patterns."
}, {
  icon: <Trophy className="h-8 w-8 text-habit-yellow" />,
  title: "Rewards & Badges",
  description: "Earn badges and rewards as you build streaks and achieve consistency with your habits."
}, {
  icon: <Bell className="h-8 w-8 text-habit-red" />,
  title: "Smart Reminders",
  description: "Get timely notifications that adapt to your schedule, helping you stay consistent."
}, {
  icon: <LineChart className="h-8 w-8 text-habit-green" />,
  title: "Progress Tracking",
  description: "See your daily, weekly, and monthly trends to understand your habit-forming journey."
}, {
  icon: <Calendar className="h-8 w-8 text-habit-gray" />,
  title: "Customizable Goals",
  description: "Set personalized goals based on frequency, duration, and other parameters that matter to you."
}];
const FeaturesSection = () => {
  return <section id="features" className="bg-secondary/50 py-16 md:py-0">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to build <span className="gradient-text">lasting habits</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            HabeoPrax comes packed with powerful features designed to make habit building a delightful experience.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => <div key={index} className="group relative rounded-2xl border bg-background p-6 shadow-sm transition-all hover:shadow-md animate-fade-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default FeaturesSection;