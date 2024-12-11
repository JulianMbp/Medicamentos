import Image from "next/image";
import Link from "next/link";

import Header from "@/app/sections/header";
import Welcome from "@/app/sections/welcome";



export default function SearchMed() {
   return (
    <main className="w-screen h-screen bg-p-olivine-100 font-sans">
      <Header />
      <Welcome />
    </main>
    );
}
