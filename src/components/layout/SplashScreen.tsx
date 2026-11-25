"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
  onComplete: () => void;
}

const fullName = "RAHUL VERMA";

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [visible, setVisible] = useState(true);
  const [typedCount, setTypedCount] = useState(0);
  const [showSubtitle, setShowSubtitle] = useState(false);

  const dismiss = useCallback(() => {
    setVisible(false);
  }, []);

  // Auto-dismiss after 3 seconds
  useEffect(() => {
    const timer = setTimeout(dismiss, 3000);
    return () => clearTimeout(timer);
  }, [dismiss]);

  // Letter-by-letter typing effect
  useEffect(() => {
    if (typedCount < fullName.length) {
      const timer = setTimeout(() => {
        setTypedCount((c) => c + 1);
      }, 80);
      return () => clearTimeout(timer);
    } else {
      // Show subtitle once typing completes
      const timer = setTimeout(() => setShowSubtitle(true), 200);
      return () => clearTimeout(timer);
    }
  }, [typedCount]);

  // Notify parent after exit animation completes
  const handleExitComplete = useCallback(() => {
    onComplete();
  }, [onComplete]);

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          onClick={dismiss}
          className="fixed inset-0 z-[100] flex cursor-pointer flex-col items-center justify-center bg-bg-primary"
        >
          {/* Monogram */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-heading text-7xl font-bold text-accent sm:text-8xl"
          >
            RV
          </motion.div>

          {/* Typed Name */}
          <div className="mt-6 h-10 overflow-hidden px-4">
            <p
              className="font-display whitespace-nowrap text-xl tracking-[0.2em] text-text-primary sm:text-2xl sm:tracking-[0.25em]"
              style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}
            >
              {fullName.slice(0, typedCount)}
              <motion.span
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 0.8,
                  times: [0, 0.49, 0.5, 1],
                  ease: "linear",
                }}
                className="ml-0.5 inline-block w-0.5 bg-accent align-middle"
                style={{ height: "1.2em" }}
              />
            </p>
          </div>

          {/* Subtitle */}
          <div className="mt-3 h-8">
            <AnimatePresence>
              {showSubtitle && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-sm tracking-widest text-text-secondary sm:text-base"
                >
                  AI Engineer
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Skip Hint */}
          <motion.p
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute bottom-10 text-sm text-text-secondary"
          >
            Click anywhere to skip
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
