import React from 'react';
import SectionLabel from './UI/SectionLabel';

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div className="mb-12">
            <SectionLabel text="Legal" />
            <h1 className="font-display font-bold text-5xl md:text-6xl text-dosocket-900 mb-6">Privacy Policy</h1>
            <p className="text-gray-500">Last Updated: 2026</p>
        </div>

        <div className="prose prose-lg text-gray-600">
            <p>
                At Dosocket, we value your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website or use our services.
            </p>

            <h3 className="text-dosocket-900 font-bold text-2xl mt-8 mb-4">1. Information We Collect</h3>
            <p>
                We may collect personal information such as your name, email address, phone number, and company details when you fill out our contact forms or subscribe to our newsletter. We also collect non-personal data through cookies and analytics tools to improve our website experience.
            </p>

            <h3 className="text-dosocket-900 font-bold text-2xl mt-8 mb-4">2. How We Use Your Information</h3>
            <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our services.</li>
                <li>To communicate with you regarding your project or inquiries.</li>
                <li>To improve our website and marketing efforts.</li>
                <li>To comply with legal obligations.</li>
            </ul>

            <h3 className="text-dosocket-900 font-bold text-2xl mt-8 mb-4">3. Data Security</h3>
            <p>
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>

            <h3 className="text-dosocket-900 font-bold text-2xl mt-8 mb-4">4. Third-Party Services</h3>
            <p>
                We may use third-party services (such as analytics providers or payment processors) that collect, monitor, and analyze this type of information. These third parties have their own privacy policies addressing how they use such information.
            </p>

            <h3 className="text-dosocket-900 font-bold text-2xl mt-8 mb-4">5. Contact Us</h3>
            <p>
                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@Dosocket.com" className="text-dosocket-accent font-bold hover:underline">info@Dosocket.com</a>.
            </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
