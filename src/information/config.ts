// src/config.ts

export type Theme = 'default' | 'remontti' | 'kahvila';

interface BusinessData {
  name: string;
  legalName: string; // Esim. "Oy" loppuosaa varten
  email: string;
  phone: string;
  address: string;
  zipAndCity: string;
  mapEmbedUrl: string;
  heroImage: string;
  socials: {
    facebook: string;
    instagram: string;
    linkedin?: string;
  };
  openingHours: { days: string; hours: string }[];
}

export const BUSINESS_CONFIG: Record<Theme, BusinessData> = {
  default: {
    name: "Yritys",
    legalName: "Oy",
    email: "info@yritys.fi",
    phone: "+358 40 123 4567",
    address: "Esimerkkikatu 12",
    zipAndCity: "00100 Helsinki",
    mapEmbedUrl: "",
    heroImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    openingHours: [
      { days: "Ma - Pe", hours: "08:00 - 16:00" }
    ]
  },
  remontti: {
    name: "Korhonen Rakennus",
    legalName: "Oy",
    email: "tarjoukset@korhonen.fi",
    phone: "+358 50 987 6543",
    address: "Vasarantie 5",
    zipAndCity: "33100 Tampere",
    mapEmbedUrl: "",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8IznCDJ_uEBE-O26F5Z42YvBeEFL5KUvLpA&s",
    socials: {
      facebook: "https://facebook.com/korhonen",
      instagram: "https://instagram.com/korhonen",
      linkedin: "https://linkedin.com/company/korhonen",
    },
    openingHours: [
      { days: "Ma - Pe", hours: "07:00 - 17:00" },
      { days: "La", hours: "09:00 - 14:00" }
    ]
  },
  kahvila: {
    name: "Kahvila Lauran Tupa",
    legalName: "",
    email: "hei@laurantupa.fi",
    phone: "+358 45 112 2334",
    address: "Keskustori 1",
    zipAndCity: "00150 Helsinki",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.4446543165242!2d24.9398!3d60.1708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920bc79621062f%3A0x234d5845681abc1!2sHelsingin%20tuomiokirkko!5e0!3m2!1sfi!2sfi!4v1700000000000",
    heroImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80",
    socials: {
      facebook: "https://facebook.com/laurantupa",
      instagram: "https://instagram.com/laurantupa",
    },
    openingHours: [
      { days: "Ma - Pe", hours: "07:30 - 19:00" },
      { days: "La - Su", hours: "10:00 - 18:00" }
    ]
  }
};

export const SEO_CONFIG = {
  description: "Ammattitaitoiset palvelut ja laadukas lopputulos. Ota yhteyttä ja pyydä tarjous.",
  defaultTitle: "Master Template Business"
};