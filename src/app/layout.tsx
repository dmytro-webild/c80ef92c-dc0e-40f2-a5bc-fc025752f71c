import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Roboto } from "next/font/google";



export const metadata: Metadata = {
  title: 'Island Coffee & Hobbies - Bekasi\'s Unique Family Spot',
  description: 'Discover Island Coffee & Hobbies in Bekasi: a family-friendly cafe blending aesthetic coffee with exciting Tamiya racing and hobby activities. Your perfect healing spot!',
  keywords: ["Island Coffee Hobbies, Bekasi cafe, family friendly cafe, Tamiya track, hobby shop, unique cafe, coffee shop, Bekasi healing spot, kid friendly cafe, aesthetic cafe"],
  openGraph: {
    "title": "Island Coffee & Hobbies - Bekasi's Unique Family Spot",
    "description": "Discover Island Coffee & Hobbies in Bekasi: a family-friendly cafe blending aesthetic coffee with exciting Tamiya racing and hobby activities. Your perfect healing spot!",
    "url": "https://www.islandcoffeehobbies.com",
    "siteName": "Island Coffee & Hobbies",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/top-view-female-hands-making-notes-coffee-dessert-break_1098-20190.jpg",
        "alt": "Island Coffee & Hobbies Cafe"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Island Coffee & Hobbies - Bekasi's Unique Family Spot",
    "description": "Discover Island Coffee & Hobbies in Bekasi: a family-friendly cafe blending aesthetic coffee with exciting Tamiya racing and hobby activities. Your perfect healing spot!",
    "images": [
      "http://img.b2bpic.net/free-photo/top-view-female-hands-making-notes-coffee-dessert-break_1098-20190.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${roboto.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
