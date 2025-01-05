import { Header } from '../components/Header';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#1a1f2e] text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Who We Are</h1>
          <div className="max-w-3xl mx-auto text-lg leading-relaxed space-y-6">
            <p>Smartfony.co.uk was established in 2020 by our founding team with a clear vision - to make mobile and broadband comparisons simple and transparent for UK consumers. What started as a small project with just two team members has grown into a trusted comparison platform. Despite our growth, we maintain our core values of simplicity, transparency, and personal approach to customer service.</p>
            <p>Led by our expertise in telecommunications, our team focuses on helping customers navigate the complex world of mobile phone contracts and broadband deals. We believe in providing clear, unbiased information that helps you make informed decisions without the technical jargon.</p>
            <p>Our services are completely free to use, with no hidden costs. We display all charges upfront, including any additional fees, so you can be confident in the prices you see.</p>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-primary">Price Comparison</h3>
              <p className="text-gray-600">Our advanced comparison engine helps you find the best mobile and broadband deals in your area. We compare offers from all major UK providers, making it easy to find packages that match your needs and budget.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-primary">Expert Reviews</h3>
              <p className="text-gray-600">We provide detailed, unbiased reviews of mobile phones, contracts, and broadband packages. Our team tests and analyzes each service to give you honest, practical advice about what works best for different needs.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-primary">Helpful Guides</h3>
              <p className="text-gray-600">Our comprehensive guides cover everything from choosing the right mobile contract to understanding broadband speeds. We break down complex terms and make it easy to understand what you're paying for.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Compare With Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Compare With Us?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">£</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Save Smart</h3>
              <p className="text-gray-600">Our users save an average of £163 per year by switching providers through our platform. We constantly update our deals to include the latest offers, including exclusive discounts and special promotions.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">★</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Small Team, Big Trust</h3>
              <p className="text-gray-600">Being a smaller team allows us to maintain personal contact with our users. We provide individual responses to every inquiry, and our service has earned excellent customer ratings.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">🔒</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Simple and Secure</h3>
              <p className="text-gray-600">Our platform is built with security in mind, using advanced encryption to protect your data. We keep things simple - no complicated forms, no unnecessary questions, just straightforward comparisons.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;