import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CandleForm from "@/components/CandleForm";

export default function AcenderPage() {
  return (
    <main>
      <Header />
      <section className="px-6 pb-16">
        <CandleForm />
      </section>
      <Footer />
    </main>
  );
}
