
export const metadata = {
  title: "Rinora BioClean – Replace plastic with natural loofah fibers",
  description: "Skincare, Homecare and Industrial eco products using biodegradable loofah fibers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-emerald-50 via-white to-white text-slate-800">
        {children}
      </body>
    </html>
  );
}
