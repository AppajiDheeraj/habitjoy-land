import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const faqs = [{
  question: "How does HabeoPrax differ from other habit trackers?",
  answer: "HabeoPrax stands out with its comprehensive insights, personalized rewards system, and adaptive reminders. Unlike other trackers, we focus on the psychology of habit formation and provide detailed analytics to help you understand your patterns."
}, {
  question: "Is there a limit to how many habits I can track?",
  answer: "The free plan allows tracking up to 5 habits. Premium plans offer unlimited habit tracking along with additional features like advanced analytics and priority support."
}, {
  question: "Can I export my habit data?",
  answer: "Yes! Premium users can export their habit data in various formats (CSV, PDF) for external analysis or record-keeping. This is perfect for those who want to dig deeper into their habits."
}, {
  question: "How are streaks calculated?",
  answer: "Streaks are calculated based on consistent completion of your habits according to their schedule (daily, weekly, etc.). We also have a flexible streak system that allows for occasional misses without breaking your momentum."
}, {
  question: "Does HabeoPrax work offline?",
  answer: "Yes, the mobile apps work offline and will sync your data when you're back online. The web version requires an internet connection."
}, {
  question: "Can I set up team habits for my organization?",
  answer: "Absolutely! Our Teams plan allows organizations to create shared habits, track group progress, and foster accountability among team members."
}];
const FAQSection = () => {
  return <section id="faq" className="py-16 md:py-[71px]">
      <div className="section-container py-0">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently asked <span className="gradient-text">questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about HabeoPrax and building lasting habits.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </div>
    </section>;
};
export default FAQSection;