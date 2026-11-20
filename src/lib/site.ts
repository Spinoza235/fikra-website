// Toutes les informations de l'entreprise au même endroit.
// Modifiez ce fichier une seule fois : le site entier se met à jour.

export const site = {
  name: "ZakiCortex",
  // Domaine officiel. Sur Vercel, définissez aussi NEXT_PUBLIC_SITE_URL avec la même valeur.
  // Quand le domaine zakicortex.com sera acheté, remplacez l'adresse ci-dessous.
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://getfikratech.com").replace(/\/$/, ""),
  tagline: "Agence d'intelligence artificielle à N'Djamena",
  description:
    "Agence d'intelligence artificielle à N'Djamena : chatbots WhatsApp en français et en arabe tchadien, numérisation d'archives, analyse de données, sites web et applications pour les entreprises et institutions du Tchad.",
  // Remplacez par contact@zakicortex.com quand le domaine et la boîte mail seront créés.
  email: "dingammadjihope@gmail.com",
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

export function whatsappLink(message = "Bonjour, je souhaite discuter d'un projet avec ZakiCortex.") {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
