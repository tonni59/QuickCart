import { Outfit } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";

// Corrected: Use only supported weights from Google Fonts
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"], // These are valid weights for Outfit
  display: "swap", // Optional but recommended for better performance
});

export const metadata = {
  title: "TONNICart - CSEStack",
  description: "E-Commerce with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${outfit.className} antialiased text-gray-700`}>
          <Toaster position="top-right" />
          <AppContextProvider>
            {children}
          </AppContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
