"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { PageHero } from "@/src/components/Blocks";
import { site, whatsappLink } from "@/src/lib/site";
import { getContactSubjects } from "@/src/lib/services";
import { useLang } from "@/src/lib/i18n";

const field =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[15px] text-white outline-none transition-colors placeholder:text-muted/70 focus:border-primary";

export default function ContactContent() {
  const [state, handleSubmit] = useForm("xqpzwkrg");
  const { t } = useLang();
  const c = t.contact;
  const contactSubjects = getContactSubjects(t);

  return (
    <>
      <PageHero
        title={c.title}
        intro={c.intro}
      />

      <section className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.5fr]">
          <div className="flex flex-col gap-4">
            <a
              href={whatsappLink(t.common.waDefault)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-wa p-5 text-white transition hover:brightness-105"
            >
              <FaWhatsapp className="h-8 w-8 flex-shrink-0" aria-hidden="true" />
              <span>
                <span className="block font-semibold">{t.common.whatsapp}</span>
                <span className="text-sm text-white/85" dir="ltr">{site.phoneDisplay}</span>
              </span>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-primary"
            >
              <Mail className="h-6 w-6 flex-shrink-0 text-primary" aria-hidden="true" />
              <span>
                <span className="block font-semibold text-white">{c.email}</span>
                <span className="text-sm text-muted">{site.email}</span>
              </span>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <MapPin className="h-6 w-6 flex-shrink-0 text-primary" aria-hidden="true" />
              <span>
                <span className="block font-semibold text-white">{c.whereTitle}</span>
                <span className="text-sm text-muted">
                  {t.common.city}, {t.common.country}. {c.whereText}
                </span>
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            {state.succeeded ? (
              <div className="flex flex-col items-center gap-4 py-10 text-center" role="status">
                <CheckCircle2 className="h-12 w-12 text-primary" aria-hidden="true" />
                <h2 className="text-2xl font-semibold">{c.sentTitle}</h2>
                <p className="max-w-sm text-muted">
                  {c.sentText}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h2 className="text-2xl font-semibold">{c.formTitle}</h2>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
                      {c.name}
                    </label>
                    <input id="name" name="name" type="text" required autoComplete="name" className={field} />
                  </div>
                  <div>
                    <label htmlFor="organisation" className="mb-2 block text-sm font-medium text-white">
                      {c.org} <span className="font-normal text-muted">{c.optional}</span>
                    </label>
                    <input id="organisation" name="organisation" type="text" autoComplete="organization" className={field} />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
                      {c.emailLabel}
                    </label>
                    <input id="email" name="email" type="email" required autoComplete="email" className={field} />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-xs text-red-600" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white">
                      {c.phone} <span className="font-normal text-muted">{c.optional}</span>
                    </label>
                    <input id="phone" name="phone" type="tel" dir="ltr" autoComplete="tel" placeholder="+235" className={field} />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-white">
                    {c.need}
                  </label>
                  <select id="subject" name="subject" className={field} key={t.contact.other} defaultValue={contactSubjects[0]}>
                    {contactSubjects.map((s) => (
                      <option key={s} className="bg-dark">{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
                    {c.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className={`${field} resize-none`}
                    placeholder={c.placeholder}
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-xs text-red-600" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-white transition-colors hover:bg-primary-light disabled:opacity-60"
                >
                  {state.submitting ? c.sending : c.submit}
                  {!state.submitting && <Send className="h-4 w-4 rtl:-scale-x-100" aria-hidden="true" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}