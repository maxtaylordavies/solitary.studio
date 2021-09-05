import React from "react";
import { motion } from "framer-motion";

interface Props {
  className: string;
  children: any;
}

export const Page = ({ className, children }: Props) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
