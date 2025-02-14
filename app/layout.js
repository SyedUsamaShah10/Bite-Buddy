import MainHeader from "@/components/main-header/main-header";
import "./globals.css";

export const metadata = {
  title: "Bite Buddy",
  description: "Share and discover delicious meals with fellow food lovers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
