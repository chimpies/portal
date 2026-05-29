import Link from "next/link";  
import { ArrowRight } from "lucide-react";  
  
interface LinkItemProps {  
  title: string;  
  href: string;  
}  
  
export default function LinkItem({  
  title,  
  href,  
}: LinkItemProps) {  
  return (  
    <Link  
      href={href}  
      target="_blank"  
      className="  
      group  
      flex  
      items-center  
      justify-between  
      py-8  
      md:py-10  
      border-b  
      border-[#d0ccc2]  
      text-white  
      no-underline  
      "  
    >  
      <span  
        className="  
        font-heading  
        uppercase  
        text-white  
        text-[32px]  
        md:text-[42px]  
        font-bold  
        tracking-tight  
        leading-none  
        "  
      >  
        {title}  
      </span>  
  
      <ArrowRight  
        size={14}  
        strokeWidth={1.8}  
        className="  
        text-white  
        transition-transform  
        duration-300  
        group-hover:translate-x-2  
        "  
      />  
    </Link>  
  );  
}