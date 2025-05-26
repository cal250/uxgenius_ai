'use client';

import Image from 'next/image';
import { HiQuestionMarkCircle, HiMap, HiCake, HiFaceSmile, HiPhone, HiShoppingBag } from 'react-icons/hi2';

export default function BadUXAnalogies() {
     const analogies = [
          {
               icon: <HiMap className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-600" />,
               image: '/images/moon.jpg',
               title: "Bad UX is like being dropped in the woods with a map...of the moon, in a language you don't speak.",
               description: "Lucky for you, the team behind UXGenius has spent the last 20+ years guiding teams out of the UX woods-and teaching them how to read the map."
          },
          {
               icon: <HiCake className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-600" />,
               image: '/images/cookie.jpg',
               title: "Bad UX is like being offered a cookie...by someone who keeps changing the ingredients.",
               description: "You wanted chocolate chip, but now there's kale in it, the texture is off, something smells funny, and you're not sure who to trust anymore."
          },
          {
               icon: <HiPhone className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-600" />,
               image: '/images/moon.jpg',
               title: "Bad UX is like trying to make a phone call...but the numbers keep rearranging themselves.",
               description: "Every time you think you've got the right number, it changes. The team at UXGenius helps you create interfaces that stay put and make sense."
          },
          {
               icon: <HiShoppingBag className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-600" />,
               image: '/images/cookie.jpg',
               title: "Bad UX is like shopping in a store...where the aisles move every time you blink.",
               description: "You finally find what you're looking for, but when you turn around, everything's different. We help create digital experiences that stay consistent and intuitive."
          }
     ];

     return (
          <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
               <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
                         Our team has seen almost everything...
                    </h2>
                    <p>Start free, run one audit, and spot what’s silently killing conversions.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                         {analogies.map((analogy, index) => (
                              <div key={index} className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                   <div className="relative h-40 sm:h-48 w-full mb-4 sm:mb-6 rounded-xl overflow-hidden shadow-sm">
                                        <Image
                                             src={analogy.image}
                                             alt={analogy.title}
                                             fill
                                             className="object-cover"
                                             sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                   </div>
                                   <div className="mb-3 sm:mb-4 text-blue-600">{analogy.icon}</div>
                                   <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                                        {analogy.title}
                                   </h3>
                                   <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                        {analogy.description}
                                   </p>
                              </div>
                         ))}
                    </div>
               </div>
          </section>
     );
}