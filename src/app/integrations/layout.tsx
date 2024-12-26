import { Metadata } from "next";
import { Children, Suspense } from "react";

const metadata: Metadata = {
  title: "Alto | Integrations",
  description: "Alto integrations Data",
};

export interface IntegrationsLayoutProps {
  children: React.ReactNode;
}

const IntegrationsLayout: React.FC<IntegrationsLayoutProps> = ({
  children,
}) => {
  return <Suspense fallback="Laoding.....">{children}</Suspense>;
};

export default IntegrationsLayout;
