import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Helmet } from 'react-helmet';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Privacy Policy | Smartfony UK</title>
        <meta 
          name="description" 
          content="Read our privacy policy to understand how we handle your data and protect your privacy when using Smartfony's comparison services."
        />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last Updated: 19 January 2024</p>
          
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="mb-6">
              Smartfony.co.uk is a comparison website that uses Stickee.co.uk's widget to help users find mobile and broadband deals. 
              We do not collect, store, or process any personal data.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Role</h2>
            <p className="mb-4">We provide:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Access to Stickee.co.uk's comparison widget</li>
              <li>Information about mobile and broadband deals</li>
              <li>Educational content about phones and broadband</li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Collection</h2>
            <p className="mb-4">Smartfony.co.uk does not:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Collect personal information</li>
              <li>Store user data</li>
              <li>Process payment information</li>
              <li>Track user behavior</li>
            </ul>
            <p className="mb-6">
              All deal comparisons and data processing are handled directly by Stickee.co.uk through their widget.
              For information about how Stickee.co.uk handles data, please refer to their privacy policy.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Terms of Service</h2>
            <p className="text-gray-600 mb-4">Last Updated: 19 January 2024</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Description</h3>
            <p className="mb-4">Smartfony.co.uk:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Provides access to Stickee.co.uk's comparison widget</li>
              <li>Displays mobile and broadband deals</li>
              <li>Offers informational content</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Usage Terms</h3>
            <p className="mb-4">Users understand that:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>All comparisons are powered by Stickee.co.uk</li>
              <li>Deals and prices are provided by Stickee.co.uk</li>
              <li>We don't guarantee pricing or availability</li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookie Policy</h2>
            <p className="text-gray-600 mb-4">Last Updated: 19 January 2024</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookie Usage</h3>
            <p className="mb-4">Our website:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Uses essential cookies for basic functionality</li>
              <li>Includes Stickee.co.uk's widget cookies</li>
              <li>Does not use tracking or marketing cookies</li>
            </ul>
            <p className="mb-6">
              All comparison-related cookies are managed by Stickee.co.uk's widget.
              For detailed information about widget-related cookies, please refer to Stickee.co.uk's cookie policy.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;