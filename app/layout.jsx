export const metadata = {
  title: 'Prajashni Portfolio',
  description: 'Portfolio of Prajashni – Data Analyst & Scientist',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
