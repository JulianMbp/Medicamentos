import Image from "next/image";
import ThemeSwitch from "./components/Theme.Switch";
import Link from "next/link";
import Header from "./sections/header";
import Welcome from "./sections/welcome";
import EPS from "./(general)/EPS/page";




export default function Home() {
   return (
    <main className="w-screen h-screen bg-p-olivine-100 font-sans">
      <Header />
      <EPS/>
    </main>


    
    );
}
