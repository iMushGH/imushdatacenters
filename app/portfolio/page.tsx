import type { Metadata } from "next";
import PortfolioClient from "./ClientPortfolio";

export const metadata: Metadata = {
  title: "Portfolio | iMush Data Center",
  description:
    "See examples of CCTV, networking and IT installations by iMush Data Center.",
  openGraph: {
    title: "Portfolio | iMush Data Center",
    description:
      "See examples of CCTV, networking and IT installations by iMush Data Center.",
    url: "https://imushdatacenter.com/portfolio",
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
