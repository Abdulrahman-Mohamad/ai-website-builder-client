import { motion } from "framer-motion";
import { MessageCircle, CreditCard, ShieldCheck, ArrowRight, Info } from "lucide-react";
import Footer from "../components/Footer";

const Checkout = () => {
  const whatsappNumber = "+201013977924";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace("+", "")}`;

  return (
    <>
      <div className="px-4 md:px-16 lg:px-24 xl:px-32 pt-10 lg:pt-14 min-h-[80vh]">
        <div className="text-center mt-16 mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-100 text-3xl md:text-4xl font-medium"
          >
            Temporary Payment via <br className="md:hidden" />
            <span className="text-indigo-500">WhatsApp</span> & <span className="text-red-500">Vodafone Cash</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-sm max-w-2xl mx-auto mt-4"
          >
            We are currently updating our payment systems. Please follow the instructions below to complete your purchase securely.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto px-4 pb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="p-8 md:p-12 bg-black/20 ring ring-indigo-950 rounded-2xl text-white shadow-2xl backdrop-blur-sm border border-white/5"
          >
            <div className="space-y-8">
              <div className="flex gap-5 items-start">
                <div className="bg-indigo-500/10 p-3 rounded-xl ring ring-indigo-500/20 shrink-0">
                  <Info className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-indigo-300 mb-2">Why WhatsApp?</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Dear user, online payments are currently unavailable. You can complete your purchase easily by contacting us on WhatsApp. After confirming your order, you can send the payment via <span className="text-white font-medium">Vodafone Cash</span>.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="bg-emerald-500/10 p-3 rounded-xl ring ring-emerald-500/20 shrink-0">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-emerald-300 mb-2">Secure & Verified</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We are actively working on integrating official payment gateways to make the checkout process faster and more convenient in the near future. Your transaction is manually verified for maximum security.
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-indigo-500 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-500/20 group"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span className="text-lg">Contact Us on WhatsApp</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <div className="flex items-center justify-center gap-4 mt-8 opacity-50">
                  <div className="h-px bg-gray-700 flex-1" />
                  <span className="text-xs uppercase tracking-widest text-gray-400 font-medium">Payment Methods</span>
                  <div className="h-px bg-gray-700 flex-1" />
                </div>

                <div className="flex justify-center gap-6 mt-6 grayscale opacity-70">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    <span className="text-sm">Vodafone Cash</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm">InstaPay</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <p className="text-center text-sm text-gray-500 mt-10 font-light">
            Need help? Our support team is available 24/7 via WhatsApp.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;