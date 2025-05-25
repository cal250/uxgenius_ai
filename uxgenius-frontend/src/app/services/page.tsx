import Footer from '@/components/common/Footer'
import Header from '@/components/common/Navbar'
import {
     DocumentMagnifyingGlassIcon,
     RocketLaunchIcon,
     ChartBarIcon,
     PuzzlePieceIcon,
     BuildingStorefrontIcon,
     MapIcon,
     EnvelopeIcon
   } from '@heroicons/react/24/outline'
   
   export default function ServicesPage() {
     const services = [
       {
         icon: <DocumentMagnifyingGlassIcon className="w-8 h-8 text-blue-600" />,
         title: "Micro-UX Audit",
         details: "Delivered in 3–4 business days includes 1 round of breaths or 30 minute working with UX report",
         items: [
           "Businesses: Committed areas by technology and filling client UI solutions",
           "Residents: Brand/types on high-mobile pages",
           "Group visits or professionalization processes are available"
         ]
       },
       {
         icon: <RocketLaunchIcon className="w-8 h-8 text-blue-600" />,
         title: "CTA Effectiveness Testing",
         details: "Delivered in 3–4 business days includes 1 round of breaths or 50 minute working with UX report",
         items: [
           "Revenue/factors/website becomes clearer",
           "Employee embedding and employee view",
           "Align income or interest purchase fees"
         ]
       },
       {
         icon: <ChartBarIcon className="w-8 h-8 text-blue-600" />,
         title: "Clarity Score Deep Dive",
         details: "Delivered in 3–4 business days includes 1 round of breaths or 60 minute working with UX report",
         items: [
           "This engagement by installing together local",
           "Employee compensation, employee confidence",
           "Followed into clarity and modern insights"
         ]
       },
       {
         icon: <PuzzlePieceIcon className="w-8 h-8 text-blue-600" />,
         title: "Personal Builder Session",
         details: "Delivered in 3–4 business days includes 1 round of breaths or 100 minutes working with UX report",
         items: [
           "Increased alignment between sales and product decisions",
           "Sales increases via dividends for customers",
           "Market marketing means network and personalized"
         ],
         price: "$1,249"
       },
       {
         icon: <BuildingStorefrontIcon className="w-8 h-8 text-blue-600" />,
         title: "Remaking & UX Positioning",
         details: "Delivered in 3–4 business days includes 1 round of breaths or 50 minute working with UX report",
         items: [
           "Builds that are/howels have ambitions",
           "Align your meeting again",
           "Continue with long-days and dialog workshops"
         ]
       },
       {
         icon: <MapIcon className="w-8 h-8 text-blue-600" />,
         title: "User Journey Mapping Workshop",
         details: "Delivered in 3–4 business days includes 1 round of breaths or 100 minutes working with UX report",
         items: [
           "Reveals hidden/explicit locations drawn",
           "Improve knowledge and collaboration",
           "Align streams of information from products now"
         ]
       }
     ]
   
     return (
       <div className="min-h-screen bg-white">
          <Header />
         {/* Hero Section */}
         <section className="py-16 px-4 bg-blue-50">
           <div className="max-w-6xl mx-auto text-center">
             <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
               Need a Little More UX Muscle?<br />
               We’ve Got You!
             </h1>
             <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
               Not everyone speaks of. Mr-Hovan asking “agency” or a 2024-risks UX report to get thanks, 
               but sometimes, you just need a secousse eye. A clear plan. A little extra maybe in the right direction.
             </p>
             
             <div className="grid md:grid-cols-3 gap-6 mt-12">
               {['Clear Wins', 'Focused Insights', 'Real Momentum'].map((item) => (
                 <div key={item} className="p-6 bg-white rounded-lg shadow-sm">
                   <h3 className="text-xl font-semibold text-blue-600">{item}</h3>
                 </div>
               ))}
             </div>
           </div>
         </section>
   
         {/* Services Grid */}
         <section className="py-16 px-4">
           <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {services.map((service, index) => (
               <div key={index} className="p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all">
                 <div className="mb-4">
                   {service.icon}
                   <h2 className="text-2xl font-bold mt-4 mb-2">{service.title}</h2>
                   <p className="text-gray-600 text-sm mb-4">{service.details}</p>
                   {service.price && (
                     <div className="bg-blue-50 p-4 rounded-lg mb-4">
                       <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                     </div>
                   )}
                 </div>
                 <ul className="space-y-3">
                   {service.items.map((item, itemIndex) => (
                     <li key={itemIndex} className="flex items-start gap-2 text-gray-600">
                       <span className="text-blue-600">•</span>
                       {item}
                     </li>
                   ))}
                 </ul>
               </div>
             ))}
           </div>
         </section>
   
         {/* Newsletter Section */}
         <section className="py-16 px-4 bg-gray-50">
           <div className="max-w-2xl mx-auto text-center">
             <h2 className="text-3xl font-bold mb-6">UX Is Evolving. So Should You</h2>
             <p className="text-gray-600 mb-8">
               Stay ahead of the dream with updates. It’s an amazing time to learn with 201 years of UX leadership—and a front-line start to AI.
             </p>
             
             <div className="max-w-md mx-auto">
               <div className="relative">
                 <EnvelopeIcon className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                 <input 
                   type="email" 
                   placeholder="Enter your email"
                   className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300"
                 />
               </div>
               <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                 Subscribe
               </button>
             </div>
           </div>
         </section>
         <Footer/>
       </div>
     )
   }