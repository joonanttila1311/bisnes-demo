// src/information/config.ts

export type Theme = 'default' | 'remontti' | 'kahvila' | 'siivous';

export const ACTIVE_THEME: Theme = 'siivous';

// ── 1. YRITYKSEN PERUSTIEDOT (Yhteystiedot, Somat, Aukioloajat) ──
interface BusinessData {
  name: string;
  legalName: string;
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
    heroImage: "https://www.shutterstock.com/image-vector/powerful-yellow-frontend-loader-type-260nw-2716137195.jpg",
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
  },

  siivous: {
  name: "Kodin Kiilto Oy",
  legalName: "",
  email: "info@kodinkiilto.fi",
  phone: "040 123 4567",
  address: "Puhtauskuja 8",
  zipAndCity: "00100 Helsinki",
  mapEmbedUrl: "", // Tähän haettaisiin oikea maps-linkki
  heroImage: "https://21webs.com.au/wp-content/uploads/2024/08/Cleaning-Services-Web-Design-Cover.webp",
  socials: {
    facebook: "https://facebook.com/kodinkiilto",
    instagram: "https://instagram.com/kodinkiilto",
  },
  openingHours: [
    { days: "Ma - Pe", hours: "08:00 - 17:00" }
  ]
}
};

export const SEO_CONFIG = {
  description: "Ammattitaitoiset palvelut ja laadukas lopputulos. Ota yhteyttä ja pyydä tarjous.",
  defaultTitle: "Master Template Business"
};


// ── 2. SISÄLTÖ (Tekstit, Palvelut, Tarinat, Hinnoittelu) ──

// --- Tyypit ---
interface HeroContent {
  badge: string;
  title: string;
  subtitle: string;
  btnPrimary: string;
  btnSecondary: string;
  showTrust: boolean;
  showCards: boolean;
}

interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

interface ServicesContent {
  title: string;
  subtitle: string;
  items: ServiceItem[];
}

interface PricingFeature { text: string; included: boolean }
interface PricingCard {
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: PricingFeature[];
  popular: boolean;
  cta: string;
  ctaHref: string;
}

interface PricingContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  note?: string;
  cards: PricingCard[];
}

interface AboutContent {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  stats: { value: string; label: string }[];
  founder: { name: string; title: string };
  quote: string;
  image: string;
}

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  images: GalleryImage[];
}

interface ContactContent {
  showForm: boolean;
  eyebrow: string;
  title: string;
  subtitle: string;
  formTitle: string;
  ctaLabel: string;
}

interface PrivacySection {
  heading: string;
  paragraphs: string[];
}

interface PrivacyContent {
  title: string;
  lastUpdated: string;
  sections: PrivacySection[];
}

interface TermsSection {
  heading: string;
  paragraphs: string[];
}

interface TermsContent {
  title: string;
  lastUpdated: string;
  sections: TermsSection[];
}

interface ContentData {
  hero: HeroContent;
  services: ServicesContent;
  pricing: PricingContent; // UUSI
  about: AboutContent;
  contact: ContactContent;
  footer: FooterContent;
  gallery: GalleryContent;
  faq: FAQContent;
  privacy: PrivacyContent;
  terms: TermsContent;
}

interface FooterContent {
  tagline: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: FAQItem[];
}

