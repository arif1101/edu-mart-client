import Navbar from "@/components/shared/Navbar";

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto container">
      <Navbar />
      {children}
    </div>
  );
}
