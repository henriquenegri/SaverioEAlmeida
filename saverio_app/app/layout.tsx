import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Renato Saverio · Advocacia Criminal",
  description: "Atuação em Direito Penal e defesa criminal com ética, responsabilidade e atenção individualizada. Dr. Renato Saverio Souza Costa — OAB/SP 244.018.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
