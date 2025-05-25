
export default function FreeTrial() {
     return (
       <section className="py-20 px-4 bg-blue-600 text-white">
         <div className="max-w-7xl mx-auto text-center">
           <h2 className="text-3xl font-bold mb-6">Give it a try. It’s Free!!!</h2>
           <p className="mb-8 text-lg">Start with one audit on the house—see your UX score, get your top 3 fixes, and feel the genius kick in!</p>
           
           <div className="max-w-md mx-auto">
             <input
               type="email"
               placeholder="Enter your email"
               className="w-full px-6 py-3 rounded-lg mb-4 text-gray-900"
             />
             <button className="w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-gray-100">
               Try for 7 days
             </button>
           </div>
           
           <p className="text-sm mt-4 opacity-75">Instant signup. No credit card required.</p>
         </div>
       </section>
     );
   }