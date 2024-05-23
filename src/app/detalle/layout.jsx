import Nav from "../../../components/nav";

export default function Layout({ children }) {
  return (
    <section>
      <Nav></Nav>
      {children}
    </section>
  );
}
