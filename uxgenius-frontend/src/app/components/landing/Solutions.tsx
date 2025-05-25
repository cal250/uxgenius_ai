import { 
  HiMegaphone, 
  HiShoppingCart, 
  HiClipboardDocumentCheck, 
  HiRocketLaunch 
} from 'react-icons/hi2';

export default function Solutions() {
  const teams = [
    {
      icon: <HiMegaphone className="w-8 h-8 text-blue-600" />,
      title: "Marketing Teams",
      description: "Find UX gaps that hurt your messaging, CTAs, and user flows—then fix them in minutes."
    },
    {
      icon: <HiShoppingCart className="w-8 h-8 text-blue-600" />,
      title: "Ecommerce Teams",
      description: "We highlight issues that frustrate shoppers—so you can recover abandoned carts and boost AOV."
    },
    {
      icon: <HiClipboardDocumentCheck className="w-8 h-8 text-blue-600" />,
      title: "Product Managers",
      description: "Use audits as a fast QA pass for launches, onboarding flows, and MVPs. Ship faster and smarter."
    },
    {
      icon: <HiRocketLaunch className="w-8 h-8 text-blue-600" />,
      title: "Startup Founders",
      description: "Cut through the noise and get a clear list of changes that will improve engagement and revenue from day one."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Solutions Are Built<br className="hidden md:block" /> 
          for Real-World Teams
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teams.map((team, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-6 text-blue-600">
                {team.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {team.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {team.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="text-blue-600 font-semibold hover:text-blue-700">
            Learn more →
          </button>
        </div>
      </div>
    </section>
  );
}