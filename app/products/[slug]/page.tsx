"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

type Language = "en" | "ml";

const email = "biotictechnologies11@gmail.com";
const phone = "+917902636232";
const whatsappNumber = "917902636232";

const productDetails = [
  {
    slug: "ring-compost",
    image: "/images/ring-compost.jpeg",
    category: "ORGANIC WASTE MANAGEMENT",
    title: "Ring Compost System",
    malayalamTitle: "റിംഗ് കമ്പോസ്റ്റ് സംവിധാനം",
    description:
      "A practical system designed to help manage everyday organic waste at its source and convert it into useful organic manure. The system uses two scientific tanks and bacterial culture as part of the composting process.",
    malayalamDescription:
      "ദൈനംദിന ജൈവ മാലിന്യം ഉറവിടത്തിൽ തന്നെ കൈകാര്യം ചെയ്ത് ജൈവവളമാക്കി മാറ്റാൻ സഹായിക്കുന്ന പ്രായോഗിക സംവിധാനം. കമ്പോസ്റ്റിംഗ് പ്രക്രിയയുടെ ഭാഗമായി രണ്ട് പ്രത്യേക ടാങ്കുകളും ബാക്ടീരിയൽ കൾച്ചറും ഉപയോഗിക്കുന്നു.",
    features: [
      "Two-tank system",
      "Bacterial culture included in the process",
      "Suitable for everyday organic waste such as food leftovers, rice, vegetables and fruits",
      "Designed for compact and practical installation",
      "Portable and easy to install and use"
    ],
    malayalamFeatures: [
      "രണ്ട് ടാങ്കുകളുള്ള സംവിധാനം",
      "പ്രക്രിയയുടെ ഭാഗമായി ബാക്ടീരിയൽ കൾച്ചർ",
      "ഭക്ഷണാവശിഷ്ടങ്ങൾ, അരി, പച്ചക്കറികൾ, പഴങ്ങൾ തുടങ്ങിയ ജൈവ മാലിന്യങ്ങൾക്ക് അനുയോജ്യം",
      "കുറഞ്ഞ സ്ഥലത്ത് സ്ഥാപിക്കാവുന്ന രൂപകൽപ്പന",
      "കൊണ്ടുപോകാനും സ്ഥാപിക്കാനും ഉപയോഗിക്കാനും എളുപ്പമുള്ളതായി പരസ്യപ്പെടുത്തിയിരിക്കുന്നു"
    ],
    note: "Contact our team to discuss the suitable model and installation requirements.",
    malayalamNote:
      "അനുയോജ്യമായ മോഡലും സ്ഥാപിക്കൽ ആവശ്യങ്ങളും അറിയാൻ ഞങ്ങളുടെ ടീമിനെ ബന്ധപ്പെടുക."
  },
  {
    slug: "biogas-plant",
    image: "/images/biogas.jpeg",
    category: "RENEWABLE ENERGY",
    title: "Biogas Plant",
    malayalamTitle: "ബയോഗ്യാസ് പ്ലാന്റ്",
    description:
      "A biogas solution that uses suitable organic solid waste to generate gas for everyday energy applications. Contact our team to discuss whether the system is suitable for your location and requirements.",
    malayalamDescription:
      "അനുയോജ്യമായ ജൈവ ഖരമാലിന്യം ഉപയോഗിച്ച് ദൈനംദിന ഊർജ ആവശ്യങ്ങൾക്കായി ഗ്യാസ് ഉൽപ്പാദിപ്പിക്കുന്ന ബയോഗ്യാസ് സംവിധാനം. നിങ്ങളുടെ സ്ഥലത്തിനും ആവശ്യങ്ങൾക്കും ഈ സംവിധാനം അനുയോജ്യമാണോ എന്ന് അറിയാൻ ഞങ്ങളുടെ ടീമിനെ ബന്ധപ്പെടുക.",
    features: [
      "Solid waste processing capacity: 4 kg per day",
      "Water requirement: 4 litres",
      "Daily gas generation/use: approximately 1–2 hours",
      "Space requirement: approximately 10 sq. ft.",
      "10-year warranty"
    ],
    malayalamFeatures: [
      "ഖരമാലിന്യ സംസ്കരണ ശേഷി: പ്രതിദിനം 4 കിലോ",
      "ജലാവശ്യം: 4 ലിറ്റർ",
      "പ്രതിദിന ഗ്യാസ് ഉൽപ്പാദനം/ഉപയോഗം: ഏകദേശം 1–2 മണിക്കൂർ",
      "സ്ഥലാവശ്യം: ഏകദേശം 10 ചതുരശ്ര അടി",
      "10 വർഷത്തെ വാറന്റി"
    ],
    note: "Specifications and suitability should be confirmed with our team before purchase.",
    malayalamNote:
      "വാങ്ങുന്നതിന് മുമ്പ് സാങ്കേതിക വിവരങ്ങളും അനുയോജ്യതയും ഞങ്ങളുടെ ടീമുമായി സ്ഥിരീകരിക്കുക."
  },
  {
    slug: "incinerator",
    image: "/images/incinerator.jpeg",
    category: "WASTE TREATMENT",
    title: "Incinerator",
    malayalamTitle: "ഇൻസിനറേറ്റർ",
    description:
      "A metal-bodied incinerator with a chimney, intended for specific waste treatment applications. It may be considered for settings such as homes, schools, hostels, hospitals and apartments, subject to local requirements and suitability.",
    malayalamDescription:
      "ചിമ്മിനിയോടുകൂടിയ മെറ്റൽ ബോഡിയുള്ള ഇൻസിനറേറ്റർ. വീടുകൾ, സ്കൂളുകൾ, ഹോസ്റ്റലുകൾ, ആശുപത്രികൾ, അപ്പാർട്ട്മെന്റുകൾ തുടങ്ങിയ ഇടങ്ങളിലെ നിർദ്ദിഷ്ട മാലിന്യ സംസ്കരണ ആവശ്യങ്ങൾക്കായി പരിഗണിക്കാവുന്നതാണ്. പ്രാദേശിക ചട്ടങ്ങളും അനുയോജ്യതയും പരിശോധിക്കണം.",
    features: [
      "Metal body with chimney",
      "For specified applications involving sanitary pads, diapers and medical waste",
      "Applications may include homes, schools, hostels, hospitals and apartments",
      "1-year warranty"
    ],
    malayalamFeatures: [
      "ചിമ്മിനിയോടുകൂടിയ മെറ്റൽ ബോഡി",
      "സാനിറ്ററി പാഡുകൾ, ഡയപ്പറുകൾ, മെഡിക്കൽ മാലിന്യം എന്നിവയുടെ നിർദ്ദിഷ്ട സംസ്കരണ ആവശ്യങ്ങൾക്ക്",
      "വീടുകൾ, സ്കൂളുകൾ, ഹോസ്റ്റലുകൾ, ആശുപത്രികൾ, അപ്പാർട്ട്മെന്റുകൾ എന്നിവിടങ്ങളിൽ ഉപയോഗം പരിഗണിക്കാം",
      "1 വർഷത്തെ വാറന്റി"
    ],
    note: "Please contact us to confirm permitted waste types, installation requirements and local compliance.",
    malayalamNote:
      "അനുവദനീയമായ മാലിന്യങ്ങൾ, സ്ഥാപിക്കൽ ആവശ്യങ്ങൾ, പ്രാദേശിക ചട്ടങ്ങൾ എന്നിവ സ്ഥിരീകരിക്കാൻ ഞങ്ങളെ ബന്ധപ്പെടുക."
  },
  {
    slug: "waste-burner",
    image: "/images/waste-burner.jpeg",
    category: "WASTE MANAGEMENT",
    title: "Waste Burner",
    malayalamTitle: "വേസ്റ്റ് ബേർണർ",
    description:
      "BIOTIC TECHNOLOGY offers waste burner equipment for customers exploring waste handling options. The appropriate model and application depend on the specific waste type, site conditions and operating requirements.",
    malayalamDescription:
      "മാലിന്യം കൈകാര്യം ചെയ്യുന്നതിനുള്ള വിവിധ മാർഗങ്ങൾ അന്വേഷിക്കുന്ന ഉപഭോക്താക്കൾക്കായി BIOTIC TECHNOLOGY വേസ്റ്റ് ബേർണർ ഉപകരണങ്ങൾ നൽകുന്നു. അനുയോജ്യമായ മോഡലും ഉപയോഗവും മാലിന്യത്തിന്റെ തരം, സ്ഥലസാഹചര്യങ്ങൾ, പ്രവർത്തന ആവശ്യങ്ങൾ എന്നിവയെ ആശ്രയിച്ചിരിക്കും.",
    features: [
      "Product details can be discussed with our team",
      "Share the type of waste and intended application",
      "Ask our team about available models and specifications"
    ],
    malayalamFeatures: [
      "ഉൽപ്പന്ന വിശദാംശങ്ങൾ ഞങ്ങളുടെ ടീമുമായി ചർച്ച ചെയ്യാം",
      "മാലിന്യത്തിന്റെ തരവും ഉദ്ദേശിക്കുന്ന ഉപയോഗവും പങ്കുവെക്കുക",
      "ലഭ്യമായ മോഡലുകളും സാങ്കേതിക വിവരങ്ങളും ഞങ്ങളുടെ ടീമിനോട് ചോദിക്കുക"
    ],
    note: "Contact us for confirmed specifications, suitable applications and product availability.",
    malayalamNote:
      "സ്ഥിരീകരിച്ച സാങ്കേതിക വിവരങ്ങൾ, അനുയോജ്യമായ ഉപയോഗങ്ങൾ, ലഭ്യത എന്നിവയ്ക്കായി ഞങ്ങളെ ബന്ധപ്പെടുക."
  },
  {
    slug: "solar-systems",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=90",
    category: "SOLAR ENERGY",
    title: "Complete Solar Panel Systems",
    malayalamTitle: "പൂർണ്ണ സോളാർ പാനൽ സംവിധാനങ്ങൾ",
    description:
      "BIOTIC TECHNOLOGY provides complete solar panel systems for customers exploring solar energy solutions. Contact our team to discuss your energy requirements and the system options available for your property.",
    malayalamDescription:
      "സോളാർ ഊർജ പരിഹാരങ്ങൾ അന്വേഷിക്കുന്ന ഉപഭോക്താക്കൾക്കായി BIOTIC TECHNOLOGY പൂർണ്ണ സോളാർ പാനൽ സംവിധാനങ്ങൾ നൽകുന്നു. നിങ്ങളുടെ ഊർജ ആവശ്യങ്ങളും സ്ഥലത്തിന് അനുയോജ്യമായ സംവിധാനങ്ങളും ചർച്ച ചെയ്യാൻ ഞങ്ങളുടെ ടീമിനെ ബന്ധപ്പെടുക.",
    features: [
      "Complete solar panel system solutions",
      "Discuss your energy requirements with our team",
      "Ask about available system options and specifications",
      "System selection depends on your property and energy needs"
    ],
    malayalamFeatures: [
      "പൂർണ്ണ സോളാർ പാനൽ സംവിധാനങ്ങൾ",
      "നിങ്ങളുടെ ഊർജ ആവശ്യങ്ങൾ ഞങ്ങളുടെ ടീമുമായി ചർച്ച ചെയ്യുക",
      "ലഭ്യമായ സംവിധാനങ്ങളും സാങ്കേതിക വിവരങ്ങളും ചോദിച്ചറിയുക",
      "നിങ്ങളുടെ സ്ഥലവും ഊർജ ആവശ്യങ്ങളും അനുസരിച്ചാണ് സംവിധാനം തിരഞ്ഞെടുക്കേണ്ടത്"
    ],
    note: "Contact us to discuss system sizing, specifications and installation requirements.",
    malayalamNote:
      "സിസ്റ്റത്തിന്റെ വലുപ്പം, സാങ്കേതിക വിവരങ്ങൾ, സ്ഥാപിക്കൽ ആവശ്യങ്ങൾ എന്നിവ ചർച്ച ചെയ്യാൻ ഞങ്ങളെ ബന്ധപ്പെടുക."
  }
];

