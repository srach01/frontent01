import Link from "next/link";
import Carousel from "./components/Carousel";
import Card from "./components/Card";
import Footer from "@/app/components/footer"

export default function Home() {
  return (
    <>
    <Carousel />
    <Card />
    <Footer />
    </>
  );
}
