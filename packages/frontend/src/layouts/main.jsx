import { Header } from "../components/header";
import { Footer } from "../components/footer";

export default function Main({ children }) {
  return (
  <>
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col h-full">{children}</main>
      <Footer />
    </div>
  </>
  );
}
