
import type { Metadata } from "next";

const siteUrl = "https://biotictechnologies.in";

const productSEO: Record<
  string,
  { title: string; description: string }
> = {
  "ring-compost": {
    title: "Ring Compost System in Kerala",
    description:
      "Explore ring compost systems from BIOTIC TECHNOLOGIES in Kerala. Practical organic waste management using a two-tank composting system.",
  },

  "biogas-plant": {
    title: "Biogas Plants in Kerala",
    description:
      "Explore BIOTIC TECHNOLOGIES biogas plants in Kerala. Organic waste processing, renewable energy solutions and a 10-year warranty.",
  },

  incinerator: {
    title: "Incinerators in Kerala",
    description:
      "Explore incinerators from BIOTIC TECHNOLOGIES for suitable waste treatment applications in Kerala. Contact us for product and installation details.",
  },

  "waste-burner": {
    title: "Waste Burners in Kerala",
    description:
      "Explore waste burner equipment from BIOTIC TECHNOLOGIES in Kerala. Enquire about specifications, suitable applications and availability.",
  },

  "solar-systems": {
    title: "Solar Panel Systems in Kerala",
    description:
      "Explore complete solar panel systems from BIOTIC TECHNOLOGIES in Kerala. Contact our team for solar energy solutions and installation enquiries.",
  },
};

export function generateStaticParams() {
  return Object.keys(productSEO).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = productSEO[slug];

  if (!product) {
    return {
      title: "Product Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const url = `${siteUrl}/products/${slug}`;

  return {
    title: product.title,
    description: product.description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: `${product.title} | BIOTIC TECHNOLOGIES`,
      description: product.description,
      url,
      siteName: "BIOTIC TECHNOLOGIES",
      type: "website",
      locale: "en_IN",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
