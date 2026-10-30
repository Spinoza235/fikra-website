"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { useLang } from "@/src/lib/i18n";

export type TeamMember = {
  name: string;
  role: string;
  photo: string; // chemin dans /public, ex. "/images/team/cofounder-3.jpeg"
  bio: string;
  skills: string[];
  linkedin?: string;
};

export default function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  // Si la photo n'existe pas encore, on affiche les initiales à la place.
  const { t } = useLang();
  const [photoOk, setPhotoOk] = useState(true);
  const initials = member.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative rounded-3xl bg-gradient-to-b from-white/15 to-white/[0.02] p-px transition-shadow duration-500 hover:shadow-[0_30px_80px_-30px_rgba(124,58,237,0.6)]"
    >
      {/* Bordure dégradée qui s'allume au survol */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-primary to-primary-light opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col items-center rounded-[calc(1.5rem-1px)] bg-[#141424] px-7 pt-10 pb-8 text-center">
        {/* Photo ronde avec halo */}
        <div className="relative mb-6">
          <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary to-primary-light opacity-40 blur-xl transition-opacity duration-500 group-hover:opacity-70" />
          <motion.div
            className="absolute -inset-1.5 rounded-full border border-dashed border-primary-light/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <div className="relative h-36 w-36 overflow-hidden rounded-full ring-2 ring-primary/60 ring-offset-4 ring-offset-[#141424]">
            {photoOk ? (
              <Image
                src={member.photo}
                alt={`${t.common.photoOf} ${member.name}`}
                fill
                sizes="144px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                onError={() => setPhotoOk(false)}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary to-primary-light text-4xl font-bold text-white">
                {initials}
              </div>
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold text-white">{member.name}</h3>
        <p className="mt-1 text-sm font-medium text-primary-light">{member.role}</p>

        <p className="mt-4 text-[15px] leading-relaxed text-muted">{member.bio}</p>

        <ul className="mt-6 flex flex-wrap justify-center gap-2">
          {member.skills.map((s) => (
            <li
              key={s}
              className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary-light"
            >
              {s}
            </li>
          ))}
        </ul>

        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} ${t.common.onLinkedin}`}
            className="mt-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-primary hover:bg-primary/20"
          >
            <FaLinkedinIn className="h-4 w-4" />
          </a>
        )}
      </div>
    </motion.article>
  );
}