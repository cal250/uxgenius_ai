import Link from 'next/link';

export default function NotFound() {
     return (
          <div className="container min-h-screen flex items-center justify-center">
               <div className="text-center space-y-8">
                    <h1 className="text-6xl font-bold text-primary-600">404</h1>
                    <h2 className="text-2xl font-semibold text-secondary-900">Page Not Found</h2>
                    <p className="text-secondary-600 max-w-md mx-auto">
                         The page you're looking for doesn't exist or has been moved.
                    </p>
                    <Link
                         href="/"
                         className="btn btn-primary inline-block"
                    >
                         Return Home
                    </Link>
               </div>
          </div>
     );
} 