import { HiOutlineClipboardDocument, HiOutlineChartBarSquare, HiOutlineChatBubbleLeftEllipsis } from 'react-icons/hi2';

export default function HowItWorks() {
  const steps = [
    {
      icon: <HiOutlineClipboardDocument className="w-12 h-12 text-blue-600" />,
      title: "Paste Your\nWebsite URL",
      description: "Submit any page-from landing page to product detail- and let us scan it instantly using our AI UX Genius."
    },
    {
      icon: <HiOutlineChartBarSquare className="w-12 h-12 text-blue-600" />,
      title: "Get a UX Score +\nAudit Breakdown",
      description: "We'll analyze design, usability, clarity and more-then deliver a prioritized list of friction points to be addressed."
    },
    {
      icon: <HiOutlineChatBubbleLeftEllipsis className="w-12 h-12 text-blue-600" />,
      title: "Chat with the\nUXGenius Agent",
      description: "Ask questions about your audit, get explanations, and learn how to fix the friction points and issues on your site."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            How it works - Fast, Actionable <br className="hidden md:block" />
            UX Insights in 3 Steps
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            UXGenius makes it easy to uncover what's hurting your user experience-and give you the steps to fix it. 
            No downloads, no learning curve, just results and increased revenue and conversions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white rounded-xl shadow-sm">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 whitespace-pre-line mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}