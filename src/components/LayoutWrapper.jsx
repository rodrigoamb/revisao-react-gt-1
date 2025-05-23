import Footer from "./Footer";
import Header from "./Header";

export default function LayoutWrapper({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
