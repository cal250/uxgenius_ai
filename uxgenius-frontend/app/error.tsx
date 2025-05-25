'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
     error,
     reset,
}: {
     error: Error & { digest?: string };
     reset: () => void;
}) {
     useEffect(() => {
          console.error(error);
     }, [error]);

     return (
          <div className="container min-h-screen flex items-center justify-center">
               <div className="text-center space-y-8">
                    <h1 className="text-6xl font-bold text-primary-600">Oops!</h1>
                    <h2 className="text-2xl font-semibold text-secondary-900">Something went wrong</h2>
                    <p className="text-secondary-600 max-w-md mx-auto">
                         We apologize for the inconvenience. Please try again or return to the home page.
                    </p>
                    <div className="flex gap-4 justify-center">
                         <button
                              onClick={reset}
                              className="btn btn-primary"
                         >
                              Try Again
                         </button>
                         <Link
                              href="/"
                              className="btn btn-secondary"
                         >
                              Return Home
                         </Link>
                    </div>
               </div>
          </div>
     );
} 