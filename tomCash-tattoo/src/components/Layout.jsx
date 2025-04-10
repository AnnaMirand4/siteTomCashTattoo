import Navbar from "./Navbar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Header />
      <main>{children}</main> {/* Conteúdo principal com margin-top */}
    </>
  );
};

export default Layout;