// --- Sisältö ---
export const CONTENT: Record<Theme, ContentData> = {
  default: {
    hero: {
      badge: "Asiantuntijapalvelut",
      title: "Ratkaisut, jotka kasvattavat liiketoimintaasi",
      subtitle: "Tarjoamme räätälöityjä palveluja, jotka auttavat yritystäsi menestymään kilpailluilla markkinoilla.",
      btnPrimary: "Pyydä tarjous",
      btnSecondary: "Lue lisää",
      showTrust: true,
      showCards: true
    },
    services: {
      title: "Palvelumme",
      subtitle: "Kattava valikoima asiantuntijapalveluja tarpeisiisi.",
      items: [
        { title: "Konsultointi", description: "Analysoimme tilanteesi ja autamme kasvussa.", icon: "BriefcaseBusiness" },
        { title: "Projektijohtaminen", description: "Viemme projektit maaliin aikataulussa.", icon: "ClipboardList" },
        { title: "Markkinointi", description: "Kasvata näkyvyyttäsi tehokkaasti.", icon: "BarChart2" },
        { title: "Verkkosivut", description: "Modernit ja konvertoivat ratkaisut.", icon: "MonitorSmartphone" },
        { title: "Asiakaspalvelu", description: "Nopea ja asiantunteva tuki.", icon: "Headset" },
        { title: "Koulutus", description: "Räätälöidyt ohjelmat henkilöstöllesi.", icon: "GraduationCap" },
      ]
    },
    pricing: {
      eyebrow: "Hinnoittelu",
      title: "Selkeä hinnoittelu, ei yllätyksiä",
      subtitle: "Valitse tarpeisiisi sopiva paketti.",
      note: "Hinnat sisältävät alv. 25,5 %.",
      cards: [
        {
          name: "Startti", price: "alk. 290 €", priceNote: "/ kk",
          description: "Pienille yrityksille.", popular: false,
          cta: "Aloita", ctaHref: "#contact",
          features: [{ text: "5 käyttäjää", included: true }, { text: "20 GB tila", included: true }, { text: "Tuki", included: true }, { text: "Analytiikka", included: false }]
        },
        {
          name: "Kasvu", price: "alk. 690 €", priceNote: "/ kk",
          description: "Kasvaville yrityksille.", popular: true,
          cta: "Pyydä tarjous", ctaHref: "#contact",
          features: [{ text: "25 käyttäjää", included: true }, { text: "100 GB tila", included: true }, { text: "24/7 Tuki", included: true }, { text: "Analytiikka", included: true }]
        },
        {
          name: "Yritys", price: "Räätälöity", priceNote: "kysy lisää",
          description: "Suurille organisaatioille.", popular: false,
          cta: "Ota yhteyttä", ctaHref: "#contact",
          features: [{ text: "Rajaton", included: true }, { text: "SLA", included: true }, { text: "Asiakaspäällikkö", included: true }, { text: "Integraatiot", included: true }]
        }
      ]
    },
    about: {
      eyebrow: "Meistä",
      title: "Olemme intohimoisesti asiakkaidemme puolella",
      paragraphs: [
        "Perustimme yrityksen yhdellä selkeällä tavoitteella: tarjota palvelua, josta asiakkaat kertovat eteenpäin.",
        "Tiimimme koostuu kokeneiden ammattilaisten joukosta, joilla on yhteensä yli 50 vuoden kokemus alalta.",
        "Uskomme pitkiin asiakassuhteisiin. Emme myy ratkaisua ja katoa — olemme rinnallasi vielä vuosienkin jälkeen."
      ],
      stats: [
        { value: "12+", label: "Vuotta kokemusta" },
        { value: "240", label: "Tyytyväistä asiakasta" },
        { value: "98%", label: "Suositteluaste" }
      ],
      founder: { name: "Aleksi Mäkinen", title: "Toimitusjohtaja & Perustaja" },
      quote: "Laatu ei maksa — huono laatu maksaa.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1470&q=80"
    },

    gallery: {
      eyebrow: "Galleria",
      title: "Vilkaise kulissien taakse",
      subtitle: "Ylpeydellä tehtyjä projekteja ja arkeamme.",
      images: [
        { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80", alt: "Tiimipalaveri" },
        { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80", alt: "Toimiston arkea" },
        { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80", alt: "Projekti valmiina" }
      ]
    },

    faq: {
      eyebrow: "UKK",
      title: "Usein kysytyt kysymykset",
      subtitle: "Löydä vastaukset mieltäsi askarruttaviin asioihin.",
      items: [
        { question: "Kuinka nopeasti pääsette aloittamaan?", answer: "Pyrimme aloittamaan uudet projektit aina 1-2 viikon sisällä sopimuksen allekirjoittamisesta." },
        { question: "Sopivatko palvelunne pienyrityksille?", answer: "Kyllä, räätälöimme ratkaisut aina yrityksen koon ja budjetin mukaan." },
        { question: "Miten laskutus tapahtuu?", answer: "Laskutamme tyypillisesti kerran kuukaudessa tai projektin virstanpylväiden mukaisesti. Maksuaika on 14 päivää." }
      ]
    },

    contact: {
      showForm: true,
      eyebrow: "Ota yhteyttä",
      title: "Jutellaan siitä, miten voimme auttaa",
      subtitle: "Täytä lomake tai soita suoraan — vastaamme aina kahden arkipäivän sisällä.",
      formTitle: "Lähetä viesti",
      ctaLabel: "Lähetä viesti"
    },

    privacy: {
      title: "Tietosuojaseloste",
      lastUpdated: "24.2.2026",
      sections: [
        {
          heading: "1. Mitä tietoja keräämme?",
          paragraphs: [
            "Keräämme ainoastaan tietoja, jotka jätät meille verkkosivustomme yhteydenottolomakkeen kautta.",
            "Näihin kuuluvat tyypillisesti nimesi, sähköpostiosoitteesi, puhelinnumerosi ja viestisi sisältö."
          ]
        },
        {
          heading: "2. Mihin käytämme tietoja?",
          paragraphs: [
            "Käytämme antamiasi tietoja ainoastaan yhteydenottoosi vastaamiseen ja asiakassuhteen hoitamiseen.",
            "Emme luovuta, myy tai jaa tietojasi kolmansille osapuolille ilman erillistä suostumustasi, ellei laki sitä erikseen vaadi."
          ]
        },
        {
          heading: "3. Tietojen säilytysaika",
          paragraphs: [
            "Säilytämme henkilötietoja vain niin kauan kuin se on tarpeellista yhteydenoton hoitamiseksi tai asiakassuhteen ylläpitämiseksi.",
            "Säännöllisen asiakassuhteen päätyttyä tiedot poistetaan järjestelmistämme kohtuullisen ajan kuluessa."
          ]
        },
        {
          heading: "4. Sinun oikeutesi",
          paragraphs: [
            "Sinulla on oikeus tarkastaa sinusta tallennetut tiedot sekä vaatia niiden oikaisua tai poistamista kokonaan.",
            "Voit tehdä pyynnön ottamalla meihin yhteyttä rekisterinpitäjän sähköpostiosoitteeseen."
          ]
        }
      ]
    },

    terms: {
      title: "Käyttöehdot",
      lastUpdated: "24.2.2026",
      sections: [
        {
          heading: "1. Yleistä",
          paragraphs: [
            "Näitä käyttöehtoja sovelletaan verkkosivustomme käyttöön. Käyttämällä sivustoa hyväksyt nämä ehdot kokonaisuudessaan.",
            "Pidätämme oikeuden muuttaa näitä ehtoja, palveluitamme tai hintojamme milloin tahansa ilman ennakkoilmoitusta."
          ]
        },
        {
          heading: "2. Palvelut ja hinnoittelu",
          paragraphs: [
            "Sivustolla esitetyt hinnat, paketit ja palvelukuvaukset ovat suuntaa-antavia, ellei toisin ole erikseen mainittu.",
            "Sitova sopimus palvelun tuottamisesta ja lopullisesta hinnasta syntyy vasta, kun olemme antaneet erillisen kirjallisen tarjouksen tai tilausvahvistuksen."
          ]
        },
        {
          heading: "3. Tekijänoikeudet",
          paragraphs: [
            "Kaikki sivustolla julkaistu materiaali (tekstit, kuvat, logot ja graafinen ilme) on yrityksemme tai sen yhteistyökumppaneiden omaisuutta.",
            "Materiaalin luvaton kopiointi, jakaminen tai käyttö kaupallisiin tarkoituksiin on ehdottomasti kielletty tekijänoikeuslain nojalla."
          ]
        },
        {
          heading: "4. Vastuunrajoitus",
          paragraphs: [
            "Pyrimme pitämään sivuston tiedot ajantasaisina ja virheettöminä, mutta emme takaa tietojen täydellistä oikeellisuutta.",
            "Emme vastaa mistään välittömistä tai välillisistä vahingoista, jotka voivat aiheutua sivuston käytöstä, käyttökatkoista tai sivustolla olevista virheistä."
          ]
        }
      ]
    },

    footer: {
      tagline: "Asiantuntemusta, joka kantaa. Rakennettu luottamukselle."
    }
  },

  remontti: {
    hero: {
      badge: "Luotettava kumppani",
      title: "Huoneistoremontit aikataulussa",
      subtitle: "Avaimet käteen -remontit takuutyönä. Pyydä ilmainen arviokäynti jo tänään.",
      btnPrimary: "Pyydä arvio",
      btnSecondary: "Katso referenssit",
      showTrust: true,
      showCards: true
    },
    services: {
      title: "Remonttipalvelumme",
      subtitle: "Laadukasta rakennusosaamista avainten luovutuksesta takuuhuoltoon.",
      items: [
        { title: "Kylpyhuoneremontti", description: "Täydellinen kylpyhuoneen uudistus vedeneristyksineen.", icon: "ShowerHead" },
        { title: "Keittiöremontti", description: "Suunnittelu, purkutyöt ja asennus.", icon: "ChefHat" },
        { title: "Maalaus & Tasoitus", description: "Ammattimainen seinien ja kattojen viimeistely.", icon: "PaintRoller" },
        { title: "Lattia- ja parkettityöt", description: "Asennukset, hionnat ja lakkaukset.", icon: "Layers" },
        { title: "LVI-työt", description: "Sertifioidut putki- ja ilmanvaihtoasennukset.", icon: "Wrench" },
        { title: "Takuuhuolto", description: "Kirjallinen takuu jokaiselle kohteelle.", icon: "ShieldCheck" },
      ]
    },
    pricing: {
      eyebrow: "Hinnasto",
      title: "Läpinäkyvät hinnat remontillesi",
      subtitle: "Kiinteät pakettihinnat helpottavat budjetointia.",
      note: "Hinnat ovat suuntaa-antavia. Alv. 25,5 % lisätään.",
      cards: [
        {
          name: "Pikkuremontti", price: "alk. 499 €", priceNote: "+ materiaalit",
          description: "Maalaus ja pintatyöt.", popular: false,
          cta: "Pyydä tarjous", ctaHref: "#contact",
          features: [{ text: "Maalaustyöt", included: true }, { text: "Tapetointi", included: true }, { text: "Listotus", included: true }, { text: "Takuu", included: true }]
        },
        {
          name: "Kylpyhuone", price: "alk. 4 900 €", priceNote: "+ materiaalit",
          description: "Täydellinen märkätilaremontti.", popular: true,
          cta: "Varaa kartoitus", ctaHref: "#contact",
          features: [{ text: "Purku & pohjat", included: true }, { text: "Vedeneristys", included: true }, { text: "Kaakelointi", included: true }, { text: "Putkityöt", included: true }]
        },
        {
          name: "Huoneisto", price: "alk. 12 000 €", priceNote: "avaimet käteen",
          description: "Koko asunnon uudistus.", popular: false,
          cta: "Pyydä tarjous", ctaHref: "#contact",
          features: [{ text: "Kaikki pinnat", included: true }, { text: "Keittiö & kph", included: true }, { text: "Sähkötyöt", included: true }, { text: "Projektijohto", included: true }]
        }
      ]
    },
    about: {
      eyebrow: "Meistä",
      title: "Luotettavuus rakentuu teoilla, ei puheilla",
      paragraphs: [
        "Yli kahden vuosikymmenen ajan olemme remontoineet satoja koteja Suomessa. Perustajamme Jukka oppi salat käytännössä.",
        "Jokainen työmaamme on siisti, jokainen aikataulu pidetään ja jokaisesta projektista annetaan kirjallinen takuu.",
        "Asiakkaamme luottavat meihin koska me luotamme omaan työmme. Käytämme ainoastaan sertifioituja materiaaleja."
      ],
      stats: [
        { value: "22+", label: "Vuotta kokemusta" },
        { value: "600", label: "Remonttia valmiina" },
        { value: "5v", label: "Kirjallinen takuu" }
      ],
      founder: { name: "Jukka Korhonen", title: "Perustaja & Vastaava mestari" },
      quote: "Laatu ei maksa — huono laatu maksaa.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1470&q=80"
    },

    gallery: {
      eyebrow: "Referenssit",
      title: "Työmme jälki puhuu puolestaan",
      subtitle: "Tutustu hiljattain valmistuneisiin kohteisiimme.",
      images: [
        { src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80", alt: "Uusittu keittiö" },
        { src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80", alt: "Moderni kylpyhuone" },
        { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", alt: "Olohuoneen pintaremontti" }
      ]
    },

    faq: {
      eyebrow: "UKK",
      title: "Mietityttääkö remontissa jokin?",
      subtitle: "Kokosimme yleisimmät kysymykset ja vastaukset.",
      items: [
        { question: "Pitääkö minun muuttaa pois kotoa remontin ajaksi?", answer: "Se riippuu remontin laajuudesta. Pienissä pintaremonteissa voit asua kotona, mutta isojen kylpyhuone- tai huoneistoremonttien ajaksi suosittelemme sijaisasuntoa." },
        { question: "Kuka hoitaa rakennusluvat ja ilmoitukset taloyhtiölle?", answer: "Me autamme kaikissa tarvittavissa paperitöissä ja teemme tarvittavat ilmoitukset taloyhtiön isännöitsijälle puolestasi." },
        { question: "Mitä jos remontin aikana ilmenee yllätyksiä?", answer: "Kartoitamme kohteen huolella etukäteen. Jos purkuvaiheessa kuitenkin löytyy esimerkiksi kosteusvaurio, pysäytämme työt, informoimme sinua heti ja sovimme jatkotoimenpiteistä yhdessä." }
      ]
    },

    contact: {
      showForm: true,
      eyebrow: "Pyydä tarjous",
      title: "Kerro projektistasi — tarjous on maksuton",
      subtitle: "Vastaamme jokaiseen yhteydenottoon kahden arkipäivän sisällä.",
      formTitle: "Pyydä maksuton tarjous",
      ctaLabel: "Lähetä tarjouspyyntö"
    },

    privacy: {
      title: "Tietosuojaseloste",
      lastUpdated: "24.2.2026",
      sections: [
        {
          heading: "1. Mitä tietoja keräämme?",
          paragraphs: [
            "Keräämme ainoastaan tietoja, jotka jätät meille verkkosivustomme yhteydenottolomakkeen kautta.",
            "Näihin kuuluvat tyypillisesti nimesi, sähköpostiosoitteesi, puhelinnumerosi ja viestisi sisältö."
          ]
        },
        {
          heading: "2. Mihin käytämme tietoja?",
          paragraphs: [
            "Käytämme antamiasi tietoja ainoastaan yhteydenottoosi vastaamiseen ja asiakassuhteen hoitamiseen.",
            "Emme luovuta, myy tai jaa tietojasi kolmansille osapuolille ilman erillistä suostumustasi, ellei laki sitä erikseen vaadi."
          ]
        },
        {
          heading: "3. Tietojen säilytysaika",
          paragraphs: [
            "Säilytämme henkilötietoja vain niin kauan kuin se on tarpeellista yhteydenoton hoitamiseksi tai asiakassuhteen ylläpitämiseksi.",
            "Säännöllisen asiakassuhteen päätyttyä tiedot poistetaan järjestelmistämme kohtuullisen ajan kuluessa."
          ]
        },
        {
          heading: "4. Sinun oikeutesi",
          paragraphs: [
            "Sinulla on oikeus tarkastaa sinusta tallennetut tiedot sekä vaatia niiden oikaisua tai poistamista kokonaan.",
            "Voit tehdä pyynnön ottamalla meihin yhteyttä rekisterinpitäjän sähköpostiosoitteeseen."
          ]
        }
      ]
    },

    terms: {
      title: "Käyttöehdot",
      lastUpdated: "24.2.2026",
      sections: [
        {
          heading: "1. Yleistä",
          paragraphs: [
            "Näitä käyttöehtoja sovelletaan verkkosivustomme käyttöön. Käyttämällä sivustoa hyväksyt nämä ehdot kokonaisuudessaan.",
            "Pidätämme oikeuden muuttaa näitä ehtoja, palveluitamme tai hintojamme milloin tahansa ilman ennakkoilmoitusta."
          ]
        },
        {
          heading: "2. Palvelut ja hinnoittelu",
          paragraphs: [
            "Sivustolla esitetyt hinnat, paketit ja palvelukuvaukset ovat suuntaa-antavia, ellei toisin ole erikseen mainittu.",
            "Sitova sopimus palvelun tuottamisesta ja lopullisesta hinnasta syntyy vasta, kun olemme antaneet erillisen kirjallisen tarjouksen tai tilausvahvistuksen."
          ]
        },
        {
          heading: "3. Tekijänoikeudet",
          paragraphs: [
            "Kaikki sivustolla julkaistu materiaali (tekstit, kuvat, logot ja graafinen ilme) on yrityksemme tai sen yhteistyökumppaneiden omaisuutta.",
            "Materiaalin luvaton kopiointi, jakaminen tai käyttö kaupallisiin tarkoituksiin on ehdottomasti kielletty tekijänoikeuslain nojalla."
          ]
        },
        {
          heading: "4. Vastuunrajoitus",
          paragraphs: [
            "Pyrimme pitämään sivuston tiedot ajantasaisina ja virheettöminä, mutta emme takaa tietojen täydellistä oikeellisuutta.",
            "Emme vastaa mistään välittömistä tai välillisistä vahingoista, jotka voivat aiheutua sivuston käytöstä, käyttökatkoista tai sivustolla olevista virheistä."
          ]
        }
      ]
    },

    footer: {
      tagline: "Rakennamme kestävää laatua ja pitkäaikaisia kumppanuuksia."
    }
  },

  kahvila: {
    hero: {
      badge: "Avoinna joka päivä",
      title: "Kaupungin parhaat aamukahvit",
      subtitle: "Tule nauttimaan tuoreista leivonnaisista, erikoiskahveista ja kiireettömästä tunnelmasta aivan keskustassa.",
      btnPrimary: "Löydä meidät",
      btnSecondary: "Tarinamme",
      showTrust: false,
      showCards: false
    },
    services: {
      title: "Kahvilapalvelumme",
      subtitle: "Maistuvaa kahvia, tuoreita leivonnaisia ja lämmin tunnelma.",
      items: [
        { title: "Erikoiskahvit", description: "Paahdettuna kotimaisen pienpaahtimon pavulla.", icon: "Coffee" },
        { title: "Tuoreet leivonnaiset", description: "Paistetaan päivittäin paikan päällä.", icon: "Croissant" },
        { title: "Lounas", description: "Vaihtuva lähiruokalounas arkipäivisin.", icon: "UtensilsCrossed" },
        { title: "Yksityistilaisuudet", description: "Varaa koko kahvila juhliisi.", icon: "PartyPopper" },
        { title: "Take Away", description: "Nouda suoraan tiskiltä tai tilaa ennakkoon.", icon: "ShoppingBag" },
        { title: "Lahjakortit", description: "Ilahduta läheistäsi kahvilakokemuksella.", icon: "Gift" },
      ]
    },
    pricing: {
      eyebrow: "Menu",
      title: "Makuja jokaiseen hetkeen",
      subtitle: "Valmistettu päivittäin tuoreista raaka-aineista.",
      note: "Hinnat sisältävät alv. 14 %.",
      cards: [
        {
          name: "Aamiainen", price: "9,90 €", priceNote: "klo 11 asti",
          description: "Terveellinen aloitus päivään.", popular: false,
          cta: "Varaa pöytä", ctaHref: "#contact",
          features: [{ text: "Mehu & kahvi", included: true }, { text: "Leivonnainen", included: true }, { text: "Jogurtti", included: true }, { text: "Lämmin lisäke", included: false }]
        },
        {
          name: "Lounasbuffet", price: "14,50 €", priceNote: "arkisin",
          description: "Kattava ja vaihtuva lounas.", popular: true,
          cta: "Katso menu", ctaHref: "#services",
          features: [{ text: "Päivän keitto", included: true }, { text: "Pääruokabuffet", included: true }, { text: "Salaattipöytä", included: true }, { text: "Jälkiruoka", included: true }]
        },
        {
          name: "Brunch", price: "22,00 €", priceNote: "viikonloppuisin",
          description: "Viikonlopun herkutteluhetki.", popular: false,
          cta: "Varaa paikka", ctaHref: "#contact",
          features: [{ text: "Koko valikoima", included: true }, { text: "Lämmin buffet", included: true }, { text: "Kuohuviini", included: true }, { text: "Lapset -50%", included: true }]
        }
      ]
    },
    about: {
      eyebrow: "Tarina",
      title: "Rakkaus kahviin alkoi pienestä paahtimosta",
      paragraphs: [
        "Kaikki alkoi 2015, kun omistajamme Laura palasi Napolin-matkalta täynnä inspiraatiota. Hän halusi tuoda italialaisen kahvikulttuurin suomalaiseen arkeen.",
        "Käytämme vain lähialueen tuottajien raaka-aineita: luomumaito lähitilalta ja kahvipavut vastuullisilta pienpaahtimoilta.",
        "Kahvilamme on enemmän kuin kahvila — se on olohuone, jossa naapurit kohtaavat ja ystävät viihtyvät."
      ],
      stats: [
        { value: "9", label: "Vuotta auki" },
        { value: "340", label: "Kuppia päivässä" },
        { value: "100%", label: "Lähiruokaa" }
      ],
      founder: { name: "Laura Nieminen", title: "Omistaja & Kahvilamestari" },
      quote: "Hyvä kahvi on kuin halaus kupissa.",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1374&q=80"
    },

    gallery: {
      eyebrow: "Galleria",
      title: "Tunnelmia ja makuja",
      subtitle: "Pala arkeamme, tuoretta kahvia ja suussa sulavia leivonnaisia.",
      images: [
        { src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80", alt: "Latte art" },
        { src: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=800&q=80", alt: "Tuoreet croissantit" },
        { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80", alt: "Viihtyisä nurkkaus" }
      ]
    },

    faq: {
      eyebrow: "Tietoa meistä",
      title: "Usein kysyttyä",
      subtitle: "Käytännön asioita vierailuasi varten.",
      items: [
        { question: "Saako teille tulla koiran kanssa?", answer: "Totta kai! Kiltit ja hihnassa olevat karvakaverit ovat lämpimästi tervetulleita. Meiltä löytyy aina vesikuppi ja rapsutuksia." },
        { question: "Onko teillä gluteenittomia tai vegaanisia vaihtoehtoja?", answer: "Kyllä, vitriinistämme löytyy päivittäin sekä täysin vegaanisia että gluteenittomista raaka-aineista leivottuja herkkuja. (Huom. leivomme samoissa tiloissa, joten emme voi taata 100 % jauhottomuutta)." },
        { question: "Voinko varata pöydän etukäteen?", answer: "Arkena otamme vastaan pöytävarauksia. Viikonloppuisin palvelemme walk-in -periaatteella, jotta kaikilla on mahdollisuus poiketa kahville." }
      ]
    },

    contact: {
      showForm: false,
      eyebrow: "Löydä meidät",
      title: "Tervetuloa nauttimaan",
      subtitle: "Olemme aivan keskustassa — helposti saavutettavissa julkisella liikenteellä ja pyörällä.",
      formTitle: "",
      ctaLabel: "Avaa Google Maps"
    },

    privacy: {
      title: "Tietosuojaseloste",
      lastUpdated: "24.2.2026",
      sections: [
        {
          heading: "1. Mitä tietoja keräämme?",
          paragraphs: [
            "Keräämme ainoastaan tietoja, jotka jätät meille verkkosivustomme yhteydenottolomakkeen kautta.",
            "Näihin kuuluvat tyypillisesti nimesi, sähköpostiosoitteesi, puhelinnumerosi ja viestisi sisältö."
          ]
        },
        {
          heading: "2. Mihin käytämme tietoja?",
          paragraphs: [
            "Käytämme antamiasi tietoja ainoastaan yhteydenottoosi vastaamiseen ja asiakassuhteen hoitamiseen.",
            "Emme luovuta, myy tai jaa tietojasi kolmansille osapuolille ilman erillistä suostumustasi, ellei laki sitä erikseen vaadi."
          ]
        },
        {
          heading: "3. Tietojen säilytysaika",
          paragraphs: [
            "Säilytämme henkilötietoja vain niin kauan kuin se on tarpeellista yhteydenoton hoitamiseksi tai asiakassuhteen ylläpitämiseksi.",
            "Säännöllisen asiakassuhteen päätyttyä tiedot poistetaan järjestelmistämme kohtuullisen ajan kuluessa."
          ]
        },
        {
          heading: "4. Sinun oikeutesi",
          paragraphs: [
            "Sinulla on oikeus tarkastaa sinusta tallennetut tiedot sekä vaatia niiden oikaisua tai poistamista kokonaan.",
            "Voit tehdä pyynnön ottamalla meihin yhteyttä rekisterinpitäjän sähköpostiosoitteeseen."
          ]
        }
      ]
    },

    terms: {
      title: "Käyttöehdot",
      lastUpdated: "24.2.2026",
      sections: [
        {
          heading: "1. Yleistä",
          paragraphs: [
            "Näitä käyttöehtoja sovelletaan verkkosivustomme käyttöön. Käyttämällä sivustoa hyväksyt nämä ehdot kokonaisuudessaan.",
            "Pidätämme oikeuden muuttaa näitä ehtoja, palveluitamme tai hintojamme milloin tahansa ilman ennakkoilmoitusta."
          ]
        },
        {
          heading: "2. Palvelut ja hinnoittelu",
          paragraphs: [
            "Sivustolla esitetyt hinnat, paketit ja palvelukuvaukset ovat suuntaa-antavia, ellei toisin ole erikseen mainittu.",
            "Sitova sopimus palvelun tuottamisesta ja lopullisesta hinnasta syntyy vasta, kun olemme antaneet erillisen kirjallisen tarjouksen tai tilausvahvistuksen."
          ]
        },
        {
          heading: "3. Tekijänoikeudet",
          paragraphs: [
            "Kaikki sivustolla julkaistu materiaali (tekstit, kuvat, logot ja graafinen ilme) on yrityksemme tai sen yhteistyökumppaneiden omaisuutta.",
            "Materiaalin luvaton kopiointi, jakaminen tai käyttö kaupallisiin tarkoituksiin on ehdottomasti kielletty tekijänoikeuslain nojalla."
          ]
        },
        {
          heading: "4. Vastuunrajoitus",
          paragraphs: [
            "Pyrimme pitämään sivuston tiedot ajantasaisina ja virheettöminä, mutta emme takaa tietojen täydellistä oikeellisuutta.",
            "Emme vastaa mistään välittömistä tai välillisistä vahingoista, jotka voivat aiheutua sivuston käytöstä, käyttökatkoista tai sivustolla olevista virheistä."
          ]
        }
      ]
    },

    footer: {
      tagline: "Intohimona laatu, raaka-aineina rakkaus."
    }
  },

  siivous: {
  hero: {
    badge: "Kotisiivouksen ammattilainen",
    title: "Tule puhtaaseen kotiin ja rentoudu",
    subtitle: "Me hoidamme siivouksen, jotta sinä voit keskittyä olennaiseen. Takaamme kiiltävän lopputuloksen.",
    btnPrimary: "Varaa siivous",
    btnSecondary: "Lue lisää",
    showTrust: true,
    showCards: true
  },
  services: {
    title: "Siivouspalvelumme",
    subtitle: "Räätälöimme palvelun kotisi tarpeiden mukaan.",
    items: [
      { title: "Viikkosiivous", description: "Säännöllinen ylläpitosiivous sopimuksen mukaan.", icon: "Sparkles" },
      { title: "Muuttosiivous", description: "Takaamme, että asunto on luovutuskunnossa.", icon: "Box" },
      { title: "Ikkunapesu", description: "Kirkkaat ikkunat ilman raitoja ammattivälineillä.", icon: "Sun" },
      { title: "Suursiivous", description: "Perusteellinen puhdistus lattiasta kattoon.", icon: "SprayCan" },
      { title: "Toimistosiivous", description: "Viihtyisät tilat yrityksellesi.", icon: "BriefcaseBusiness" },
      { title: "Kotipalvelu", description: "Arvonlisäveroton palvelu ikäihmisille.", icon: "HeartHandshake" },
    ]
  },
  pricing: {
    eyebrow: "Hinnasto",
    title: "Selkeä tuntihinnoittelu",
    subtitle: "Kotitalousvähennyksen (-60%) jälkeen maksat vain murto-osan.",
    note: "Minimiveloitus 2 tuntia.",
    cards: [
      {
        name: "Kertasiivous", price: "45 €", priceNote: "/ h",
        description: "Kun tarvitset apua satunnaisesti.", popular: false,
        cta: "Varaa aika", ctaHref: "#contact",
        features: [{ text: "Omat aineet", included: true }, { text: "Ei sitoutumista", included: true }, { text: "Ikkunapesu", included: true }, { text: "Sama siivooja", included: false }]
      },
      {
        name: "Sopimussiivous", price: "39 €", priceNote: "/ h",
        description: "Säännöllinen apu arkeen.", popular: true,
        cta: "Tee sopimus", ctaHref: "#contact",
        features: [{ text: "Omat aineet", included: true }, { text: "Edullisempi hinta", included: true }, { text: "Vakiovuoro", included: true }, { text: "Sama siivooja", included: true }]
      },
      {
        name: "Muuttosiivous", price: "Urakka", priceNote: "alkaen 150€",
        description: "Avaimet käteen -ratkaisu.", popular: false,
        cta: "Pyydä tarjous", ctaHref: "#contact",
        features: [{ text: "Takuu", included: true }, { text: "Kaikki pinnat", included: true }, { text: "Uunin pesu", included: true }, { text: "Raportti isännöitsijälle", included: true }]
      }
    ]
  },
  about: {
    eyebrow: "Meistä",
    title: "Puhdas koti on onnellinen koti",
    paragraphs: [
      "Olemme paikallinen perheyritys, joka uskoo, että puhtaus on puoli ruokaa. Perustimme Kodin Kiillon vuonna 2018 helpottamaan lapsiperheiden arkea.",
      "Käytämme vain ekologisia ja hajusteettomia pesuaineita, jotka ovat turvallisia lapsille ja lemmikeille."
    ],
    stats: [
      { value: "500+", label: "Puhdasta kotia" },
      { value: "100%", label: "Tyytyväisyystakuu" },
      { value: "-60%", label: "Kotitalousvähennys" }
    ],
    founder: { name: "Maija Meikäläinen", title: "Yrittäjä" },
    quote: "Sinun vapaa-aikasi on meille kunnia-asia.",
    image: "https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&w=1470&q=80"
  },

  gallery: {
      eyebrow: "Työn jälki",
      title: "Puhdasta ja raikasta",
      subtitle: "Katso, miltä näyttää koti, jossa olemme käyneet.",
      images: [
        { src: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80", alt: "Puhdas olohuone" },
        { src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80", alt: "Kiiltävä kylpyhuone" },
        { src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80", alt: "Tahrattomat keittiötasot" }
      ]
    },

    faq: {
      eyebrow: "UKK",
      title: "Usein kysytyt kysymykset",
      subtitle: "Kaikki mitä sinun tarvitsee tietää siivouspalvelustamme.",
      items: [
        { question: "Pitääkö minun olla kotona siivouksen aikana?", answer: "Ei tarvitse! Suurin osa asiakkaistamme on töissä siivouksen ajan. Voit luovuttaa meille avaimen, jota säilytämme turvallisesti nimettömänä." },
        { question: "Tuotteko omat siivousvälineet mukana?", answer: "Kyllä, tuomme mukanamme kaikki tarvittavat ammattitason välineet ja ekologiset puhdistusaineet. Sinun ei tarvitse huolehtia mistään." },
        { question: "Miten kotitalousvähennys toimii?", answer: "Saat kaikista siivoustyön kuluista 60 % verovähennyksen. Annamme sinulle selkeän kuitin, jonka avulla vähennyksen ilmoittaminen OmaVerossa on helppoa." }
      ]
    },

  contact: {
    showForm: true,
    eyebrow: "Ota yhteyttä",
    title: "Varaa ilmainen arviokäynti",
    subtitle: "Tulemme katsomaan kohteen ja annamme tarkan hinta-arvion.",
    formTitle: "Lähetä tarjouspyyntö",
    ctaLabel: "Lähetä viesti"
  },

  privacy: {
      title: "Tietosuojaseloste",
      lastUpdated: "24.2.2026",
      sections: [
        {
          heading: "1. Mitä tietoja keräämme?",
          paragraphs: [
            "Keräämme ainoastaan tietoja, jotka jätät meille verkkosivustomme yhteydenottolomakkeen kautta.",
            "Näihin kuuluvat tyypillisesti nimesi, sähköpostiosoitteesi, puhelinnumerosi ja viestisi sisältö."
          ]
        },
        {
          heading: "2. Mihin käytämme tietoja?",
          paragraphs: [
            "Käytämme antamiasi tietoja ainoastaan yhteydenottoosi vastaamiseen ja asiakassuhteen hoitamiseen.",
            "Emme luovuta, myy tai jaa tietojasi kolmansille osapuolille ilman erillistä suostumustasi, ellei laki sitä erikseen vaadi."
          ]
        },
        {
          heading: "3. Tietojen säilytysaika",
          paragraphs: [
            "Säilytämme henkilötietoja vain niin kauan kuin se on tarpeellista yhteydenoton hoitamiseksi tai asiakassuhteen ylläpitämiseksi.",
            "Säännöllisen asiakassuhteen päätyttyä tiedot poistetaan järjestelmistämme kohtuullisen ajan kuluessa."
          ]
        },
        {
          heading: "4. Sinun oikeutesi",
          paragraphs: [
            "Sinulla on oikeus tarkastaa sinusta tallennetut tiedot sekä vaatia niiden oikaisua tai poistamista kokonaan.",
            "Voit tehdä pyynnön ottamalla meihin yhteyttä rekisterinpitäjän sähköpostiosoitteeseen."
          ]
        }
      ]
    },

    terms: {
      title: "Käyttöehdot",
      lastUpdated: "24.2.2026",
      sections: [
        {
          heading: "1. Yleistä",
          paragraphs: [
            "Näitä käyttöehtoja sovelletaan verkkosivustomme käyttöön. Käyttämällä sivustoa hyväksyt nämä ehdot kokonaisuudessaan.",
            "Pidätämme oikeuden muuttaa näitä ehtoja, palveluitamme tai hintojamme milloin tahansa ilman ennakkoilmoitusta."
          ]
        },
        {
          heading: "2. Palvelut ja hinnoittelu",
          paragraphs: [
            "Sivustolla esitetyt hinnat, paketit ja palvelukuvaukset ovat suuntaa-antavia, ellei toisin ole erikseen mainittu.",
            "Sitova sopimus palvelun tuottamisesta ja lopullisesta hinnasta syntyy vasta, kun olemme antaneet erillisen kirjallisen tarjouksen tai tilausvahvistuksen."
          ]
        },
        {
          heading: "3. Tekijänoikeudet",
          paragraphs: [
            "Kaikki sivustolla julkaistu materiaali (tekstit, kuvat, logot ja graafinen ilme) on yrityksemme tai sen yhteistyökumppaneiden omaisuutta.",
            "Materiaalin luvaton kopiointi, jakaminen tai käyttö kaupallisiin tarkoituksiin on ehdottomasti kielletty tekijänoikeuslain nojalla."
          ]
        },
        {
          heading: "4. Vastuunrajoitus",
          paragraphs: [
            "Pyrimme pitämään sivuston tiedot ajantasaisina ja virheettöminä, mutta emme takaa tietojen täydellistä oikeellisuutta.",
            "Emme vastaa mistään välittömistä tai välillisistä vahingoista, jotka voivat aiheutua sivuston käytöstä, käyttökatkoista tai sivustolla olevista virheistä."
          ]
        }
      ]
    },

  footer: {
      tagline: "Puhdas koti on arjen ylellisyyttä, jonka ansaitset."
    }
}
};