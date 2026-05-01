import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const KEY = "cookieConsent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem(KEY);
      if (!v) setVisible(true);
    } catch {
      // ignore
    }
  }, []);

  const dismiss = (val: "accepted" | "declined") => {
    try {
      localStorage.setItem(KEY, val);
    } catch {
      // ignore
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-label="Cookie consent"
          className="fixed inset-x-3 bottom-3 z-[9998] mx-auto max-w-2xl rounded-xl border border-white/10 bg-[#111] p-4 text-white shadow-2xl sm:bottom-6 sm:p-5"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-relaxed text-white/85">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
            </p>
            <div className="flex shrink-0 gap-2">
              <button
                onClick={() => dismiss("declined")}
                className="rounded-full border border-white/25 px-4 py-2 text-sm text-white transition hover:bg-white/10"
              >
                Decline
              </button>
              <button
                onClick={() => dismiss("accepted")}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}