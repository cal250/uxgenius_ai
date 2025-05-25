'use client';

import { useState, FormEvent } from 'react';

interface PricingNewsletterProps {
     title: string;
     description: string;
     disclaimer: string;
     onSubmit?: (email: string) => void;
}

export default function PricingNewsletter({ title, description, disclaimer, onSubmit }: PricingNewsletterProps) {
     const [email, setEmail] = useState('');
     const [error, setError] = useState('');
     const [isSubmitting, setIsSubmitting] = useState(false);

     const validateEmail = (email: string) => {
          return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
     };

     const handleSubmit = async (e: FormEvent) => {
          e.preventDefault();
          setError('');

          if (!email) {
               setError('Please enter your email address');
               return;
          }

          if (!validateEmail(email)) {
               setError('Please enter a valid email address');
               return;
          }

          setIsSubmitting(true);
          try {
               await onSubmit?.(email);
               setEmail('');
          } catch (err) {
               setError('Something went wrong. Please try again.');
          } finally {
               setIsSubmitting(false);
          }
     };

     return (
          <section className="py-16 px-4 bg-white">
               <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">{title}</h2>
                    <p className="text-gray-600 mb-8">
                         {description}
                    </p>

                    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                         <div>
                              <input
                                   type="email"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   placeholder="Enter your email"
                                   className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${error
                                        ? 'border-red-500 focus:ring-red-500'
                                        : 'border-gray-300 focus:ring-blue-500'
                                        }`}
                                   disabled={isSubmitting}
                              />
                              {error && (
                                   <p className="mt-2 text-sm text-red-500 text-left">{error}</p>
                              )}
                         </div>
                         <button
                              type="submit"
                              disabled={isSubmitting}
                              className={`w-full bg-blue-600 text-white py-3 rounded-lg transition-colors ${isSubmitting
                                   ? 'opacity-75 cursor-not-allowed'
                                   : 'hover:bg-blue-700'
                                   }`}
                         >
                              {isSubmitting ? 'Subscribing...' : 'Join Our Mailing List Now!'}
                         </button>
                    </form>
                    <p className="text-sm text-gray-600 mt-4">{disclaimer}</p>
               </div>
          </section>
     );
} 