export default function Loading() {
     return (
          <div className="container min-h-screen flex items-center justify-center">
               <div className="text-center space-y-8">
                    <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
                    <h2 className="text-2xl font-semibold text-secondary-900">Loading...</h2>
                    <p className="text-secondary-600">
                         Please wait while we prepare your experience
                    </p>
               </div>
          </div>
     );
} 