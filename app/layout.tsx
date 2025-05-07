import '../app/ui/global.css';
import AcmeLogo from './ui/acme-logo';



// import { poppins } from './ui/fonts';
import { exo2 } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${exo2.className} antialiased`}>{children}</body>
      
    </html>
  );
}
