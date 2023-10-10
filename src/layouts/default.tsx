import Footer from "@/components/footer";
import Navbar from "../components/navbar";

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Navbar />

      <main className="flex-grow w-full">{children}</main>

      <Footer />
    </div>
  );
}
