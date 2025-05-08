import Head from 'next/head';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service | RB Gifting Solutions</title>
        <meta name="description" content="Terms of Service for RB Gifting Solutions" />
      </Head>

      <PageHeader 
        title="Terms of Service" 
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
                <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
                <p className="mb-4">
                  These Terms of Service constitute a legally binding agreement between you and RB Gifting Solutions governing your access to and use of our website and services.
                </p>
                <p>
                  By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Services Offered</h2>
                <p className="mb-4">
                  RB Gifting Solutions provides corporate gifting solutions, event management services, branded merchandise, and related products and services as described on our website.
                </p>
                <p>
                  We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Ordering and Payment</h2>
                <p className="mb-2">When placing an order with us:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You agree to provide current, complete, and accurate purchase and account information.</li>
                  <li>You represent that you have the legal right to use any payment method you provide.</li>
                  <li>We reserve the right to refuse or cancel any order for any reason, including errors in pricing or availability.</li>
                  <li>All prices are subject to change without notice.</li>
                  <li>Payment must be received in full before we fulfill your order, unless otherwise agreed in writing.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property Rights</h2>
                <p className="mb-4">
                  The website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by RB Gifting Solutions, its licensors, or other providers of such material.
                </p>
                <p className="mb-4">
                  Our name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of RB Gifting Solutions. You may not use such marks without our prior written permission.
                </p>
                <p>
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any materials from our website without our express written consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Custom Orders and Design Approval</h2>
                <p className="mb-4">
                  For custom orders, you are responsible for reviewing and approving all designs before production. Once you approve a design, you accept responsibility for any errors or omissions.
                </p>
                <p>
                  We will make reasonable efforts to match colors, but exact color matching cannot be guaranteed due to variations in printing, manufacturing, and display technologies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
                <p className="mb-4">
                  To the fullest extent permitted by law, RB Gifting Solutions, its affiliates, and their respective officers, directors, employees, agents, suppliers, and contractors shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of, or inability to use, our services.
                </p>
                <p>
                  Our total liability for all claims related to these Terms shall not exceed the total amount paid by you to us during the six months preceding the event giving rise to the liability.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. User Representations</h2>
                <p className="mb-2">By using our services, you represent and warrant that:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You have the legal capacity to enter into these Terms.</li>
                  <li>You will use our services in accordance with these Terms.</li>
                  <li>Any information you provide is true, accurate, current, and complete.</li>
                  <li>You will maintain the security of your account.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of India. Any dispute arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts located in Hyderabad, India.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. When we make changes, we will post the updated Terms on this page and update the "Last Updated" date. Your continued use of our services following the posting of revised Terms means that you accept and agree to the changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
                <p>
                  If you have any questions about these Terms, please contact us at:
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