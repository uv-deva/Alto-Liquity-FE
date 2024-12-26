import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Alto | Earn",
  description: "Earn",
};

export interface EarnProps {
  children: React.ReactNode;
}

const ExploreLayout: React.FC<EarnProps> = ({ children }) => {
  return <Suspense fallback="Loading...">{children}</Suspense>;
};

export default ExploreLayout;
