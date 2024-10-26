import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nSquare.dev | Custom Website Solutions for Your Business",
  description:
    "nSquare.dev specializes in creating custom websites tailored to your business needs. Let us help you stand out with modern, responsive designs that boost engagement and grow your online presence.",
  keywords:
    "custom websites, business websites, website development, software development, NSquare Development, responsive web design, web development services",
  openGraph: {
    title: "nSquare.dev | Custom Website Solutions for Your Business",
    description:
      "At nSquare.dev, we create tailored websites that align with your business goals, using the latest technologies to ensure a seamless user experience.",
    url: "https://nsquare.dev",
    type: "website",
    images: [
      {
        url: "https://nsquare.dev/assets/preview-image.jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${inter.className} antialiased text-black dark:text-white`}
      >
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
