'use client';

import React from 'react';
import Image from 'next/image';

const BadUXAnalogies: React.FC = () => {
     const analogies = [
          {
               icon: "/images/img_clipboard.svg",
               title: "Bad UX is like being dropped in the woods with a map...of the moon, in a language you don't speak.",
               description: "Lucky for you, the team behind UXGenius has spent the last 20+ years guiding teams out of the UX woods-and teaching them how to read the map."
          },
          {
               icon: "/images/img_creditcard.svg",
               title: "Bad UX is like trying to socks on a cat-technically doable...it's not fun and every gets hurt.",
               description: "Our team has coached product managers, entrepreneurs, engineers, and designers through UX disasters with less friction and fewer scratches."
          },
          {
               icon: "/images/img_receipt.svg",
               title: "Bad UX is like being offered a cookie...by someone who keeps changing the ingredients.",
               description: "You wanted chocolate chip, but now there's kale in it, the texture is off, something smells funny, and you're not sure who to trust anymore."
          },
          {
               icon: "/images/img_user.svg",
               title: "Bad UX is like your uncle's jokes-kinda funny, mostly confusing, slight offensive, and always awkward.",
               description: "You smile, you nod, you back away slowly, and promise yourself you won't visit that website again-not matter what the email or social media says. Even if there is a sale."
          }
     ];

     return (
          <section className="bg-[#f3f4f6] py-16">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-extrabold text-center text-[#111928] mb-4">
                         Our team has seen almost everything...
                    </h2>
                    <p className="text-sm text-center text-[#6b7280] mb-8">
                         Start free, run one audit, and spot what's silently killing conversions.
                    </p>
                    <h3 className="text-4xl font-extrabold text-center text-[#111928] mb-4">
                         We know what it's like. Bad UX is like...
                    </h3>
                    <p className="text-xl text-center text-[#6b7280] max-w-2xl mx-auto mb-12">
                         Hey, we've all been there-clicking around like we're trying to solve a riddle wrapped in a mystery inside a dropdown...
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {analogies.map((analogy, index) => (
                              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                                   <div className="bg-[#e1effe] rounded-lg p-3 inline-block mb-6">
                                        <Image 
                                             src={analogy.icon}
                                             alt={`${analogy.title} icon`}
                                             width={24}
                                             height={24}
                                        />
                                   </div>
                                   <h3 className="text-lg font-semibold text-[#111928] mb-6">
                                        {analogy.title}
                                   </h3>
                                   <p className="text-sm text-[#6b7280] mb-6">
                                        {analogy.description}
                                   </p>
                                   <a href="#" className="text-sm font-medium text-[#1c64f2]">
                                        Show all
                                   </a>
                              </div>
                         ))}
                    </div>

                    <div className="mt-16">
                         <p className="text-xl text-center text-[#6b7280] mb-6">
                              Keep up with what we are doing by following us:
                         </p>
                         <div className="flex justify-center space-x-4">
                              <a href="#" aria-label="X Social">
                                   <Image src="/images/img_x_social.svg" alt="X Social" width={36} height={36} />
                              </a>
                              <a href="#" aria-label="YouTube">
                                   <Image src="/images/img_youtube.svg" alt="YouTube" width={36} height={36} />
                              </a>
                              <a href="#" aria-label="Instagram">
                                   <Image src="/images/img_instagram.svg" alt="Instagram" width={36} height={36} />
                              </a>
                              <a href="#" aria-label="LinkedIn">
                                   <Image src="/images/img_vector_blue_gray_800.svg" alt="LinkedIn" width={36} height={36} />
                              </a>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default BadUXAnalogies;