// app/contact/page.tsx
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Navbar'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
     <Header />
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get a question? A crazy idea? Or maybe you need a little UK pep talk?<br />
            We're all ears (and some pretty smart AI). Drop us a note – whether it's big, 
            small, or somewhere in between. We are here to help improve your UX!
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Details */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Just name</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <EnvelopeIcon className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">home@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <PhoneIcon className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-medium">Phone number</p>
                  <p className="text-gray-600">(12) 346 0100</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Text message</h2>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Send message
              </button>
            </form>
          </div>
        </div>
     <Footer />
      </div>
    </div>
  )
}