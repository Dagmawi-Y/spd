"use client"

import { motion } from "framer-motion"
import { forwardRef } from "react"

// Fade in animation
export const FadeIn = motion.div

// Slide up animation
export const SlideUp = motion.div

// Scale animation
export const Scale = motion.div

// Stagger container for animating children
export const StaggerContainer = motion.div

// Common animation variants
export const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export const slideUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

export const scaleVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  }
}

export const staggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export const cardHoverVariants = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.02, 
    y: -4,
    transition: { duration: 0.2, ease: "easeOut" }
  }
}

// Button with motion
export const MotionButton = forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof motion.button>
>((props, ref) => (
  <motion.button
    ref={ref}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    transition={{ duration: 0.1 }}
    {...props}
  />
))

MotionButton.displayName = "MotionButton"