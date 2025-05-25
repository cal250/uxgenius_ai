import Header from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import NewsletterSubscription from "@/components/common/NewsletterSubscription";
export default function CaseStudyPage() {
     return (
       <div className="min-h-screen bg-white">
          <Header />
         {/* Hero Section */}
         <section className="py-16 px-4">
           <div className="max-w-6xl mx-auto text-center">
             <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
               Powering innovation at 200,000+ companies worldwide
             </h1>
             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
               There was no reason the enterprise engaged in new, collaborative platforms. Unit failure occurs. 
               As our target, we have a strong corporate development focus. A small number of companies launched 
               have since continued. Information to closely respond to requests, incidents, and changes.
             </p>
           </div>
         </section>
   
         {/* Statistics Grid */}
         <section className="py-16 px-4 bg-gray-50">
           <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
             <div className="p-6 bg-white rounded-xl">
               <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
               <h3 className="text-xl font-semibold mb-2">Reduction</h3>
               <p className="text-gray-600">In developing technology types *</p>
             </div>
             
             <div className="p-6 bg-white rounded-xl">
               <div className="text-4xl font-bold text-blue-600 mb-2">469%</div>
               <h3 className="text-xl font-semibold mb-2">Reduction in recruitment</h3>
               <p className="text-gray-600">We’ll “come”!</p>
             </div>
             
             <div className="p-6 bg-white rounded-xl">
               <div className="text-4xl font-bold text-blue-600 mb-2">60+</div>
               <h3 className="text-xl font-semibold mb-2">Allow us access</h3>
               <p className="text-gray-600">For employees per day *</p>
             </div>
           </div>
           <p className="text-center text-sm text-gray-600 mt-8">
             *Trading lead on a competitive perspective. USB measures and global governance
           </p>
         </section>
   
         {/* Content Sections */}
         <section className="py-16 px-4">
           <div className="max-w-6xl mx-auto space-y-16">
             <div className="text-center">
               <h2 className="text-2xl font-bold mb-6">
                 Let’s find more that brings us together.
               </h2>
               <p className="text-gray-600">
                 Receiving long run, connect with home, family and communities of people who bring your interests. 
                 Connecting with your friends and family can visit all incoming customers along with leaving this Group.
               </p>
             </div>
   
             <div className="text-center">
               <h2 className="text-2xl font-bold mb-6">
                 Let’s find more that brings us together.
               </h2>
               <p className="text-gray-600">
                 Unlocked by an economic with threats, family and communities of people using their own processes, 
                 connecting with your friends and family can visit all incoming customers along with leaving this Group.
               </p>
             </div>
   
             <div className="grid md:grid-cols-2 gap-12">
               <div className="space-y-4">
                 <h3 className="text-xl font-bold">Lost the right balance for growth</h3>
                 <p className="text-gray-600">
                   Established local cost savings will result in an annual loss against the insurance coverage 
                   to 30.0 million from assets to cash, with the balance time being.
                 </p>
               </div>
               
               <div className="space-y-4">
                 <h3 className="text-xl font-bold">Another platform and partner</h3>
                 <p className="text-gray-600">
                   This project has been funded in line with previous launch of it, will be an important part 
                   of the 3.1 innovative initiatives undertaken on combined with our platform and service.
                 </p>
               </div>
             </div>
   
             <div className="text-center border-t border-gray-200 pt-12">
               <h2 className="text-2xl font-bold mb-6">Learn what assets include others</h2>
             </div>
           </div>
         </section>
        <NewsletterSubscription />

         <Footer />
       </div>
     )
   }