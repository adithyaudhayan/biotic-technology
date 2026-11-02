"use client";

import { useState } from "react";

type Language = "en" | "ml";

const email = "biotictechnologies11@gmail.com";
const phones = ["+917902636232", "+917994136232", "+919207118557"];
const whatsappNumber = "917902636232";

const copy = {
  en: {
    top: "SUSTAINABLE TECHNOLOGY • RESPONSIBLE WASTE MANAGEMENT",
    nav: ["Home", "About us", "Our solutions", "Why BIOTIC", "FAQs", "Contact"],
    enquire: "Make an enquiry",
    heroTag: "A GREENER WAY FORWARD",
    heroTitle: "A cleaner tomorrow",
    heroAccent: "starts today.",
    heroText: "Discover thoughtful solutions for waste management, organic composting and renewable energy — designed to make sustainable living more accessible.",
    explore: "Explore our solutions",
    aboutLink: "Discover BIOTIC",
    heroNote: "WASTE LESS. LIVE BETTER.",
    introTag: "WELCOME TO BIOTIC",
    introTitle: "Making better waste management part of everyday life.",
    introText: "BIOTIC TECHNOLOGIES brings together a range of waste management and sustainable technology solutions. From organic waste processing to renewable energy and solar products, our focus is on helping homes, communities and organisations explore practical ways to use resources more responsibly.",
    introLink: "Talk to our team",
    highlightTag: "A MORE CONSIDERED APPROACH",
    highlightTitle: "Small changes. Meaningful possibilities.",
    highlightText: "When waste is managed thoughtfully, it can become part of a more responsible resource cycle. The right solution begins with understanding your needs, your space and the kind of waste you want to manage.",
    highlightOne: "Manage organic waste",
    highlightTwo: "Explore renewable energy",
    highlightThree: "Make better use of resources",
    productsTag: "EXPLORE WHAT WE OFFER",
    productsTitle: "Solutions for a more sustainable everyday.",
    productsText: "Explore our range of products designed for different waste management and sustainable technology needs.",
    productAction: "View product details",
    productNames: ["Ring Compost Systems", "Biogas Plants", "Incinerators", "Waste Burners", "Solar Panels"],
    productDescriptions: [
      "A practical approach to managing everyday organic waste and supporting composting at the source.",
      "Explore solutions that use suitable organic waste to produce biogas for useful energy applications.",
      "Purpose-designed thermal treatment equipment for specific waste management applications.",
      "Equipment for defined waste handling requirements and suitable applications.",
      "Solar energy products that help explore cleaner and more sustainable energy options."
    ],
    learnTag: "A SIMPLE WAY TO BEGIN",
    learnTitle: "Finding the right solution starts with understanding your needs.",
    learnText: "The type of waste, the available space and the daily quantity all matter. A considered conversation can help identify which technology may be suitable for your situation.",
    steps: [
      ["01", "Tell us your needs", "Share your location, application and the type of waste you want to manage."],
      ["02", "Explore the options", "Understand the solutions that may be relevant to your requirements."],
      ["03", "Discuss the details", "Talk through product suitability, site conditions and next steps."]
    ],
    whyTag: "WHY BIOTIC TECHNOLOGIES",
    whyTitle: "A practical approach to a greener future.",
    whyText: "Sustainable solutions should make sense in everyday life. We focus on understanding the application and exploring technology that responds to real requirements.",
    reasons: [
      ["A range of solutions", "Explore options across organic waste management, waste treatment and renewable energy."],
      ["Application-led thinking", "Consider your space, waste type and operational needs before choosing a solution."],
      ["A personal conversation", "Discuss your requirements with our team and take the next step with clarity."]
    ],
    sectorsTag: "SOLUTIONS FOR DIFFERENT SETTINGS",
    sectorsTitle: "Designed around the way places work.",
    sectors: [
      ["Homes & gardens", "Explore practical ways to manage everyday organic waste."],
      ["Apartments & communities", "Consider waste management options for shared living environments."],
      ["Institutions & campuses", "Explore solutions for educational and community facilities."],
      ["Commercial & other settings", "Discuss technology options for specific operational requirements."]
    ],
    faqTag: "GOOD TO KNOW",
    faqTitle: "Frequently asked questions.",
    faqs: [
      ["What solutions does BIOTIC TECHNOLOGY offer?", "Our product range includes Ring Compost Systems, Biogas Plants, Incinerators, Waste Burners and Solar Panels. Contact us to discuss which option may suit your application."],
      ["How do I choose the right waste management solution?", "The right option depends on the type of waste, daily quantity, available space, location and intended use. Share these details with our team so we can discuss suitable options."],
      ["Can I enquire about a product for my institution or community?", "Yes. Contact us with details about your institution, community or site and the requirement you would like to discuss."],
      ["How can I contact BIOTIC TECHNOLOGY?", "You can email us at biotictechnologies11@gmail.com or call any of the phone numbers listed on this page."]
    ],
    ctaTag: "LET'S MAKE A BETTER CHOICE",
    ctaTitle: "Your next step towards responsible waste management.",
    ctaText: "Tell us a little about your requirement. We would be happy to hear from you and help you explore the available options.",
    ctaButton: "Start a conversation",
    contactTag: "GET IN TOUCH",
    contactTitle: "Let's talk about your requirement.",
    contactText: "Whether you're exploring a product for your home, community or organisation, our team is ready to hear from you.",
    emailLabel: "EMAIL US",
    phoneLabel: "CALL US",
    locationLabel: "LOCATION",
    location: "Kerala, India",
    enquiryNote: "Helpful details to share",
    enquiryHelp: "Your location • Type of waste • Approximate daily quantity • Available space",
    footerText: "Waste management and sustainable technology solutions.",
    footerPhrase: "A GREENER WAY FORWARD.",
    footerLinks: "QUICK LINKS",
    rights: "All rights reserved.",
    backTop: "Back to top ↑"
  },
  ml: {
    top: "സുസ്ഥിര സാങ്കേതികവിദ്യ • ഉത്തരവാദിത്തമുള്ള മാലിന്യ സംസ്കരണം",
    nav: ["ഹോം", "ഞങ്ങളെക്കുറിച്ച്", "പരിഹാരങ്ങൾ", "എന്തുകൊണ്ട് BIOTIC", "ചോദ്യങ്ങൾ", "ബന്ധപ്പെടുക"],
    enquire: "അന്വേഷിക്കുക",
    heroTag: "ഹരിതമായൊരു നാളേക്കായി",
    heroTitle: "ശുചിത്വമുള്ള നാളേക്ക്",
    heroAccent: "ഇന്ന് തുടങ്ങാം.",
    heroText: "മാലിന്യ സംസ്കരണം, ജൈവ കമ്പോസ്റ്റിംഗ്, പുനരുപയോഗ ഊർജം എന്നിവയ്ക്കായുള്ള പ്രായോഗിക പരിഹാരങ്ങൾ പരിചയപ്പെടൂ.",
    explore: "പരിഹാരങ്ങൾ കാണുക",
    aboutLink: "BIOTIC-നെ അറിയുക",
    heroNote: "മാലിന്യം കുറയ്ക്കാം. ജീവിതം മെച്ചപ്പെടുത്താം.",
    introTag: "BIOTIC-ലേക്ക് സ്വാഗതം",
    introTitle: "മികച്ച മാലിന്യ സംസ്കരണം ദൈനംദിന ജീവിതത്തിന്റെ ഭാഗമാക്കാം.",
    introText: "മാലിന്യ സംസ്കരണത്തിനും സുസ്ഥിര സാങ്കേതികവിദ്യയ്ക്കുമായി വിവിധ പരിഹാരങ്ങൾ BIOTIC TECHNOLOGY അവതരിപ്പിക്കുന്നു. ജൈവ മാലിന്യ സംസ്കരണം മുതൽ പുനരുപയോഗ ഊർജവും സോളാർ ഉൽപ്പന്നങ്ങളും വരെ, വിഭവങ്ങൾ ഉത്തരവാദിത്തത്തോടെ ഉപയോഗിക്കാൻ സഹായിക്കുന്ന പ്രായോഗിക മാർഗങ്ങളിലാണ് ഞങ്ങളുടെ ശ്രദ്ധ.",
    introLink: "ഞങ്ങളുടെ ടീമുമായി സംസാരിക്കുക",
    highlightTag: "കൂടുതൽ പരിഗണനയുള്ള സമീപനം",
    highlightTitle: "ചെറിയ മാറ്റങ്ങൾ. മികച്ച സാധ്യതകൾ.",
    highlightText: "മാലിന്യം ശ്രദ്ധാപൂർവം കൈകാര്യം ചെയ്യുമ്പോൾ അത് വിഭവങ്ങളുടെ ഉത്തരവാദിത്തമുള്ള ഉപയോഗത്തിന്റെ ഭാഗമാകാം. നിങ്ങളുടെ ആവശ്യങ്ങളും സ്ഥലവും മാലിന്യത്തിന്റെ സ്വഭാവവും മനസ്സിലാക്കുന്നതിലാണ് അനുയോജ്യമായ പരിഹാരം ആരംഭിക്കുന്നത്.",
    highlightOne: "ജൈവ മാലിന്യം കൈകാര്യം ചെയ്യുക",
    highlightTwo: "പുനരുപയോഗ ഊർജ സാധ്യതകൾ",
    highlightThree: "വിഭവങ്ങൾ മികച്ച രീതിയിൽ ഉപയോഗിക്കുക",
    productsTag: "ഞങ്ങളുടെ ഉൽപ്പന്നങ്ങൾ",
    productsTitle: "സുസ്ഥിരമായ ദൈനംദിന ജീവിതത്തിനുള്ള പരിഹാരങ്ങൾ.",
    productsText: "വ്യത്യസ്ത മാലിന്യ സംസ്കരണ, സുസ്ഥിര സാങ്കേതിക ആവശ്യങ്ങൾക്കായുള്ള ഉൽപ്പന്നങ്ങൾ പരിചയപ്പെടുക.",
    productAction: "ഉൽപ്പന്ന വിശദാംശങ്ങൾ കാണുക",
    productNames: ["റിംഗ് കമ്പോസ്റ്റ് സംവിധാനങ്ങൾ", "ബയോഗ്യാസ് പ്ലാന്റുകൾ", "ഇൻസിനറേറ്ററുകൾ", "വേസ്റ്റ് ബേർണറുകൾ", "സോളാർ പാനലുകൾ"],
    productDescriptions: [
      "ദൈനംദിന ജൈവ മാലിന്യം ഉറവിടത്തിൽ തന്നെ കൈകാര്യം ചെയ്യുന്നതിനുള്ള പ്രായോഗിക മാർഗം.",
      "അനുയോജ്യമായ ജൈവ മാലിന്യം ഉപയോഗിച്ച് ബയോഗ്യാസ് ഉൽപ്പാദിപ്പിക്കുന്നതിനുള്ള പരിഹാരങ്ങൾ.",
      "നിശ്ചിത മാലിന്യ സംസ്കരണ ആവശ്യങ്ങൾക്കായുള്ള താപ സംസ്കരണ ഉപകരണങ്ങൾ.",
      "പ്രത്യേക മാലിന്യ കൈകാര്യം ചെയ്യൽ ആവശ്യങ്ങൾക്കുള്ള ഉപകരണങ്ങൾ.",
      "കൂടുതൽ ശുദ്ധമായ ഊർജ സാധ്യതകൾക്കായുള്ള സോളാർ ഉൽപ്പന്നങ്ങൾ."
    ],
    learnTag: "ആരംഭിക്കാനുള്ള ലളിതമായ വഴി",
    learnTitle: "നിങ്ങളുടെ ആവശ്യങ്ങൾ മനസ്സിലാക്കുന്നതിലാണ് ശരിയായ പരിഹാരം ആരംഭിക്കുന്നത്.",
    learnText: "മാലിന്യത്തിന്റെ തരം, ലഭ്യമായ സ്ഥലം, ദിവസേനയുള്ള അളവ് എന്നിവ പ്രധാനമാണ്. ശരിയായ ചർച്ചയിലൂടെ അനുയോജ്യമായ സാങ്കേതികവിദ്യ കണ്ടെത്താൻ കഴിയും.",
    steps: [
      ["01", "ആവശ്യം അറിയിക്കുക", "നിങ്ങളുടെ സ്ഥലം, ഉപയോഗം, മാലിന്യത്തിന്റെ തരം എന്നിവ പങ്കുവെക്കുക."],
      ["02", "പരിഹാരങ്ങൾ പരിചയപ്പെടുക", "നിങ്ങളുടെ ആവശ്യങ്ങൾക്ക് അനുയോജ്യമായ സാധ്യതകൾ മനസ്സിലാക്കുക."],
      ["03", "വിശദാംശങ്ങൾ ചർച്ച ചെയ്യുക", "ഉൽപ്പന്നത്തിന്റെ അനുയോജ്യതയും അടുത്ത ഘട്ടങ്ങളും സംസാരിക്കുക."]
    ],
    whyTag: "എന്തുകൊണ്ട് BIOTIC TECHNOLOGY",
    whyTitle: "ഹരിതമായ ഭാവിക്കായുള്ള പ്രായോഗിക സമീപനം.",
    whyText: "സുസ്ഥിര പരിഹാരങ്ങൾ ദൈനംദിന ജീവിതത്തിന് അനുയോജ്യമായിരിക്കണം. യഥാർത്ഥ ആവശ്യങ്ങൾ മനസ്സിലാക്കി അനുയോജ്യമായ സാങ്കേതികവിദ്യ കണ്ടെത്തുന്നതിലാണ് ഞങ്ങളുടെ ശ്രദ്ധ.",
    reasons: [
      ["വിവിധ പരിഹാരങ്ങൾ", "ജൈവ മാലിന്യ സംസ്കരണം, മാലിന്യ സംസ്കരണം, പുനരുപയോഗ ഊർജം എന്നിവയ്ക്കുള്ള ഉൽപ്പന്നങ്ങൾ."],
      ["ആവശ്യകേന്ദ്രിത സമീപനം", "പരിഹാരം തിരഞ്ഞെടുക്കുന്നതിന് മുമ്പ് സ്ഥലവും മാലിന്യത്തിന്റെ സ്വഭാവവും ആവശ്യങ്ങളും പരിഗണിക്കുക."],
      ["നേരിട്ടുള്ള ആശയവിനിമയം", "നിങ്ങളുടെ ആവശ്യങ്ങൾ ഞങ്ങളുടെ ടീമുമായി ചർച്ച ചെയ്യുക."]
    ],
    sectorsTag: "വ്യത്യസ്ത മേഖലകൾക്കുള്ള പരിഹാരങ്ങൾ",
    sectorsTitle: "ഓരോ സ്ഥലത്തിന്റെയും ആവശ്യങ്ങൾക്കനുസരിച്ച്.",
    sectors: [
      ["വീടുകളും തോട്ടങ്ങളും", "ദൈനംദിന ജൈവ മാലിന്യം കൈകാര്യം ചെയ്യാനുള്ള മാർഗങ്ങൾ."],
      ["അപ്പാർട്ട്മെന്റുകളും സമൂഹങ്ങളും", "പൊതു താമസസ്ഥലങ്ങൾക്കായുള്ള മാലിന്യ സംസ്കരണ മാർഗങ്ങൾ."],
      ["സ്ഥാപനങ്ങളും ക്യാമ്പസുകളും", "വിദ്യാഭ്യാസ, സാമൂഹിക സ്ഥാപനങ്ങൾക്കുള്ള പരിഹാരങ്ങൾ."],
      ["വാണിജ്യ മേഖലകളും മറ്റും", "പ്രത്യേക പ്രവർത്തന ആവശ്യങ്ങൾക്കുള്ള സാങ്കേതികവിദ്യ."]
    ],
    faqTag: "അറിയേണ്ട കാര്യങ്ങൾ",
    faqTitle: "പതിവായി ചോദിക്കുന്ന ചോദ്യങ്ങൾ.",
    faqs: [
      ["BIOTIC TECHNOLOGY എന്തെല്ലാം പരിഹാരങ്ങൾ നൽകുന്നു?", "റിംഗ് കമ്പോസ്റ്റ് സംവിധാനങ്ങൾ, ബയോഗ്യാസ് പ്ലാന്റുകൾ, ഇൻസിനറേറ്ററുകൾ, വേസ്റ്റ് ബേർണറുകൾ, സോളാർ പാനലുകൾ എന്നിവ ഞങ്ങളുടെ ഉൽപ്പന്ന ശ്രേണിയിൽ ഉൾപ്പെടുന്നു."],
      ["ശരിയായ മാലിന്യ സംസ്കരണ പരിഹാരം എങ്ങനെ തിരഞ്ഞെടുക്കാം?", "മാലിന്യത്തിന്റെ തരം, ദിവസേനയുള്ള അളവ്, ലഭ്യമായ സ്ഥലം, ഉപയോഗം എന്നിവയെ ആശ്രയിച്ചിരിക്കും അനുയോജ്യമായ പരിഹാരം. ഈ വിവരങ്ങൾ ഞങ്ങളുമായി പങ്കുവെക്കുക."],
      ["സ്ഥാപനങ്ങൾക്കും സമൂഹങ്ങൾക്കും വേണ്ടി അന്വേഷിക്കാമോ?", "തീർച്ചയായും. നിങ്ങളുടെ സ്ഥാപനം, സമൂഹം, സ്ഥലം, ആവശ്യങ്ങൾ എന്നിവ ഞങ്ങളുമായി പങ്കുവെക്കാം."],
      ["BIOTIC TECHNOLOGY-യെ എങ്ങനെ ബന്ധപ്പെടാം?", "biotictechnologies11@gmail.com എന്ന ഇമെയിലിലോ ഈ പേജിൽ നൽകിയിരിക്കുന്ന ഫോൺ നമ്പറുകളിലോ ബന്ധപ്പെടാം."]
    ],
    ctaTag: "മികച്ചൊരു തിരഞ്ഞെടുപ്പിലേക്ക്",
    ctaTitle: "ഉത്തരവാദിത്തമുള്ള മാലിന്യ സംസ്കരണത്തിലേക്കുള്ള അടുത്ത ചുവട്.",
    ctaText: "നിങ്ങളുടെ ആവശ്യത്തെക്കുറിച്ച് ഞങ്ങളോട് പറയൂ. ലഭ്യമായ പരിഹാരങ്ങൾ പരിചയപ്പെടുത്താൻ ഞങ്ങൾ സന്തോഷിക്കുന്നു.",
    ctaButton: "സംസാരിക്കാം",
    contactTag: "ബന്ധപ്പെടുക",
    contactTitle: "നിങ്ങളുടെ ആവശ്യത്തെക്കുറിച്ച് സംസാരിക്കാം.",
    contactText: "വീടിനോ സമൂഹത്തിനോ സ്ഥാപനത്തിനോ വേണ്ടിയുള്ള ഉൽപ്പന്നമാണെങ്കിലും ഞങ്ങളുടെ ടീമിനെ ബന്ധപ്പെടാം.",
    emailLabel: "ഇമെയിൽ",
    phoneLabel: "ഫോൺ",
    locationLabel: "സ്ഥലം",
    location: "കേരളം, ഇന്ത്യ",
    enquiryNote: "പങ്കുവെക്കാൻ സഹായകരമായ വിവരങ്ങൾ",
    enquiryHelp: "സ്ഥലം • മാലിന്യത്തിന്റെ തരം • ഏകദേശ ദൈനംദിന അളവ് • ലഭ്യമായ സ്ഥലം",
    footerText: "മാലിന്യ സംസ്കരണവും സുസ്ഥിര സാങ്കേതികവിദ്യാ പരിഹാരങ്ങളും.",
    footerPhrase: "ഹരിതമായൊരു നാളേക്കായി.",
    footerLinks: "പ്രധാന ലിങ്കുകൾ",
    rights: "എല്ലാ അവകാശങ്ങളും സംരക്ഷിതം.",
    backTop: "മുകളിലേക്ക് ↑"
  }
};

