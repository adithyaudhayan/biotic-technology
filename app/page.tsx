
"use client";

import Image from "next/image";
import { useState } from "react";

type Language = "en" | "ml";

const email = "biotictechnologies11@gmail.com";
const phones = ["+917902636232", "+917994136232", "+919207118557"];

const copy = {
  en: {
    top: "SUSTAINABLE TECHNOLOGY • RESPONSIBLE WASTE MANAGEMENT",
    nav: ["Home", "About us", "Our solutions", "Why BIOTIC", "FAQs", "Contact"],
    enquire: "Make an enquiry",
    heroTag: "A GREENER WAY FORWARD",
    heroTitle: "A cleaner tomorrow",
    heroAccent: "starts today.",
    heroText:
      "Discover thoughtful solutions for waste management, organic composting and renewable energy — designed to make sustainable living more accessible.",
    explore: "Explore our solutions",
    aboutLink: "Discover BIOTIC",
    heroNote: "WASTE LESS. LIVE BETTER.",
    introTag: "WELCOME TO BIOTIC",
    introTitle: "Making better waste management part of everyday life.",
    introText:
      "BIOTIC TECHNOLOGY brings together a range of waste management and sustainable technology solutions. From organic waste processing to renewable energy and solar products, our focus is on helping homes, communities and organisations explore practical ways to use resources more responsibly.",
    introLink: "Talk to our team",
    highlightTag: "A MORE CONSIDERED APPROACH",
    highlightTitle: "Small changes. Meaningful possibilities.",
    highlightText:
      "When waste is managed thoughtfully, it can become part of a more responsible resource cycle. The right solution begins with understanding your needs, your space and the kind of waste you want to manage.",
    highlightOne: "Manage organic waste",
    highlightTwo: "Explore renewable energy",
    highlightThree: "Make better use of resources",
    productsTag: "EXPLORE WHAT WE OFFER",
    productsTitle: "Solutions for a more sustainable everyday.",
    productsText:
      "Explore our range of products designed for different waste management and sustainable technology needs.",
    productAction: "Enquire about this solution",
    productNames: [
      "Ring Compost Systems",
      "Biogas Plants",
      "Incinerators",
      "Waste Burners",
      "Solar Panels",
    ],
    productDescriptions: [
      "A practical approach to managing everyday organic waste and supporting composting at the source.",
      "Explore solutions that use suitable organic waste to produce biogas for useful energy applications.",
      "Purpose-designed thermal treatment equipment for specific waste management applications.",
      "Equipment for defined waste handling requirements and suitable applications.",
      "Solar energy products that help explore cleaner and more sustainable energy options.",
    ],
    learnTag: "A SIMPLE WAY TO BEGIN",
    learnTitle: "Finding the right solution starts with understanding your needs.",
    learnText:
      "The type of waste, the available space and the daily quantity all matter. A considered conversation can help identify which technology may be suitable for your situation.",
    steps: [
      ["01", "Tell us your needs", "Share your location, application and the type of waste you want to manage."],
      ["02", "Explore the options", "Understand the solutions that may be relevant to your requirements."],
      ["03", "Discuss the details", "Talk through product suitability, site conditions and next steps."],
    ],
    whyTag: "WHY BIOTIC TECHNOLOGY",
    whyTitle: "A practical approach to a greener future.",
    whyText:
      "Sustainable solutions should make sense in everyday life. We focus on understanding the application and exploring technology that responds to real requirements.",
    reasons: [
      ["A range of solutions", "Explore options across organic waste management, waste treatment and renewable energy."],
      ["Application-led thinking", "Consider your space, waste type and operational needs before choosing a solution."],
      ["A personal conversation", "Discuss your requirements with our team and take the next step with clarity."],
    ],
    sectorsTag: "SOLUTIONS FOR DIFFERENT SETTINGS",
    sectorsTitle: "Designed around the way places work.",
    sectors: [
      ["Homes & gardens", "Explore practical ways to manage everyday organic waste."],
      ["Apartments & communities", "Consider waste management options for shared living environments."],
      ["Institutions & campuses", "Explore solutions for educational and community facilities."],
      ["Commercial & other settings", "Discuss technology options for specific operational requirements."],
    ],
    faqTag: "GOOD TO KNOW",
    faqTitle: "Frequently asked questions.",
    faqs: [
      ["What solutions does BIOTIC TECHNOLOGY offer?", "Our product range includes Ring Compost Systems, Biogas Plants, Incinerators, Waste Burners and Solar Panels. Contact us to discuss which option may suit your application."],
      ["How do I choose the right waste management solution?", "The right option depends on the type of waste, daily quantity, available space, location and intended use. Share these details with our team so we can discuss suitable options."],
      ["Can I enquire about a product for my institution or community?", "Yes. Contact us with details about your institution, community or site and the requirement you would like to discuss."],
      ["How can I contact BIOTIC TECHNOLOGY?", "You can email us at biotictechnologies11@gmail.com or call any of the phone numbers listed on this page."],
    ],
    ctaTag: "LET'S MAKE A BETTER CHOICE",
    ctaTitle: "Your next step towards responsible waste management.",
    ctaText:
      "Tell us a little about your requirement. We would be happy to hear from you and help you explore the available options.",
    ctaButton: "Start a conversation",
    contactTag: "GET IN TOUCH",
    contactTitle: "Let's talk about your requirement.",
    contactText:
      "Whether you're exploring a product for your home, community or organisation, our team is ready to hear from you.",
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
    backTop: "Back to top ↑",
  },
  ml: {
    top: "സുസ്ഥിര സാങ്കേതികവിദ്യ • ഉത്തരവാദിത്തമുള്ള മാലിന്യ സംസ്കരണം",
    nav: ["ഹോം", "ഞങ്ങളെക്കുറിച്ച്", "പരിഹാരങ്ങൾ", "എന്തുകൊണ്ട് BIOTIC", "ചോദ്യങ്ങൾ", "ബന്ധപ്പെടുക"],
    enquire: "അന്വേഷിക്കുക",
    heroTag: "ഹരിതമായൊരു നാളേക്കായി",
    heroTitle: "ശുചിത്വമുള്ള നാളേക്ക്",
    heroAccent: "ഇന്ന് തുടങ്ങാം.",
    heroText:
      "മാലിന്യ സംസ്കരണം, ജൈവ കമ്പോസ്റ്റിംഗ്, പുനരുപയോഗ ഊർജം എന്നിവയ്ക്കായുള്ള പ്രായോഗിക പരിഹാരങ്ങൾ പരിചയപ്പെടൂ.",
    explore: "പരിഹാരങ്ങൾ കാണുക",
    aboutLink: "BIOTIC-നെ അറിയുക",
    heroNote: "മാലിന്യം കുറയ്ക്കാം. ജീവിതം മെച്ചപ്പെടുത്താം.",
    introTag: "BIOTIC-ലേക്ക് സ്വാഗതം",
    introTitle: "മികച്ച മാലിന്യ സംസ്കരണം ദൈനംദിന ജീവിതത്തിന്റെ ഭാഗമാക്കാം.",
    introText:
      "മാലിന്യ സംസ്കരണത്തിനും സുസ്ഥിര സാങ്കേതികവിദ്യയ്ക്കുമായി വിവിധ പരിഹാരങ്ങൾ BIOTIC TECHNOLOGY അവതരിപ്പിക്കുന്നു. ജൈവ മാലിന്യ സംസ്കരണം മുതൽ പുനരുപയോഗ ഊർജവും സോളാർ ഉൽപ്പന്നങ്ങളും വരെ, വിഭവങ്ങൾ ഉത്തരവാദിത്തത്തോടെ ഉപയോഗിക്കാൻ സഹായിക്കുന്ന പ്രായോഗിക മാർഗങ്ങളിലാണ് ഞങ്ങളുടെ ശ്രദ്ധ.",
    introLink: "ഞങ്ങളുടെ ടീമുമായി സംസാരിക്കുക",
    highlightTag: "കൂടുതൽ പരിഗണനയുള്ള സമീപനം",
    highlightTitle: "ചെറിയ മാറ്റങ്ങൾ. മികച്ച സാധ്യതകൾ.",
    highlightText:
      "മാലിന്യം ശ്രദ്ധാപൂർവം കൈകാര്യം ചെയ്യുമ്പോൾ അത് വിഭവങ്ങളുടെ ഉത്തരവാദിത്തമുള്ള ഉപയോഗത്തിന്റെ ഭാഗമാകാം. നിങ്ങളുടെ ആവശ്യങ്ങളും സ്ഥലവും മാലിന്യത്തിന്റെ സ്വഭാവവും മനസ്സിലാക്കുന്നതിലാണ് അനുയോജ്യമായ പരിഹാരം ആരംഭിക്കുന്നത്.",
    highlightOne: "ജൈവ മാലിന്യം കൈകാര്യം ചെയ്യുക",
    highlightTwo: "പുനരുപയോഗ ഊർജ സാധ്യതകൾ",
    highlightThree: "വിഭവങ്ങൾ മികച്ച രീതിയിൽ ഉപയോഗിക്കുക",
    productsTag: "ഞങ്ങളുടെ ഉൽപ്പന്നങ്ങൾ",
    productsTitle: "സുസ്ഥിരമായ ദൈനംദിന ജീവിതത്തിനുള്ള പരിഹാരങ്ങൾ.",
    productsText:
      "വ്യത്യസ്ത മാലിന്യ സംസ്കരണ, സുസ്ഥിര സാങ്കേതിക ആവശ്യങ്ങൾക്കായുള്ള ഉൽപ്പന്നങ്ങൾ പരിചയപ്പെടുക.",
    productAction: "ഈ പരിഹാരത്തെക്കുറിച്ച് അന്വേഷിക്കുക",
    productNames: [
      "റിംഗ് കമ്പോസ്റ്റ് സംവിധാനങ്ങൾ",
      "ബയോഗ്യാസ് പ്ലാന്റുകൾ",
      "ഇൻസിനറേറ്ററുകൾ",
      "വേസ്റ്റ് ബേർണറുകൾ",
      "സോളാർ പാനലുകൾ",
    ],
    productDescriptions: [
      "ദൈനംദിന ജൈവ മാലിന്യം ഉറവിടത്തിൽ തന്നെ കൈകാര്യം ചെയ്യുന്നതിനുള്ള പ്രായോഗിക മാർഗം.",
      "അനുയോജ്യമായ ജൈവ മാലിന്യം ഉപയോഗിച്ച് ബയോഗ്യാസ് ഉൽപ്പാദിപ്പിക്കുന്നതിനുള്ള പരിഹാരങ്ങൾ.",
      "നിശ്ചിത മാലിന്യ സംസ്കരണ ആവശ്യങ്ങൾക്കായുള്ള താപ സംസ്കരണ ഉപകരണങ്ങൾ.",
      "പ്രത്യേക മാലിന്യ കൈകാര്യം ചെയ്യൽ ആവശ്യങ്ങൾക്കുള്ള ഉപകരണങ്ങൾ.",
      "കൂടുതൽ ശുദ്ധമായ ഊർജ സാധ്യതകൾക്കായുള്ള സോളാർ ഉൽപ്പന്നങ്ങൾ.",
    ],
    learnTag: "ആരംഭിക്കാനുള്ള ലളിതമായ വഴി",
    learnTitle: "നിങ്ങളുടെ ആവശ്യങ്ങൾ മനസ്സിലാക്കുന്നതിലാണ് ശരിയായ പരിഹാരം ആരംഭിക്കുന്നത്.",
    learnText:
      "മാലിന്യത്തിന്റെ തരം, ലഭ്യമായ സ്ഥലം, ദിവസേനയുള്ള അളവ് എന്നിവ പ്രധാനമാണ്. ശരിയായ ചർച്ചയിലൂടെ അനുയോജ്യമായ സാങ്കേതികവിദ്യ കണ്ടെത്താൻ കഴിയും.",
    steps: [
      ["01", "ആവശ്യം അറിയിക്കുക", "നിങ്ങളുടെ സ്ഥലം, ഉപയോഗം, മാലിന്യത്തിന്റെ തരം എന്നിവ പങ്കുവെക്കുക."],
      ["02", "പരിഹാരങ്ങൾ പരിചയപ്പെടുക", "നിങ്ങളുടെ ആവശ്യങ്ങൾക്ക് അനുയോജ്യമായ സാധ്യതകൾ മനസ്സിലാക്കുക."],
      ["03", "വിശദാംശങ്ങൾ ചർച്ച ചെയ്യുക", "ഉൽപ്പന്നത്തിന്റെ അനുയോജ്യതയും അടുത്ത ഘട്ടങ്ങളും സംസാരിക്കുക."],
    ],
    whyTag: "എന്തുകൊണ്ട് BIOTIC TECHNOLOGY",
    whyTitle: "ഹരിതമായ ഭാവിക്കായുള്ള പ്രായോഗിക സമീപനം.",
    whyText:
      "സുസ്ഥിര പരിഹാരങ്ങൾ ദൈനംദിന ജീവിതത്തിന് അനുയോജ്യമായിരിക്കണം. യഥാർത്ഥ ആവശ്യങ്ങൾ മനസ്സിലാക്കി അനുയോജ്യമായ സാങ്കേതികവിദ്യ കണ്ടെത്തുന്നതിലാണ് ഞങ്ങളുടെ ശ്രദ്ധ.",
    reasons: [
      ["വിവിധ പരിഹാരങ്ങൾ", "ജൈവ മാലിന്യ സംസ്കരണം, മാലിന്യ സംസ്കരണം, പുനരുപയോഗ ഊർജം എന്നിവയ്ക്കുള്ള ഉൽപ്പന്നങ്ങൾ."],
      ["ആവശ്യകേന്ദ്രിത സമീപനം", "പരിഹാരം തിരഞ്ഞെടുക്കുന്നതിന് മുമ്പ് സ്ഥലവും മാലിന്യത്തിന്റെ സ്വഭാവവും ആവശ്യങ്ങളും പരിഗണിക്കുക."],
      ["നേരിട്ടുള്ള ആശയവിനിമയം", "നിങ്ങളുടെ ആവശ്യങ്ങൾ ഞങ്ങളുടെ ടീമുമായി ചർച്ച ചെയ്യുക."],
    ],
    sectorsTag: "വ്യത്യസ്ത മേഖലകൾക്കുള്ള പരിഹാരങ്ങൾ",
    sectorsTitle: "ഓരോ സ്ഥലത്തിന്റെയും ആവശ്യങ്ങൾക്കനുസരിച്ച്.",
    sectors: [
      ["വീടുകളും തോട്ടങ്ങളും", "ദൈനംദിന ജൈവ മാലിന്യം കൈകാര്യം ചെയ്യാനുള്ള മാർഗങ്ങൾ."],
      ["അപ്പാർട്ട്മെന്റുകളും സമൂഹങ്ങളും", "പൊതു താമസസ്ഥലങ്ങൾക്കായുള്ള മാലിന്യ സംസ്കരണ മാർഗങ്ങൾ."],
      ["സ്ഥാപനങ്ങളും ക്യാമ്പസുകളും", "വിദ്യാഭ്യാസ, സാമൂഹിക സ്ഥാപനങ്ങൾക്കുള്ള പരിഹാരങ്ങൾ."],
      ["വാണിജ്യ മേഖലകളും മറ്റും", "പ്രത്യേക പ്രവർത്തന ആവശ്യങ്ങൾക്കുള്ള സാങ്കേതികവിദ്യ."],
    ],
    faqTag: "അറിയേണ്ട കാര്യങ്ങൾ",
    faqTitle: "പതിവായി ചോദിക്കുന്ന ചോദ്യങ്ങൾ.",
    faqs: [
      ["BIOTIC TECHNOLOGY എന്തെല്ലാം പരിഹാരങ്ങൾ നൽകുന്നു?", "റിംഗ് കമ്പോസ്റ്റ് സംവിധാനങ്ങൾ, ബയോഗ്യാസ് പ്ലാന്റുകൾ, ഇൻസിനറേറ്ററുകൾ, വേസ്റ്റ് ബേർണറുകൾ, സോളാർ പാനലുകൾ എന്നിവ ഞങ്ങളുടെ ഉൽപ്പന്ന ശ്രേണിയിൽ ഉൾപ്പെടുന്നു."],
      ["ശരിയായ മാലിന്യ സംസ്കരണ പരിഹാരം എങ്ങനെ തിരഞ്ഞെടുക്കാം?", "മാലിന്യത്തിന്റെ തരം, ദിവസേനയുള്ള അളവ്, ലഭ്യമായ സ്ഥലം, ഉപയോഗം എന്നിവയെ ആശ്രയിച്ചിരിക്കും അനുയോജ്യമായ പരിഹാരം. ഈ വിവരങ്ങൾ ഞങ്ങളുമായി പങ്കുവെക്കുക."],
      ["സ്ഥാപനങ്ങൾക്കും സമൂഹങ്ങൾക്കും വേണ്ടി അന്വേഷിക്കാമോ?", "തീർച്ചയായും. നിങ്ങളുടെ സ്ഥാപനം, സമൂഹം, സ്ഥലം, ആവശ്യങ്ങൾ എന്നിവ ഞങ്ങളുമായി പങ്കുവെക്കാം."],
      ["BIOTIC TECHNOLOGY-യെ എങ്ങനെ ബന്ധപ്പെടാം?", "biotictechnologies11@gmail.com എന്ന ഇമെയിലിലോ ഈ പേജിൽ നൽകിയിരിക്കുന്ന ഫോൺ നമ്പറുകളിലോ ബന്ധപ്പെടാം."],
    ],
    ctaTag: "മികച്ചൊരു തിരഞ്ഞെടുപ്പിലേക്ക്",
    ctaTitle: "ഉത്തരവാദിത്തമുള്ള മാലിന്യ സംസ്കരണത്തിലേക്കുള്ള അടുത്ത ചുവട്.",
    ctaText:
      "നിങ്ങളുടെ ആവശ്യത്തെക്കുറിച്ച് ഞങ്ങളോട് പറയൂ. ലഭ്യമായ പരിഹാരങ്ങൾ പരിചയപ്പെടുത്താൻ ഞങ്ങൾ സന്തോഷിക്കുന്നു.",
    ctaButton: "സംസാരിക്കാം",
    contactTag: "ബന്ധപ്പെടുക",
    contactTitle: "നിങ്ങളുടെ ആവശ്യത്തെക്കുറിച്ച് സംസാരിക്കാം.",
    contactText:
      "വീടിനോ സമൂഹത്തിനോ സ്ഥാപനത്തിനോ വേണ്ടിയുള്ള ഉൽപ്പന്നമാണെങ്കിലും ഞങ്ങളുടെ ടീമിനെ ബന്ധപ്പെടാം.",
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
    backTop: "മുകളിലേക്ക് ↑",
  },
};


