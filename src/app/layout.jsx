import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartContext";
import CartSidebar from "@/components/CartSidebar";
import { SessionProvider } from "@/components/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Omoba Brand",
  description: "Exclusive preorder fashion items",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <CartProvider>
            {children}
            <CartSidebar />
          </CartProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
