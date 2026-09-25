'use client';

import { motion, type Transition } from 'motion/react';
import type { ReactNode } from 'react';

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const ENTER_TRANSITION: Transition = { duration: 0.8, ease: EASE_OUT };
const ITEM_TRANSITION: Transition = { duration: 0.4, ease: EASE_OUT };

const ENTER_FROM = 'translate3d(0, 24px, 0) scale(0.985)';
const ITEM_FROM = 'translate3d(0, 16px, 0) scale(0.985)';
const AT_REST = 'translate3d(0, 0, 0) scale(1)';

export function PageEnter({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      data-motion-enter
      className={className}
      initial={{ opacity: 0, transform: ENTER_FROM }}
      animate={{ opacity: 1, transform: AT_REST }}
      transition={{ ...ENTER_TRANSITION, delay }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({
  children,
  className,
  stagger = 0.04,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  return (
    <motion.div
      data-motion-group
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      data-motion-enter
      className={className}
      variants={{
        hidden: { opacity: 0, transform: ITEM_FROM },
        visible: { opacity: 1, transform: AT_REST, transition: ITEM_TRANSITION },
      }}
    >
      {children}
    </motion.div>
  );
}