export default function ProductDetailPage() {
  const params = useParams<{ slug: string }>();
  const [language, setLanguage] = useState<Language>("en");

  const product = productDetails.find((item) => item.slug === params.slug);

  if (!product) {
    return (
      <main className="product-detail-page">
        <div className="product-not-found">
          <h1>Product not found</h1>
          <p>The product page you are looking for is unavailable.</p>
          <Link href="/">Return to homepage</Link>
        </div>
      </main>
    );
  }

  const title =
    language === "en" ? product.title : product.malayalamTitle;

  const description =
    language === "en"
      ? product.description
      : product.malayalamDescription;

  const features =
    language === "en"
      ? product.features
      : product.malayalamFeatures;

  const note =
    language === "en" ? product.note : product.malayalamNote;

  const whatsappMessage =
    language === "en"
      ? `Hello BIOTIC TECHNOLOGY, I would like to enquire about the ${product.title}. Please share more details.`
      : `നമസ്കാരം BIOTIC TECHNOLOGY, ${product.malayalamTitle} സംബന്ധിച്ച് കൂടുതൽ വിവരങ്ങൾ അറിയാൻ ആഗ്രഹിക്കുന്നു. ദയവായി വിശദാംശങ്ങൾ പങ്കുവെക്കുക.`;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <main className="product-detail-page">
      <div className="product-detail-topbar">
        <Link href="/" className="detail-brand">
          <img
            src="/images/biotic-logo.jpeg"
            alt="BIOTIC TECHNOLOGY"
          />
          <span>
            <strong>BIOTIC</strong>
            <small>TECHNOLOGY</small>
          </span>
        </Link>

        <div className="detail-header-actions">
          <div className="detail-language">
            <button
              type="button"
              className={language === "en" ? "active" : ""}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
            <span />
            <button
              type="button"
              className={language === "ml" ? "active" : ""}
              onClick={() => setLanguage("ml")}
            >
              മലയാളം
            </button>
          </div>

          <Link href="/" className="detail-home-link">
            {language === "en" ? "Home" : "ഹോം"} ↗
          </Link>
        </div>
      </div>

      <div className="product-detail-main">
        <Link href="/#solutions" className="detail-back-link">
          ← {language === "en" ? "Back to all products" : "എല്ലാ ഉൽപ്പന്നങ്ങളിലേക്കും മടങ്ങുക"}
        </Link>

        <section className="product-detail-hero">
          <div className="product-detail-image-wrap">
            <img
              src={product.image}
              alt={product.title}
              className="product-detail-image"
            />
            <span className="detail-image-caption">
              BIOTIC TECHNOLOGY
            </span>
          </div>

          <div className="product-detail-content">
            <div className="detail-eyebrow">
              <span />
              {language === "en"
                ? product.category
                : "BIOTIC TECHNOLOGY"}
            </div>

            <h1>{title}</h1>
            <p className="detail-description">{description}</p>

            <div className="detail-feature-heading">
              {language === "en" ? "PRODUCT DETAILS" : "ഉൽപ്പന്ന വിശദാംശങ്ങൾ"}
            </div>

            <ul className="detail-feature-list">
              {features.map((feature, index) => (
                <li key={index}>
                  <span>✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="detail-note">
              <span>✳</span>
              <p>{note}</p>
            </div>

            <div className="detail-enquiry-heading">
              {language === "en"
                ? "Interested in this product?"
                : "ഈ ഉൽപ്പന്നത്തിൽ താൽപ്പര്യമുണ്ടോ?"}
            </div>

            <p className="detail-enquiry-text">
              {language === "en"
                ? "Talk to our team for product information and enquiries."
                : "ഉൽപ്പന്ന വിവരങ്ങൾക്കും അന്വേഷണങ്ങൾക്കും ഞങ്ങളുടെ ടീമുമായി സംസാരിക്കുക."}
            </p>

            <div className="detail-actions">
              <a
                href={whatsappLink}
                className="detail-btn detail-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>↗</span>
                {language === "en" ? "Enquire on WhatsApp" : "വാട്സ്ആപ്പിൽ അന്വേഷിക്കുക"}
              </a>

              <a href={`tel:${phone}`} className="detail-btn detail-call">
                <span>☎</span>
                {language === "en" ? "Call us" : "വിളിക്കുക"}
              </a>

              <a
                href={`mailto:${email}?subject=${encodeURIComponent(
                  `Product enquiry - ${product.title}`
                )}`}
                className="detail-btn detail-email"
              >
                <span>✉</span>
                {language === "en" ? "Email us" : "ഇമെയിൽ ചെയ്യുക"}
              </a>
            </div>
          </div>
        </section>
      </div>

      <footer className="product-detail-footer">
        <Link href="/" className="detail-footer-brand">
          BIOTIC TECHNOLOGY
        </Link>
        <span>KERALA · INDIA</span>
        <span>© 2026 BIOTIC TECHNOLOGY</span>
      </footer>

      <div className="detail-mobile-contact">
        <a href={`tel:${phone}`}>☎ {language === "en" ? "Call" : "വിളിക്കുക"}</a>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          ↗ WhatsApp
        </a>
      </div>
    </main>
  );
}