const products = [
  {
    number: "01",
    category: "ORGANIC WASTE",
    image: "/images/ring-compost.jpeg",
    alt: "Ring compost system",
  },
  {
    number: "02",
    category: "RENEWABLE ENERGY",
    image: "/images/biogas.jpeg",
    alt: "Biogas plant",
  },
  {
    number: "03",
    category: "WASTE TREATMENT",
    image: "/images/incinerator.jpeg",
    alt: "Waste treatment incinerator",
  },
  {
    number: "04",
    category: "WASTE MANAGEMENT",
    image: "/images/waste-burner.jpeg",
    alt: "Waste management burner",
  },
  {
    number: "05",
    category: "SOLAR ENERGY",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1100&q=85",
    alt: "Solar panels under a clear sky",
  },
];


const faqs = [0, 1, 2, 3];

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const t = copy[language];

  const navIds = ["home", "about", "solutions", "why-biotic", "faqs", "contact"];

  return (
    <main className={language === "ml" ? "site ml-site" : "site"}>
      <div className="top-strip">
        <span className="top-dot" />
        <span>{t.top}</span>
        <span className="top-location">KERALA, INDIA</span>
      </div>

      <header className="header">
        

<a className="brand" href="#home" aria-label="BIOTIC TECHNOLOGY">
  <Image
    src="/images/biotic-logo.jpeg"
    alt="BIOTIC logo symbol"
    width={60}
    height={60}
    className="company-logo"
    priority
  />
  <span className="brand-name">
    <strong>BIOTIC</strong>
    <small>TECHNOLOGY</small>
  </span>
</a>



        <button
          className="mobile-menu"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
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
              className={language === "en" ? "selected" : ""}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
            <span />
            <button
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

      <section className="hero" id="home">
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
          <span>BIOTIC TECHNOLOGY · KERALA</span>
          <span className="hero-bottom-center">{t.heroNote}</span>
          <a href="#about">DISCOVER MORE ↓</a>
        </div>
        <span className="hero-decoration">01</span>
      </section>

      <section className="intro section-wrap" id="about">
        <div className="intro-label">
          <div className="eyebrow eyebrow-dark">
            <span /> {t.introTag}
          </div>
          <span className="small-index">01 / ABOUT</span>
        </div>
        <div className="intro-grid">
          <h2>{t.introTitle}</h2>
          <div className="intro-copy">
            <p>{t.introText}</p>
            <a className="under-link" href="#contact">
              {t.introLink} <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="highlight">
        <div className="highlight-image">
          <img
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1500&q=85"
            alt="Hands caring for plants in rich soil"
            loading="lazy"
          />
          <div className="highlight-image-caption">CARE FOR THE PLANET, EVERY DAY</div>
        </div>
        <div className="highlight-copy">
          <div className="eyebrow eyebrow-light">
            <span /> {t.highlightTag}
          </div>
          <h2>{t.highlightTitle}</h2>
          <p>{t.highlightText}</p>
          <ul>
            <li><span>✓</span>{t.highlightOne}</li>
            <li><span>✓</span>{t.highlightTwo}</li>
            <li><span>✓</span>{t.highlightThree}</li>
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

        <div className="product-grid">
          {products.map((product, index) => (
            <article className={`product-card product-card-${index + 1}`} key={product.number}>
              <a
                href={`mailto:${email}?subject=${encodeURIComponent(`Enquiry - ${t.productNames[index]}`)}`}
                className="product-photo"
                aria-label={`${t.productNames[index]} enquiry`}
              >
                <img src={product.image} alt={product.alt} loading="lazy" />
                <span className="product-count">{product.number}</span>
                <span className="product-open">↗</span>
              </a>
              <div className="product-body">
                <span className="product-category">{product.category}</span>
                <h3>{t.productNames[index]}</h3>
                <p>{t.productDescriptions[index]}</p>
                <a
                  className="product-link"
                  href={`mailto:${email}?subject=${encodeURIComponent(`Enquiry - ${t.productNames[index]}`)}`}
                >
                  {t.productAction} <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="steps-section">
        <div className="section-wrap">
          <div className="steps-heading">
            <div>
              <div className="eyebrow eyebrow-light">
                <span /> {t.learnTag}
              </div>
              <h2>{t.learnTitle}</h2>
            </div>
            <p>{t.learnText}</p>
          </div>
          <div className="steps-grid">
            {t.steps.map((step) => (
              <article className="step-card" key={step[0]}>
                <span className="step-number">{step[0]}</span>
                <span className="step-leaf">✳</span>
                <h3>{step[1]}</h3>
                <p>{step[2]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="why section-wrap" id="why-biotic">
        <div className="why-image">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1300&q=85"
            alt="Sunlight falling through a lush green forest"
            loading="lazy"
          />
          <div className="why-image-note">
            <span>BT.</span>
            <small>THOUGHTFUL<br />BY NATURE</small>
          </div>
        </div>
        <div className="why-copy">
          <div className="eyebrow eyebrow-dark">
            <span /> {t.whyTag}
          </div>
          <h2>{t.whyTitle}</h2>
          <p className="why-description">{t.whyText}</p>
          <div className="reason-list">
            {t.reasons.map((reason, index) => (
              <div className="reason" key={reason[0]}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{reason[0]}</h3>
                  <p>{reason[1]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sectors section-wrap">
        <div className="section-heading">
          <div>
            <div className="eyebrow eyebrow-dark">
              <span /> {t.sectorsTag}
            </div>
            <h2>{t.sectorsTitle}</h2>
          </div>
        </div>
        <div className="sector-grid">
          {t.sectors.map((sector, index) => (
            <a className="sector-card" href="#contact" key={sector[0]}>
              <span>0{index + 1}</span>
              <h3>{sector[0]}</h3>
              <p>{sector[1]}</p>
              <b>↗</b>
            </a>
          ))}
        </div>
      </section>

      <section className="faq-section section-wrap" id="faqs">
        <div className="faq-intro">
          <div className="eyebrow eyebrow-dark">
            <span /> {t.faqTag}
          </div>
          <h2>{t.faqTitle}</h2>
          <p>Have another question? Our team is happy to help.</p>
          <a className="under-link" href={`mailto:${email}`}>
            Email BIOTIC <span>↗</span>
          </a>
        </div>
        <div className="faq-list">
          {faqs.map((index) => (
            <article className="faq-item" key={index}>
              <button
                className="faq-question"
                aria-expanded={activeFaq === index}
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              >
                <span>{t.faqs[index][0]}</span>
                <b>{activeFaq === index ? "−" : "+"}</b>
              </button>
              {activeFaq === index && (
                <div className="faq-answer">
                  <p>{t.faqs[index][1]}</p>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="contact-banner">
        <div className="contact-banner-image" />
        <div className="contact-banner-overlay" />
        <div className="contact-banner-content">
          <div className="eyebrow eyebrow-light">
            <span /> {t.ctaTag}
          </div>
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaText}</p>
          <a className="btn btn-primary" href="#contact">
            {t.ctaButton} <span>↗</span>
          </a>
        </div>
      </section>

      <section className="contact section-wrap" id="contact">
        <div className="contact-intro">
          <div className="eyebrow eyebrow-dark">
            <span /> {t.contactTag}
          </div>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactText}</p>
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
                <a key={phone} href={`tel:${phone}`}>{phone}</a>
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
          <a
            className="btn btn-dark"
            href={`mailto:${email}?subject=${encodeURIComponent("BIOTIC TECHNOLOGY - Enquiry")}`}
          >
            {t.ctaButton} <span>↗</span>
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <a className="brand footer-brand" href="#home">
            <span className="brand-icon">
              <span>B</span>
              <i />
            </span>
            <span className="brand-name">
              <strong>BIOTIC</strong>
              <small>TECHNOLOGY</small>
            </span>
          </a>
          <p>{t.footerText}</p>
          <a href="#home" className="back-top">{t.backTop}</a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} BIOTIC TECHNOLOGY. {t.rights}</span>
          <span>{t.footerPhrase}</span>
          <span>KERALA · INDIA</span>
        </div>
      </footer>
    </main>
  );
}
