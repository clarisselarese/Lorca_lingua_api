import { Cabin } from "next/font/google";
import "../styles/globals.scss";

const cabin = Cabin({ subsets: ['latin'] })





export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cabin.className}>
        {children}
      </body>
    </html>
  );
}
