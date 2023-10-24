import '../styles/global.css';
export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="min-h-screen px-[env(safe-area-inset-top)]">
        <main>{children}</main>
      </body>
    </html>
  );
}
