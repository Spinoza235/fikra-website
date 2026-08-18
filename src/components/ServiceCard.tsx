"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
};

export default function ServiceCard({ icon: Icon, title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-colors duration-300"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-light mb-4">
        <Icon className="w-6 h-6 text-white" strokeWidth={2} />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-muted text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}