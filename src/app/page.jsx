import Image from "next/image";
import styles from "./page.module.css";
import Header from "../../components/header";
import Table from "../../components/tabla";
export default function Home() {
  return (
    <>
      <Header></Header>
      <Table></Table>
    </>
  );
}
