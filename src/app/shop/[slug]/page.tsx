import Image, { StaticImageData } from "next/image";
import PinkSofa from "../../../../public/PinkSoFa.png";
import { ShoppingCart } from "lucide-react";
import pillow from "../../../../public/pilow.png";
import chair2Pro from "../../../../public/chair2popular.png";
import chair3Pro from "../../../../public/chair2Pro.jpg";
import chair4Pro from "../../../../public/yellowChair.png";
import chair5Pro from "../../../../public/lastPro.png";
import Link from "next/link";


export interface IProduct {
  slug:string;
  description: string;
  image: StaticImageData;
  title: string;
  price: string;
}



const Productpage = () => {
  // const slug = (await params).slug
  
// const data: IProduct[] = [
//   {
//   slug: `${slug}`,
//   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing",
//   image: PinkSofa ,
//   title: "Library Stool Chair",
//   price:  "$20.00 USD",
//   },
// ]

  return (
    
    <div className="container mx-auto px-4 max-w-7xl flex flex-col gap-4">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-2 lg:mb-28">
        <div className="w-full lg:w-1/2">
          <Image 
            src={PinkSofa} 
            alt="PinkSofa"
            width={675}
            height={607}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="flex flex-col gap-6 lg:gap-8 w-full lg:w-1/2">
          <h1 className="font-inter font-bold text-3xl md:text-4xl lg:text-[60px] leading-tight text-[#272343]">
          
          </h1>
          <div className="w-36 h-12 rounded-[100px] flex items-center justify-center bg-[#029FAE] hover:bg-[#01656e]">
            <button className="text-[#FFFFFF] font-inter font-semibold text-xl leading-[22px]">
              $20.00 USD
            </button>
          </div>
          <div className="w-full h-[2px] bg-[#D9D9D9]"/>
          <p className="font-inter font-normal text-lg md:text-[22px] leading-relaxed text-[#272343] max-w-[521px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
          <div className="w-full sm:w-[212px] h-[63px] rounded-[8px] px-2 py-[14px] bg-[#029FAE] flex items-center justify-center hover:scale-105 hover:bg-[#0e5f66]">
            <Link href="/cart" className="flex text-[#FFFFFF] font-inter font-semibold text-xl leading-[22px] items-center justify-center">
              <ShoppingCart width={40} height={22}/>
              <span className="text-xl">Add To cart</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 mb-16 sm:mb-20 lg:mb-28">
        <div className="flex justify-between items-center">
        <h1 className="font-inter font-bold text-2xl md:text-[28px] leading-tight tracking-[20%] text-[#000000]">
          Featured Products
        </h1>
          <Link href="/product" className="font-inter font-bold text-[18px] leading-[21.78px] text-[#000000] underline hover:scale-110">View All</Link>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
          <div className="flex flex-col gap-2">
            <div className="relative aspect-square w-full">
              <Image src={pillow} alt="pillow" fill className="object-cover rounded-lg"/>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-inter font-normal text-base leading-[20.8px] text-[#272343]">Library Stool Chair</p>
              <p className="font-inter font-bold text-sm leading-[16.94px] text-[#000000]">$99</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="relative aspect-square w-full">
              <Image src={chair2Pro} alt="chair2Pro" fill className="object-cover rounded-lg"/>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-inter font-normal text-base leading-[20.8px] text-[#272343]">Library Stool Chair</p>
              <p className="font-inter font-bold text-sm leading-[16.94px] text-[#000000]">$99</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="relative aspect-square w-full">
              <Image src={chair3Pro} alt="chair3Pro" fill className="object-cover rounded-lg"/>
            </div>
            <div className="flex justify-between items-center">
              <Link href="/cart" className="font-inter font-normal text-base leading-[20.8px] text-[#272343]">Library Stool Chair</Link>
              <p className="font-inter font-bold text-sm leading-[16.94px] text-[#000000]">$99</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="relative aspect-square w-full">
              <Image src={chair4Pro} alt="chair4Pro" fill className="object-cover rounded-lg"/>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-inter font-normal text-base leading-[20.8px] text-[#272343]">Library Stool Chair</p>
              <p className="font-inter font-bold text-sm leading-[16.94px] text-[#000000]">$99</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="relative aspect-square w-full">
              <Image src={chair5Pro} alt="chair5Pro" fill className="object-cover rounded-lg"/>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-inter font-normal text-base leading-[20.8px] text-[#272343]">Library Stool Chair</p>
              <p className="font-inter font-bold text-sm leading-[16.94px] text-[#000000]">$99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Productpage