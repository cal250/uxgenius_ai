import Image from 'next/image';

export default function Home() {
     return (
          <div className="container">
               {/* Hero Section */}
               <section className="section">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                         <div className="space-y-8">
                              <h1 className="animate-fade-in">
                                   Transform Your UX Design with AI-Powered Insights
                              </h1>
                              <p className="text-lg text-secondary-600">
                                   Get instant, intelligent recommendations to improve your user experience.
                                   Our AI analyzes your designs and provides actionable insights.
                              </p>
                              <div className="flex gap-4">
                                   <button className="btn btn-primary">
                                        Get Started
                                   </button>
                                   <button className="btn btn-secondary">
                                        Learn More
                                   </button>
                              </div>
                         </div>
                         <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-strong bg-primary-100">
                              <div className="absolute inset-0 flex items-center justify-center text-primary-600 text-2xl font-semibold">
                                   UX Design Dashboard Preview
                              </div>
                         </div>
                    </div>
               </section>

               {/* Features Section */}
               <section className="section">
                    <h2 className="text-center mb-12">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                         {features.map((feature, index) => (
                              <div key={index} className="card hover:shadow-strong transition-shadow">
                                   <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                                        {feature.icon}
                                   </div>
                                   <h3 className="mb-2">{feature.title}</h3>
                                   <p className="text-secondary-600">{feature.description}</p>
                              </div>
                         ))}
                    </div>
               </section>
          </div>
     );
}

const features = [
     {
          title: "AI-Powered Analysis",
          description: "Get instant insights into your UX design with our advanced AI algorithms.",
          icon: "🤖"
     },
     {
          title: "Real-time Feedback",
          description: "Receive immediate feedback and suggestions to improve your designs.",
          icon: "⚡"
     },
     {
          title: "Best Practices",
          description: "Stay up-to-date with the latest UX design best practices and trends.",
          icon: "📚"
     }
]; 