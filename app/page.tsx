import Image from "next/image";
import LinkItem from "@/components/LinkItem";

const links = [
  {
    title: "Website",
    href: "https://chimpies.xyz/",
  },
  {
    title: "X",
    href: "https://x.com/chimpiesnfts",
  },
  {
    title: "Discord",
    href: "https://discord.gg/SqUh8eFxrp"
  },
  {
    title: "Tensor (Soon)",
    href: "https://tensor.trade/",
  },
  {
    title: "Magic Eden (Soon)",
    href: "https://magiceden.io/",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EEDECD]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        <div className="relative w-full max-w-2xl h-[250px] flex justify-center pt-12 mb-24 md:mb-32">
          <Image
            src="/chimpies-wordmark.png"
            alt="Chimpies"
            width={1000}
            height={500}
            priority
            className="object-contain object-cover"
          />
        </div>

        <div className="border-t border-[#303030]">
          {links.map((item) => (
            <LinkItem
              key={item.title}
              title={item.title}
              href={item.href}
            />
          ))}
        </div>

        {/*
        <div className="flex bottom-24 justify-center">
        <Image className="justify-center content-center"
        src="/tree.svg"
        width={40}
        height={80}
        alt="Tree"
        />
        </div>
        */}

      </div>
    </main>
  );
}
