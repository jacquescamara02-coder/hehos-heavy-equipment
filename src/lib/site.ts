export const SITE = {
  name: "Heavy Equipments Hospital",
  short: "HEHOS",
  legal: "HEAVY EQUIPMENTS HOSPITAL (HEHOS) SARL",
  tagline: "Votre engin, notre priorité",
  whatsapp: "22890078415",
  phones: ["+228 90 07 84 15", "+228 98 27 27 77"],
  emails: ["hehos2026@gmail.com", "moussedoumouhamed@gmail.com"],
  address: "Hédzranawoé, Sagbo-Ville, Lomé – Togo",
  mapQuery: "Hedzranawoe, Lomé, Togo",
};
export const waLink = (text = "Bonjour HEHOS, je souhaite un renseignement.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
