import Image from "next/image";
import logo from "@/images/logo.png"
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <section>
        <div>
          <Image src={logo} height={250} alt="Logo"/>
          <Button asChild className="px-20 bg-purple-700 p-10 text-xl">
            <Link href='/stories'>Explore Story Library</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
