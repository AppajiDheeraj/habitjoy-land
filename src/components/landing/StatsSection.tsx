import React from 'react';
import { LineChart, BarChart3, PieChart, TrendingUp } from 'lucide-react';
const StatsSection = () => {
  return <section className="bg-accent/10 py-16 md:py-[5px]">
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Make data-driven decisions with <span className="gradient-text">comprehensive insights</span>
            </h2>
            
            <p className="text-muted-foreground text-lg">
              Visualize your progress, identify trends, and gain a deeper understanding of how your habits evolve over time.
            </p>
            
            <ul className="space-y-4 mt-4">
              {[{
              icon: <LineChart className="h-5 w-5 text-habit-purple" />,
              text: "Track progress with beautiful interactive charts"
            }, {
              icon: <BarChart3 className="h-5 w-5 text-habit-blue" />,
              text: "Compare habits and identify correlations"
            }, {
              icon: <PieChart className="h-5 w-5 text-habit-green" />,
              text: "See time allocation across different habit categories"
            }, {
              icon: <TrendingUp className="h-5 w-5 text-habit-red" />,
              text: "Analyze streak data to boost consistency"
            }].map((item, i) => <li key={i} className="flex items-start animate-slide-in" style={{
              animationDelay: `${i * 0.1}s`
            }}>
                  <div className="mr-3 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    {item.icon}
                  </div>
                  <span>{item.text}</span>
                </li>)}
            </ul>
          </div>
          
          <div className="relative flex items-center justify-center">
            <div className="w-full max-w-md rounded-2xl border-2 border-accent/20 bg-background p-4 shadow-xl animate-fade-in">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-semibold">Monthly Progress</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Last 30 days</span>
                </div>
              </div>
              
              {/* Chart representation */}
              <div className="h-64 w-full rounded-lg bg-accent/5 p-4">
                <div className="flex h-full w-full flex-col">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Morning Meditation</span>
                    <span>92% completed</span>
                  </div>
                  <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-accent/10">
                    <div className="h-full bg-habit-purple rounded-full" style={{
                    width: "92%"
                  }}></div>
                  </div>
                  
                  <div className="flex justify-between text-xs text-muted-foreground mt-4">
                    <span>Daily Exercise</span>
                    <span>78% completed</span>
                  </div>
                  <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-accent/10">
                    <div className="h-full bg-habit-blue rounded-full" style={{
                    width: "78%"
                  }}></div>
                  </div>
                  
                  <div className="flex justify-between text-xs text-muted-foreground mt-4">
                    <span>Reading</span>
                    <span>85% completed</span>
                  </div>
                  <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-accent/10">
                    <div className="h-full bg-habit-green rounded-full" style={{
                    width: "85%"
                  }}></div>
                  </div>
                  
                  <div className="mt-8 flex-1">
                    <div className="flex h-full items-end justify-between">
                      {[25, 40, 30, 50, 60, 45, 70, 65, 80, 75, 90, 85].map((height, index) => <div key={index} className="w-1/12 group flex flex-col items-center">
                          <div className="h-full w-3 rounded bg-accent/10 relative">
                            <div className="absolute bottom-0 w-full rounded bg-habit-purple transition-all group-hover:bg-primary" style={{
                          height: `${height}%`
                        }}></div>
                          </div>
                        </div>)}
                    </div>
                    <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                      <span>Jan</span>
                      <span>Feb</span>
                      <span>Mar</span>
                      <span>Apr</span>
                      <span>May</span>
                      <span>Jun</span>
                      <span>Jul</span>
                      <span>Aug</span>
                      <span>Sep</span>
                      <span>Oct</span>
                      <span>Nov</span>
                      <span>Dec</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="rounded-lg bg-accent/5 p-3">
                  <div className="text-xs text-muted-foreground">Longest Streak</div>
                  <div className="text-2xl font-bold">42 days</div>
                </div>
                <div className="rounded-lg bg-accent/5 p-3">
                  <div className="text-xs text-muted-foreground">Completion Rate</div>
                  <div className="text-2xl font-bold">85%</div>
                </div>
                <div className="rounded-lg bg-accent/5 p-3">
                  <div className="text-xs text-muted-foreground">Total Habits</div>
                  <div className="text-2xl font-bold">12</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default StatsSection;