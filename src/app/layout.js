import "./globals.css";

export const metadata = {
  title: "Best Friend by Wicky",
  description: "A special page dedicated to the best friend. Apologies and memories.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
