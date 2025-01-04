import Image from "next/image";
import chair2 from "../../public/chair2popular.png";
import { ShoppingCart } from "lucide-react";
import pnik_sofa from "../../public/sofa_pink_1.png";
import chairPopular from "../../public/chair-popular.jpeg";
import sofa2 from "../../public/sofa2.png";
import Link from "next/link";
import seat02popular from "../../public/seat02popular.png";
import pillowseat from "../../public/pilow.png";
import oldchair from "../../public/oldChair.jpeg";
import Seat3 from "../../public/seat3.jpeg";

const OurProduct = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-12 px-4 py-16">
      <h1 className="font-inter text-[32px] leading-[35.2px] font-semibold mt-8 text-[#272343] text-center">
        Our Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pl-8 sm:pl-16 md:pl-0">
        <div className="w-full max-w-[358px]">
          <div className="product-card bg-white rounded-lg ">
            <div className="relative">
              <div className="absolute top-4 left-4 z-10 bg-[#01AD5A] text-white px-3 py-1 rounded-md text-sm">
                New
              </div>
              <div className="aspect-square relative w-full">
                <Image
                  src={chair2}
                  alt="chair2"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div>
                <p className="text-[#007580] text-sm md:text-base">
                  Library Stool Chair
                </p>
                <p className="text-[#272343] font-medium text-lg">$20</p>
              </div>
              <button className="p-2 md:p-3 bg-[#029FAE] hover:bg-[#076068] rounded-lg">
                <ShoppingCart className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[358px] ">
          <div className="product-card bg-white rounded-lg ">
            <div className="relative">
              <div className="absolute top-4 left-4 z-10 bg-[#F5813F] text-white px-3 py-1 rounded-md text-sm">
                Sales
              </div>
              <div className="aspect-square relative w-full">
                <Link href="/shop">
                  <Image
                    src={pnik_sofa}
                    alt="pink sofa"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </Link>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div>
                <p className="text-[#007580] text-sm md:text-base">
                  Library Stool Chair
                </p>
                <div className="flex gap-2 items-center">
                  <p className="text-[#272343] font-medium text-lg">$20</p>
                  <p className="text-[#9A9CAA] line-through text-sm">$39</p>
                </div>
              </div>
              <button className="p-2 md:p-3 bg-gray-300 hover:bg-[#076068] rounded-lg">
                <ShoppingCart className="w-5 h-5 text-[#272343]" />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[358px] ">
          <div className="product-card bg-white rounded-lg ">
            <div className="relative">
              <div className="aspect-square relative w-full">
                <Image
                  src={chairPopular}
                  alt="chair popular"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div>
                <p className="text-[#007580] text-sm md:text-base">
                  Library Stool Chair
                </p>
                <p className="text-[#272343] font-medium text-lg">$20</p>
              </div>
              <button className="p-2 md:p-3 bg-gray-300 hover:bg-[#076068] rounded-lg">
                <ShoppingCart className="w-5 h-5 text-[#272343]" />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[358px] ">
          <div className="product-card bg-white rounded-lg  ">
            <div className="relative">
              <div className="aspect-square relative w-full">
                <Image
                  src={sofa2}
                  alt="sofa2"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div>
                <p className="text-[#007580] text-sm md:text-base">
                  Library Stool Chair
                </p>
                <p className="text-[#272343] font-medium text-lg">$20</p>
              </div>
              <button className="p-2 md:p-3 bg-gray-300 hover:bg-[#076068] rounded-lg">
                <ShoppingCart className="w-5 h-5 text-[#272343]" />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[358px] ">
          <div className="product-card bg-white rounded-lg p-4">
            <div className="relative">
              <div className="absolute top-4 left-4 z-10 bg-[#01AD5A] text-white px-3 py-1 rounded-md text-sm">
                New
              </div>
              <div className="aspect-square relative w-full">
                <Image
                  src={Seat3}
                  alt="table3"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div>
                <p className="text-[#007580] text-sm md:text-base">
                  Library Stool Chair
                </p>
                <p className="text-[#272343] font-medium text-lg">$20</p>
              </div>
              <button className="p-2 md:p-3 bg-gray-300 hover:bg-[#076068] rounded-lg">
                <ShoppingCart className="w-5 h-5 text-[#272343]" />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[358px] ">
          <div className="product-card bg-white rounded-lg">
            <div className="relative">
              <div className="absolute top-4 left-4 z-10 bg-[#F5813F] text-white px-3 py-1 rounded-md text-sm">
                Sales
              </div>
              <div className="aspect-square relative w-full">
                <Image
                  src={seat02popular}
                  alt="seat02popular"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div>
                <p className="text-[#007580] text-sm md:text-base">
                  Library Stool Chair
                </p>
                <div className="flex gap-2 items-center">
                  <p className="text-[#272343] font-medium text-lg">$20</p>
                  <p className="text-[#9A9CAA] line-through text-sm">$39</p>
                </div>
              </div>
              <button className="p-2 md:p-3 bg-gray-300 hover:bg-[#076068] rounded-lg">
                <ShoppingCart className="w-5 h-5 text-[#272343]" />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[358px] ">
          <div className="product-card bg-white rounded-lg">
            <div className="relative">
              <div className="aspect-square relative w-full">
                <Image
                  src={pillowseat}
                  alt="pillowseat"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div>
                <p className="text-[#007580] text-sm md:text-base">
                  Library Stool Chair
                </p>
                <p className="text-[#272343] font-medium text-lg">$20</p>
              </div>
              <button className="p-2 md:p-3 bg-gray-300 hover:bg-[#076068] rounded-lg">
                <ShoppingCart className="w-5 h-5 text-[#272343]" />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[358px] ">
          <div className="product-card bg-white rounded-lg">
            <div className="relative">
              <div className="aspect-square relative w-full">
                <Image
                  src={oldchair}
                  alt="oldchair "
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div>
                <p className="text-[#007580] text-sm md:text-base">
                  Library Stool Chair
                </p>
                <p className="text-[#272343] font-medium text-lg">$20</p>
              </div>
              <button className="p-2 md:p-3 bg-gray-300 hover:bg-[#076068] rounded-lg">
                <ShoppingCart className="w-5 h-5 text-[#272343]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProduct;