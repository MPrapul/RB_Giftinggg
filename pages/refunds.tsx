import Head from 'next/head';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';

export default function RefundPolicy() {
  return (
    <>
      <Head>
        <title>Refund Policy | RB Gifting Solutions</title>
        <meta name="description" content="Refund Policy for RB Gifting Solutions" />
      </Head>

      <PageHeader 
        title="Refund Policy" 
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
                <h2 className="text-2xl font-semibold mb-4">1. Our Commitment</h2>
                <p className="mb-4">
                  At RB Gifting Solutions, we are committed to ensuring your complete satisfaction with our products and services. We have outlined our refund policy to provide clarity on the conditions and procedures for refunds.
                </p>
                <p>
                  This policy applies to all products and services purchased directly from RB Gifting Solutions through our website or in direct communication with our team.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Standard Products</h2>
                <h3 className="text-xl font-medium mb-2">2.1 Cancellation Before Shipment</h3>
                <p className="mb-4">
                  Orders for standard (non-customized) products may be cancelled for a full refund if the cancellation request is received before the order is shipped. Please contact us immediately if you wish to cancel an order.
                </p>
                
                <h3 className="text-xl font-medium mb-2">2.2 Return of Delivered Products</h3>
                <p className="mb-4">
                  If you are not completely satisfied with your purchase of standard products, you may return them within 7 days of receipt under the following conditions:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The product must be unused, in its original packaging, and in the same condition as received.</li>
                  <li>Proof of purchase (order number, receipt) must be provided.</li>
                  <li>Return shipping costs are the responsibility of the customer unless the return is due to our error (incorrect items shipped, defective products, etc.).</li>
                </ul>
                
                <h3 className="text-xl font-medium mb-2 mt-4">2.3 Refund Processing</h3>
                <p>
                  Once your return is received and inspected, we will notify you of the approval or rejection of your refund. If approved, your refund will be processed within 7-10 business days. The refund will be credited to the original payment method used for the purchase.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Custom Orders</h2>
                <p className="mb-4">
                  Due to the personalized nature of custom orders (including but not limited to custom-branded merchandise, personalized gift boxes, and custom event packages), we have specific policies for these items:
                </p>
                
                <h3 className="text-xl font-medium mb-2">3.1 Cancellation of Custom Orders</h3>
                <p className="mb-4">
                  Cancellation requests for custom orders will be considered based on the production stage:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Before design approval: Full refund minus a design fee (if applicable)</li>
                  <li>After design approval but before production: 70% refund</li>
                  <li>Once production has started: No refund available</li>
                </ul>
                
                <h3 className="text-xl font-medium mb-2 mt-4">3.2 Quality Issues</h3>
                <p>
                  If you receive custom products that have quality issues or do not match the approved design, please contact us within 48 hours of receipt with detailed information and photographs of the issues. We will work with you to resolve the situation, which may include replacement, repair, or partial refund, determined on a case-by-case basis.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Event Services</h2>
                <p className="mb-4">
                  For event planning and management services, the following refund policies apply:
                </p>
                
                <h3 className="text-xl font-medium mb-2">4.1 Cancellation by Client</h3>
                <p className="mb-4">
                  Refund eligibility for event services depends on the timing of cancellation:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>60+ days before the event: 90% refund of the total amount paid</li>
                  <li>30-59 days before the event: 50% refund of the total amount paid</li>
                  <li>15-29 days before the event: 25% refund of the total amount paid</li>
                  <li>0-14 days before the event: No refund available</li>
                </ul>
                <p className="mt-4">
                  Any non-refundable expenses already incurred by RB Gifting Solutions on behalf of the client will be deducted from the refundable amount.
                </p>
                
                <h3 className="text-xl font-medium mb-2 mt-4">4.2 Postponement</h3>
                <p>
                  If you need to postpone your event, we will make reasonable efforts to accommodate the new date without additional charges, subject to availability. Payments made will be applied to the rescheduled event, provided the new date is within 6 months of the original date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Non-Refundable Items and Services</h2>
                <p className="mb-2">The following items and services are non-refundable:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Digital products and designs</li>
                  <li>Consultation fees</li>
                  <li>Rush order fees</li>
                  <li>Shipping and handling charges (unless the return is due to our error)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. How to Request a Refund</h2>
                <p className="mb-4">
                  To initiate a return or request a refund, please contact our customer service team at contact@rbgifting.com with the following information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your order number</li>
                  <li>The items you wish to return or services you wish to cancel</li>
                  <li>The reason for your return or cancellation</li>
                  <li>For product issues, please include photographs showing the problem</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Changes to This Policy</h2>
                <p>
                  We reserve the right to modify this refund policy at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services following the posting of changes constitutes your acceptance of such changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
                <p>
                  If you have any questions about our refund policy, please contact us at:
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