import Nav from "../../../components/nav";
import './[detalle]/layout.css';

export default function Layout({ children }) {
  return (
    <section className="container-nav">
      {/* <Nav></Nav> */}
      {children}
    </section>
  );
}
