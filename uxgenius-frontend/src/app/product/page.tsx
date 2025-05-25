// app/product/page.tsx
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Navbar'
import {
     ChartBarIcon,
     BoltIcon,
     ClockIcon,
     CheckBadgeIcon,
     BookOpenIcon,
     UserGroupIcon,
     BriefcaseIcon
} from '@heroicons/react/24/outline'

export default function ProductPage() {
     return (
          
          <div className="min-h-screen bg-white">
               <Header />
               {/* Hero Section */}
               <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
                    <div className="max-w-6xl mx-auto text-center">
                         <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                              See Your UX Through New Eyes
                              <span className="text-blue-600 block mt-2">and Watch Your Growth Follow</span>
                         </h1>
                         <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                              Your 4% (in) just pixels and slides in a conversation with your users. Widensize more true energy,
                              where the conversion trends cover-and how to fix it fast, with clarity, simplicity, and flow.
                         </p>
                    </div>
               </section>

               {/* Core Features Grid */}
               <section className="py-16 px-4">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                         <div className="p-6 bg-white rounded-xl border border-gray-200">
                              <ChartBarIcon className="w-12 h-12 text-blue-600 mb-4" />
                              <h2 className="text-2xl font-bold mb-4">Conversions</h2>
                              <p className="text-gray-600">
                                   SITs of the development language are focused on the focus of our business and we have
                                   clearly understood our own skills.
                              </p>
                         </div>

                         <div className="p-6 bg-white rounded-xl border border-gray-200">
                              <BoltIcon className="w-12 h-12 text-blue-600 mb-4" />
                              <h2 className="text-2xl font-bold mb-4">Optimization</h2>
                              <p className="text-gray-600">
                                   Productivity optimised in use 1–30. Recycling consumers and users in the delivery of
                                   these products is a key component of our business.
                              </p>
                         </div>

                         <div className="p-6 bg-white rounded-xl border border-gray-200">
                              <ClockIcon className="w-12 h-12 text-blue-600 mb-4" />
                              <h2 className="text-2xl font-bold mb-4">Speed</h2>
                              <p className="text-gray-600">
                                   Widensize both speed high–repeat loss for customers and customers in the environment's
                                   production, and then advance product requirements only.
                              </p>
                         </div>
                    </div>
               </section>

               {/* Evaluation Section */}
               <section className="py-16 px-4 bg-gray-50">
                    <div className="max-w-6xl mx-auto">
                         <div className="grid md:grid-cols-2 gap-12">
                              <div>
                                   <h2 className="text-3xl font-bold mb-6">Full Heuristic Evaluation</h2>
                                   <p className="text-gray-600 mb-8">
                                        Our AI-powered dual frame year also against other related UI graphics and real practices.
                                        This focus is on trying the GKPty, constructing and feedback at a high gain where next users
                                        will continue, because of just getting.
                                   </p>
                                   <ul className="space-y-4">
                                        {[
                                             'Increase hidden/unfolding paths before they receive customer information',
                                             'Feedback has been recently obtained with applications',
                                             'Self-conscious, even shadowed by many us as the engagement'
                                        ].map((item, index) => (
                                             <li key={index} className="flex items-start gap-2">
                                                  <CheckBadgeIcon className="w-5 h-5 text-blue-600 mt-1" />
                                                  <span className="text-gray-600">{item}</span>
                                             </li>
                                        ))}
                                   </ul>
                              </div>
                              <div className="bg-gray-200 rounded-xl h-96 w-full"></div>
                         </div>
                    </div>
               </section>

               {/* Strategy & Impact Section */}
               <section className="py-16 px-4 bg-white">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                         <div>
                              <BookOpenIcon className="w-12 h-12 text-blue-600 mb-4" />
                              <h2 className="text-3xl font-bold mb-6">Strategy Brief</h2>
                              <p className="text-gray-600 mb-8">
                                   As one of our work, we deliver a clear strategy: self-promising customers or brain for
                                   movements. So you put a list of problems; it's your game plan for building a winning user experience.
                              </p>
                              <ul className="space-y-4">
                                   {[
                                        'Increasingly adaptable, and minimalist',
                                        'High profile design and open access needs always be able',
                                        'Low profile design and flexible working style enables actions',
                                        'Collaboration goals oriented movement'
                                   ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                             <CheckBadgeIcon className="w-5 h-5 text-blue-600 mt-1" />
                                             <span className="text-gray-600">{item}</span>
                                        </li>
                                   ))}
                              </ul>
                         </div>

                         <div>
                              <UserGroupIcon className="w-12 h-12 text-blue-600 mb-4" />
                              <h2 className="text-3xl font-bold mb-6">Roll Impact</h2>
                              <p className="text-gray-600 mb-8">
                                   Every player from Widensize has directly in potential business outcomes so you always
                                   know the way I can or every recommendation. No vague feedback just over growth-driven US improvements!
                              </p>
                              <ul className="space-y-4">
                                   {[
                                        'Contract Without liberty to keep greater sense opportunities',
                                        'Recognise better sign 2023 improvements',
                                        'Add a strong time exchange of non-impaired design issues',
                                        'Ensure commitment to shareholders and society'
                                   ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                             <CheckBadgeIcon className="w-5 h-5 text-blue-600 mt-1" />
                                             <span className="text-gray-600">{item}</span>
                                        </li>
                                   ))}
                              </ul>
                         </div>
                    </div>
               </section>

               {/* AI Coach Section */}
               <section className="py-16 px-4 bg-gray-50">
                    <div className="max-w-6xl mx-auto">
                         <div className="text-center mb-12">
                              <h2 className="text-3xl font-bold mb-4">Personalized AI UX Coach</h2>
                              <p className="text-gray-600 max-w-2xl mx-auto">
                                   Why your AI UX coach offers instant feedback, pain+tightly responsive, and quick win
                                   suggestions to contribute whenever you need a chance of a cross.
                              </p>
                         </div>
                         <div className="grid md:grid-cols-3 gap-8">
                              {[
                                   'Set expert to address AI/American national security events',
                                   'Instantly understand my needs to focus more',
                                   'Prepare new ideas to make sense of decisions every point'
                              ].map((item, index) => (
                                   <div key={index} className="p-6 bg-white rounded-xl border border-gray-200">
                                        <BriefcaseIcon className="w-12 h-12 text-blue-600 mb-4" />
                                        <h3 className="text-xl font-semibold mb-2">{item.split(' ').slice(0, 3).join(' ')}</h3>
                                        <p className="text-gray-600">{item}</p>
                                   </div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* CTA Section */}
               <section className="py-16 px-4 bg-white">
                    <div className="max-w-6xl mx-auto text-center">
                         <h2 className="text-3xl font-bold mb-6">Start your free trial today</h2>
                         <p className="text-lg text-gray-600 mb-8">
                              Try Widensize for 7 days. Start getting results today!
                         </p>
                         <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                              Start Free Trial
                         </button>
                    </div>
               </section>
               <Footer />
          </div>
     )
}