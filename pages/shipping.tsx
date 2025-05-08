import Head from 'next/head';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';

export default function ShippingInfo() {
  return (
    <>
      <Head>
        <title>Shipping Information | RB Gifting Solutions</title>
        <meta name="description" content="Shipping Information for RB Gifting Solutions products" />
      </Head>

      <PageHeader 
        title="Shipping Information" 
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
                <h2 className="text-2xl font-semibold mb-4">1. Shipping Coverage</h2>
                <p className="mb-4">
                  RB Gifting Solutions ships to all locations across India. For international orders, please contact our team directly to discuss shipping options and requirements.
                </p>
                <p>
                  We are able to ship to residential addresses, commercial addresses, and PO boxes within India.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Processing Times</h2>
                <p className="mb-4">
                  Our standard processing times (before shipping) are as follows:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Standard Products:</strong> 1-2 business days</li>
                  <li><strong>Custom Products:</strong> 7-14 business days (depending on complexity and quantity)</li>
                  <li><strong>Bulk Orders:</strong> 10-21 business days (depending on quantity and customization)</li>
                </ul>
                <p className="mt-4">
                  Processing time begins once payment is confirmed and, for custom orders, after design approval is received.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Shipping Methods and Delivery Times</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse mt-2">
                    <thead>
                      <tr className="bg-white/10">
                        <th className="border border-white/20 p-3 text-left">Shipping Method</th>
                        <th className="border border-white/20 p-3 text-left">Estimated Delivery Time</th>
                        <th className="border border-white/20 p-3 text-left">Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-white/20 p-3">Standard Shipping</td>
                        <td className="border border-white/20 p-3">5-7 business days</td>
                        <td className="border border-white/20 p-3">Calculated at checkout based on weight and destination</td>
                      </tr>
                      <tr className="bg-white/5">
                        <td className="border border-white/20 p-3">Express Shipping</td>
                        <td className="border border-white/20 p-3">2-3 business days</td>
                        <td className="border border-white/20 p-3">Calculated at checkout based on weight and destination</td>
                      </tr>
                      <tr>
                        <td className="border border-white/20 p-3">Premium Delivery</td>
                        <td className="border border-white/20 p-3">Next business day (for select cities only)</td>
                        <td className="border border-white/20 p-3">Calculated at checkout based on weight and destination</td>
                      </tr>
                      <tr className="bg-white/5">
                        <td className="border border-white/20 p-3">Bulk Order Shipping</td>
                        <td className="border border-white/20 p-3">Varies based on order size</td>
                        <td className="border border-white/20 p-3">Custom quote provided</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4">
                  <strong>Note:</strong> Delivery times are estimates and are not guaranteed. Delivery times may be affected by factors outside our control, such as weather conditions, holidays, or carrier delays.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Free Shipping Offers</h2>
                <p className="mb-4">
                  RB Gifting Solutions offers free standard shipping on orders over ₹10,000 within India. This offer applies to standard shipping only and does not include express or premium delivery options.
                </p>
                <p>
                  For corporate bulk orders, shipping terms are provided in the custom quote. Please contact our team for more information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Tracking Your Order</h2>
                <p className="mb-4">
                  Once your order ships, you will receive a shipping confirmation email with tracking information. You can use this tracking number to monitor the status of your delivery through the carrier's website.
                </p>
                <p>
                  If you have not received tracking information within the expected processing time, please contact our customer service team for assistance.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Shipping to Multiple Addresses</h2>
                <p>
                  We offer the option to ship items to multiple addresses, which is especially useful for corporate gifting programs. For orders requiring delivery to multiple locations, please contact our team to arrange this service. Additional fees may apply depending on the number of shipping locations and order complexity.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. International Shipping</h2>
                <p className="mb-4">
                  For international orders, please note the following:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>International shipping rates and delivery times vary by destination</li>
                  <li>The recipient is responsible for any customs duties, taxes, or import fees imposed by their country</li>
                  <li>We are not responsible for delays due to customs processing</li>
                  <li>Some products may not be eligible for international shipping due to size, weight, or content restrictions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Shipping Restrictions</h2>
                <p>
                  Certain items may be subject to shipping restrictions due to their nature, size, or weight. In such cases, our team will contact you to discuss alternative arrangements. We reserve the right to refuse shipment of any item that we determine cannot be safely or legally transported.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Lost or Damaged Packages</h2>
                <p className="mb-4">
                  In the rare event that your package is lost or damaged during transit:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Please contact us within 48 hours of the expected delivery date</li>
                  <li>We will work with the shipping carrier to locate the package or file a claim</li>
                  <li>If the package cannot be located or is confirmed damaged, we will arrange for a replacement shipment or refund</li>
                  <li>Please keep all packaging materials for damaged items until the claim process is complete</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
                <p>
                  If you have any questions about our shipping policies or need assistance with a specific order, please contact us at:
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