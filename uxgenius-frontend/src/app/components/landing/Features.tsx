export default function Features() {
  const features = [
    {
      title: 'Instant UX Score',
      description: 'Get a fast, clear UX grade for your site with no setup required. Just sign up, enter your URL and get a performance breakdown within seconds.'
    },
    {
      title: 'AI-Powered Recommendation',
      description: 'No more vague advice. Our audit shows exactly what to fix - and why - so you can improve your UX and grow revenue FAST!'
    },
    {
      title: 'Track Changes & Results',
      description: 'Each audit is saved in your dashboard so you can compare versions, apply changes, and track how UX upgrades impact performance.'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Fast, Actionable UX Insights in 3 Steps</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">{index + 1}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}