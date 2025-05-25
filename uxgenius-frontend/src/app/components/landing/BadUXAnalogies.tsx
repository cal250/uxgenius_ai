'use client';

import Image from 'next/image';
import { HiQuestionMarkCircle, HiMap, HiCake, HiFaceSmile } from 'react-icons/hi2';

export default function BadUXAnalogies() {
     const analogies = [
          {
               icon: <HiMap className="w-12 h-12 text-blue-600" />,
               image: '/images/moon-map.svg',
               title: "Bad UX is like being dropped in the woods with a map...of the moon, in a language you don't speak.",
               description: "Lucky for you, the team behind UXGenius has spent the last 20+ years guiding teams out of the UX woods-and teaching them how to read the map."
          },
          {
               icon: <HiCake className="w-12 h-12 text-blue-600" />,
               image: '/images/cookie.svg',
               title: "Bad UX is like being offered a cookie...by someone who keeps changing the ingredients.",
               description: "You wanted chocolate chip, but now there's kale in it, the texture is off, something smells funny, and you're not sure who to trust anymore."
          },
          // Add other analogies
     ];

     return (
          <section className="py-20 px-4 bg-white">
               <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                         Our team has seen almost everything...
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {analogies.map((analogy, index) => (
                              <div key={index} className="text-center">
                                   <div className="relative h-48 w-full mb-6 rounded-xl overflow-hidden">
                                        <Image
                                             src={analogy.image}
                                             alt={analogy.title}
                                             fill
                                             className="object-cover"
                                             sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                   </div>
                                   <div className="mb-4 text-blue-600">{analogy.icon}</div>
                                   <h3 className="text-lg font-bold text-gray-900 mb-4">
                                        {analogy.title}
                                   </h3>
                                   <p className="text-gray-600">{analogy.description}</p>
                              </div>
                         ))}
                    </div>
               </div>
          </section>
     );
}