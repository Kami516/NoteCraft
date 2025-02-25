import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { Toaster} from "sonner";
import { ModalProvider } from "@/components/providers/modal-provider";

export const metadata: Metadata = {
  title: "Notecraft",
  description: "Craft your thoughts. Connect your ideas. Create your knowledge system - all in one seamless workspace.",
};
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={inter.className}>
          <ConvexClientProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="notecraft-theme"
            >
              <Toaster position="bottom-center"/>
              <ModalProvider />
              {children}
            </ThemeProvider>
          </ConvexClientProvider>
      </body>
    </html>
  );
}
