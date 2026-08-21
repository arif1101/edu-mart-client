import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <Navbar />
      <main className="max-w-[1280px] mx-auto px-4 md:px-8 w-full flex-1 py-6">
        {children}
      </main>
      <Footer />
    </div>
  );
}
