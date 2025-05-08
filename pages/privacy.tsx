import Head from 'next/head';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | RB Gifting Solutions</title>
        <meta name="description" content="Privacy Policy for RB Gifting Solutions" />
      </Head>

      <PageHeader 
        title="Privacy Policy" 
      />

      <div className="py-12 md:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-white/70 mb-10 text-center">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <div className="space-y-8 text-white/80">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p className="mb-4">
                  At RB Gifting Solutions, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p>
                  By accessing or using our services, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                <p className="mb-2">We may collect several types of information from and about users of our website, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Personal identifiers (such as name, email address, phone number, and mailing address)</li>
                  <li>Payment information (such as credit card details, billing address)</li>
                  <li>Information about your business or organization</li>
                  <li>Your preferences and feedback regarding our products and services</li>
                  <li>Usage data about how you interact with our website</li>
                  <li>Device and browser information when you access our website</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. How We Collect Information</h2>
                <p className="mb-2">We collect information through:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Direct interactions (when you fill out forms, contact us, or purchase products)</li>
                  <li>Automated technologies (cookies, server logs, and tracking technologies)</li>
                  <li>Third-party sources (business partners, service providers)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. How We Use Your Information</h2>
                <p className="mb-2">We may use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Respond to inquiries and customer service requests</li>
                  <li>Send promotional materials and newsletters</li>
                  <li>Analyze usage patterns to enhance user experience</li>
                  <li>Protect against unauthorized access and fraudulent activities</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Disclosure of Your Information</h2>
                <p className="mb-4">
                  We may disclose personal information that we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Service providers who perform functions on our behalf</li>
                  <li>Professional advisors such as lawyers, auditors, and insurers</li>
                  <li>Government bodies when required by law</li>
                  <li>Business partners with your consent</li>
                </ul>
                <p className="mt-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties for marketing purposes without your explicit consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
                <p>
                  We have implemented appropriate physical, technical, and administrative safeguards to protect the security of your personal information. However, please understand that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
                <p className="mb-4">Depending on your location, you may have certain rights regarding your personal information, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Right to access your personal information</li>
                  <li>Right to correct inaccurate information</li>
                  <li>Right to delete your personal information</li>
                  <li>Right to restrict or object to processing</li>
                  <li>Right to data portability</li>
                  <li>Right to withdraw consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Changes to Our Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. When we make changes, we will post the updated policy on this page and update the "Last Updated" date. We encourage you to review our Privacy Policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
                <p>
                  If you have any questions or concerns about our Privacy Policy or data practices, please contact us at:
                </p>
                <p className="mt-2">
                  <strong>Email:</strong> contact@rbgifting.com<br />
                  <strong>Address:</strong> Banjara Hills, Hyderabad
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
} 