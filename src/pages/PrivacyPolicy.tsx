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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last Updated: 19 January 2024</p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            Smartfony.co.uk is a comparison website that uses Stickee.co.uk's widget to help users find mobile and broadband deals. 
            We do not collect, store, or process any personal data.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Role</h2>
          <p className="text-gray-700 mb-4">We provide:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Access to Stickee.co.uk's comparison widget</li>
            <li>Information about mobile and broadband deals</li>
            <li>Educational content about phones and broadband</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Collection</h2>
          <p className="text-gray-700 mb-4">Smartfony.co.uk does not:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Collect personal information</li>
            <li>Store user data</li>
            <li>Process payment information</li>
            <li>Track user behavior</li>
          </ul>
          <p className="text-gray-700">
            All deal comparisons and data processing are handled directly by Stickee.co.uk through their widget.
            For information about how Stickee.co.uk handles data, please refer to their privacy policy.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">Your information helps us:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Show relevant deals in your area</li>
            <li>Improve our comparison service</li>
            <li>Communicate about offers</li>
            <li>Maintain site security</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Sharing</h2>
          <p className="text-gray-700 mb-4">We share data with:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Mobile and broadband providers when you select deals</li>
            <li>Analytics partners</li>
            <li>Service providers helping run our site</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
          <p className="text-gray-700 mb-4">You can:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Access your data</li>
            <li>Request deletion</li>
            <li>Opt out of marketing</li>
            <li>Manage cookie preferences</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
          <p className="text-gray-700">
            For privacy-related inquiries, please contact us at:{" "}
            <a href="mailto:privacy@smartfony.co.uk" className="text-blue-600 hover:underline">
              privacy@smartfony.co.uk
            </a>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;