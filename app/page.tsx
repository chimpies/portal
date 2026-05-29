import Image from "next/image";
import LinkItem from "@/components/LinkItem";

const links = [
  {
    title: "Website",
    href: "https://irukandji.wtf/",
  },
  {
    title: "X",
    href: "https://x.com/irukandjinfts/",
  },
  {
    title: "Discord",
    href: "https://discord.gg/q9DdaAGmDk"
  },
  {
    title: "OpenSea",
    href: "https://opensea.io/collection/irukandji/",
  },
  {
    title: "Magic Eden (Soon)",
    href: "https://magiceden.io/",
  },
  {
    title: "License (Soon)",
    href: "#",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0C0C0C]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        <div className="flex justify-center pt-12 mb-24 md:mb-32">
          <Image
            src="/irukandji.png"
            alt="Irukandji Logo"
            width={60}
            height={120}
            priority
            className="object-contain"
          />
        </div>

        <div className="border-t border-[#d0ccc2]">
          {links.map((item) => (
            <LinkItem
              key={item.title}
              title={item.title}
              href={item.href}
            />
          ))}
        </div>

        <div className="flex pt-24 justify-center">
        <Image className="justify-center content-center"
        src="/tree.svg"
        width={20}
        height={40}
        alt="Tree"
        />
        </div>

      </div>
    </main>
  );
}