const products = [
  {
    number: "01",
    slug: "ring-compost",
    category: "ORGANIC WASTE",
    image: "/images/ring-compost.jpeg",
    alt: "Ring compost system"
  },
  {
    number: "02",
    slug: "biogas-plant",
    category: "RENEWABLE ENERGY",
    image: "/images/biogas.jpeg",
    alt: "Biogas plant"
  },
  {
    number: "03",
    slug: "incinerator",
    category: "WASTE TREATMENT",
    image: "/images/incinerator.jpeg",
    alt: "Waste treatment incinerator"
  },
  {
    number: "04",
    slug: "waste-burner",
    category: "WASTE MANAGEMENT",
    image: "/images/waste-burner.jpeg",
    alt: "Waste management burner"
  },
  {
    number: "05",
    slug: "solar-systems",
    category: "SOLAR ENERGY",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1100&q=85",
    alt: "Solar panels"
  }
];

const navIds = ["home", "about", "solutions", "why-biotic", "faqs", "contact"];

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const t = copy[language];

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello BIOTIC TECHNOLOGIES, I would like to enquire about your products and solutions."
  )}`;

  return (
    <main className={language === "ml" ? "site ml-site" : "site"}>
      <div className="top-strip">
        <span className="top-dot" />
        <span>{t.top}</span>
        <span className="top-location">KERALA, INDIA</span>
      </div>

      <header className="header">
        <a className="brand" href="#home" aria-label="BIOTIC TECHNOLOGIES">
          <img
            src="/images/biotic-logo.jpeg"
            alt="BIOTIC TECHNOLOGIES"
            width="60"
            height="60"
            className="company-logo"
          />
          <span className="brand-name">
            <strong>BIOTIC</strong>
            <small>TECHNOLOGIES</small>
          </span>
        </a>

        <button
          type="button"
          className="mobile-menu"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={menuOpen ? "navigation navigation-open" : "navigation"}>
          {t.nav.map((label, index) => (
            <a
              key={navIds[index]}
              href={`#${navIds[index]}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="header-right">
          <div className="language">
            <button
              type="button"
              className={language === "en" ? "selected" : ""}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
            <span />
            <button
              type="button"
              className={language === "ml" ? "selected" : ""}
              onClick={() => setLanguage("ml")}
            >
              മലയാളം
            </button>
          </div>

          <a className="header-button" href="#contact">
            {t.enquire} <span>↗</span>
          </a>
        </div>
      </header>

      <section className="hero compact-hero" id="home">
        <div className="hero-photo" />
        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="eyebrow eyebrow-light">
            <span /> {t.heroTag}
          </div>

          <h1>
            {t.heroTitle}
            <br />
            <em>{t.heroAccent}</em>
          </h1>

          <p>{t.heroText}</p>

          <div className="hero-buttons">
            <a className="btn btn-primary" href="#solutions">
              {t.explore} <span>↗</span>
            </a>
            <a className="hero-secondary" href="#about">
              {t.aboutLink} <span>→</span>
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <span>BIOTIC TECHNOLOGIES · KERALA</span>
          <span className="hero-bottom-center">{t.heroNote}</span>
          <a href="#solutions">EXPLORE ↓</a>
        </div>
      </section>

      <section className="compact-about section-wrap" id="about">
        <div className="compact-about-main">
          <div className="eyebrow eyebrow-dark">
            <span /> {t.introTag}
          </div>

          <h2>{t.introTitle}</h2>
          <p>{t.introText}</p>

          <a className="under-link" href="#contact">
            {t.introLink} <span>↗</span>
          </a>
        </div>

        <div className="compact-about-side">
          <span className="about-mark">BT.</span>
          <strong>{t.highlightTag}</strong>
          <p>{t.highlightText}</p>

          <ul>
            <li>✓ {t.highlightOne}</li>
            <li>✓ {t.highlightTwo}</li>
            <li>✓ {t.highlightThree}</li>
          </ul>
        </div>
      </section>

      <section className="solutions section-wrap" id="solutions">
        <div className="section-heading">
          <div>
            <div className="eyebrow eyebrow-dark">
              <span /> {t.productsTag}
            </div>
            <h2>{t.productsTitle}</h2>
          </div>

          <p>{t.productsText}</p>
        </div>

        <div className="product-grid compact-product-grid">
          {products.map((product, index) => (
            <article className="product-card compact-product-card" key={product.number}>
              <a
                href={`/products/${product.slug}`}
                className="product-photo"
                aria-label={`${t.productNames[index]} details`}
              >
                <img src={product.image} alt={product.alt} loading="lazy" />
                <span className="product-count">{product.number}</span>
                <span className="product-open">↗</span>
              </a>

              <div className="product-body">
                <span className="product-category">
                  {language === "en"
                    ? product.category
                    : ["ജൈവ മാലിന്യം", "പുനരുപയോഗ ഊർജം", "മാലിന്യ സംസ്കരണം", "മാലിന്യ പരിപാലനം", "സോളാർ ഊർജം"][index]}
                </span>

                <h3>{t.productNames[index]}</h3>
                <p>{t.productDescriptions[index]}</p>

                <a
                  className="product-link"
                  href={`/products/${product.slug}`}
                >
                  {t.productAction} <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="compact-why section-wrap" id="why-biotic">
        <div className="compact-why-heading">
          <div className="eyebrow eyebrow-light">
            <span /> {t.whyTag}
          </div>

          <h2>{t.whyTitle}</h2>
          <p>{t.whyText}</p>
        </div>

        <div className="compact-reasons">
          {t.reasons.map((reason, index) => (
            <article className="compact-reason" key={reason[0]}>
              <span>0{index + 1}</span>
              <h3>{reason[0]}</h3>
              <p>{reason[1]}</p>
            </article>
          ))}
        </div>

        <div className="compact-audience">
          <span>
            {language === "en" ? "SERVING DIFFERENT SETTINGS" : "വ്യത്യസ്ത മേഖലകൾക്കുള്ള പരിഹാരങ്ങൾ"}
          </span>
          <p>{t.sectors.map((sector) => sector[0]).join("  ·  ")}</p>
        </div>
      </section>

      <section className="faq-section section-wrap" id="faqs">
        <div className="faq-intro">
          <div className="eyebrow eyebrow-dark">
            <span /> {t.faqTag}
          </div>

          <h2>{t.faqTitle}</h2>

          <p>
            {language === "en"
              ? "Need more information? Our team is happy to help."
              : "കൂടുതൽ വിവരങ്ങൾ ആവശ്യമുണ്ടോ? ഞങ്ങളുടെ ടീമിനെ ബന്ധപ്പെടാം."}
          </p>

          <a className="under-link" href={`mailto:${email}`}>
            {language === "en" ? "Email BIOTIC" : "ഇമെയിൽ ചെയ്യുക"} <span>↗</span>
          </a>
        </div>

        <div className="faq-list">
          {t.faqs.map((faq, index) => (
            <article className="faq-item" key={index}>
              <button
                type="button"
                className="faq-question"
                aria-expanded={activeFaq === index}
                onClick={() =>
                  setActiveFaq((current) => (current === index ? null : index))
                }
              >
                <span>{faq[0]}</span>
                <b>{activeFaq === index ? "−" : "+"}</b>
              </button>

              {activeFaq === index && (
                <div className="faq-answer">
                  <p>{faq[1]}</p>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="contact compact-contact section-wrap" id="contact">
        <div className="contact-intro">
          <div className="eyebrow eyebrow-dark">
            <span /> {t.contactTag}
          </div>

          <h2>{t.contactTitle}</h2>
          <p>{t.contactText}</p>

          <a
            className="btn btn-dark"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {language === "en" ? "Chat on WhatsApp" : "വാട്സ്ആപ്പിൽ ബന്ധപ്പെടുക"} <span>↗</span>
          </a>
        </div>

        <div className="contact-info">
          <div className="contact-row">
            <span>{t.emailLabel}</span>
            <a href={`mailto:${email}`}>{email}</a>
          </div>

          <div className="contact-row">
            <span>{t.phoneLabel}</span>
            <div className="contact-phones">
              {phones.map((phone) => (
                <a key={phone} href={`tel:${phone}`}>
                  {phone}
                </a>
              ))}
            </div>
          </div>

          <div className="contact-row">
            <span>{t.locationLabel}</span>
            <strong>{t.location}</strong>
          </div>

          <div className="contact-help">
            <span>✳</span>
            <div>
              <strong>{t.enquiryNote}</strong>
              <p>{t.enquiryHelp}</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <a className="brand footer-brand" href="#home">
            <img
              src="/images/biotic-logo.jpeg"
              alt="BIOTIC TECHNOLOGIES"
              width="52"
              height="52"
              className="company-logo"
            />
            <span className="brand-name">
              <strong>BIOTIC</strong>
              <small>TECHNOLOGIES</small>
            </span>
          </a>

          <p>{t.footerText}</p>

          <a href="#home" className="back-top">
            {t.backTop}
          </a>
        </div>

        <div className="footer-bottom">
          <span>© 2026 BIOTIC TECHNOLOGIES. {t.rights}</span>
          <span>{t.footerPhrase}</span>
          <span>KERALA · INDIA</span>
        </div>
      </footer>

      <div className="mobile-contact-bar">
        <a href={`tel:${phones[0]}`}>
          <span>☎</span>
          {language === "en" ? "Call us" : "വിളിക്കുക"}
        </a>

        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <span>↗</span>
          WhatsApp
        </a>
      </div>
    </main>
  );
}