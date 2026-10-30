// Toutes les informations de l'entreprise au même endroit.
// Modifiez ce fichier une seule fois : le site entier se met à jour.

export const site = {
  name: "Fikra Tech",
  // Domaine officiel. Sur Vercel, définissez aussi NEXT_PUBLIC_SITE_URL avec la même valeur.
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://getfikratech.com").replace(/\/$/, ""),
  tagline: "Agence d'intelligence artificielle à N'Djamena",
  description:
    "Agence d'intelligence artificielle à N'Djamena : chatbots WhatsApp en français et en arabe tchadien, numérisation d'archives, analyse de données, sites web et applications pour les entreprises et institutions du Tchad.",
  // ⚠️ Vérifiez que cette adresse reçoit bien vos emails (le domaine fikratech.com n'est pas le vôtre).
  email: "contact@fikratech.com",
  phoneDisplay: "+235 66 92 58 38",
  whatsappNumber: "23566925838", // format international, sans + ni espaces
  city: "N'Djamena",
  country: "Tchad",
  // Laissez vide ("") un réseau que vous n'avez pas encore : l'icône sera masquée.
  socials: {
    facebook: "",
    linkedin: "",
    tiktok: "",
  },
};

export function whatsappLink(message = "Bonjour, je souhaite discuter d'un projet avec Fikra Tech.") {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
