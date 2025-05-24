// app/components/Solutions.tsx
import { HiMegaphone, HiShoppingCart, HiBeaker, HiRocketLaunch } from 'react-icons/hi2'

const audiences = [
  {
    icon: <HiMegaphone className="text-blue-600 text-3xl mb-2" />,
    title: "Marketing Teams",
    desc: "Find UX gaps that hurt your messaging, CTAs, and user flows—then fix them in minutes.",
  },
  {
    icon: <HiShoppingCart className="text-green-600 text-3xl mb-2" />,
    title: "Ecommerce Teams",
    desc: "We highlight issues that frustrate shoppers—so you can recover carts and boost AOV.",
  },
  {
    icon: <HiBeaker className="text-yellow-500 text-3xl mb-2" />,
    title: "Product Managers",
    desc: "Use audits as a fast QA pass for launches, onboarding flows, and MVPs. Ship smarter.",
  },
  {
    icon: <HiRocketLaunch className="text-purple-500 text-3xl mb-2" />,
    title: "Startup Founders",
    desc: "Cut through the noise and get a clear list of changes to improve engagement from day one.",
  },
]

export default function Solutions() {
  return (
    <section className="bg-gray-50 py-20 px-6 text-center" id="usecases">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Our Solutions Are Built for Real-World Teams
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Whether you’re launching your first product or optimizing a 7-figure store, UXGenius helps your team identify friction, boost conversions, and move faster — with zero design overhead.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
        {audiences.map((a, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <div>{a.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{a.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{a.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <a
          href="#"
          className="text-blue-600 font-medium underline hover:text-blue-800"
        >
          Learn more
        </a>
      </div>
    </section>
  );
}
