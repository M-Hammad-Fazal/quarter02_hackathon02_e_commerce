import Image, { StaticImageData } from "next/image";
import chair2 from "../../../public/chair2popular.png";
import pnik_sofa from "../../../public/sofa_pink_1.png";
import chairPopular from "../../../public/chair-popular.jpeg";
import sofa2 from "../../../public/sofa2.png";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import table3 from "../../../public/table3.png";
import seat02popular from "../../../public/seat02popular.png";
import pillowseat from "../../../public/pilow.png";
import oldchair from "../../../public/oldChair.jpeg";
import seat3 from "../../../public/seat3.jpeg";
import chair2Pro from "../../../public/chair2Pro.jpg";
import table2 from "../../../public/table.jpeg";

export interface IProduct {
  slug:string;
  productState: string;
  image: StaticImageData;
  title: string;
  price: string;
  discountedPrice: string;
}

const dataarray: IProduct[] = [
  {
    slug:"chair2",
    productState: "New",
    image: chair2,  
    title: "Library Stool Chair",
    price: "$20",
    discountedPrice: "$20",
  },
  {
    slug: "pnik_sofa",
    productState: "Sale",
    image: pnik_sofa,
    title: "Pink Sofa",
    price: "$300",
    discountedPrice: "$250",
  },
  {
    slug:"chairPopular",
    productState: "Hot",
    image: chairPopular,
    title: "Popular Chair",
    price: "$120",
    discountedPrice: "$100",
  },
  {
    slug: "sofa2",
    productState: "Hot",
    image: sofa2,
    title: "Popular Chair",
    price: "$120",
    discountedPrice: "$100",
  },
  {
    slug: "table3",
    productState: "Hot",
    image: table3,
    title: "Popular Chair",
    price: "$120",
    discountedPrice: "$100",
  },
  {
    slug: "seat02popular",
    productState: "Hot",
    image: seat02popular,
    title: "Popular Chair",
    price: "$120",
    discountedPrice: "$100",
  },
  {
    slug: "pillowseat",
    productState: "Hot",
    image: pillowseat,
    title: "Popular Chair",
    price: "$120",
    discountedPrice: "$100",
  },
  {
    slug: "oldchair",
    productState: "Hot",
    image: oldchair,
    title: "Popular Chair",
    price: "$120",
    discountedPrice: "$100",
  },
  {
    slug: "seat3",
    productState: "Hot",
    image: seat3,
    title: "Popular Chair",
    price: "$120",
    discountedPrice: "$100",
  },
  {
    slug: "pnik_sofa",
    productState: "Hot",
    image: pnik_sofa,
    title: "Popular Chair",
    price: "$120",
    discountedPrice: "$100",
  },
  {
    slug: "chairPopular",
    productState: "Hot",
    image: chairPopular,
    title: "Popular Chair",
    price: "$120",
    discountedPrice: "$100",
  },
  {
    slug: "chair2Pro",
    productState: "Hot",
    image: chair2Pro,
    title: "Popular Chair",
    price: "$120",
    discountedPrice: "$100",
  },
];

const AllProductpage = () => {
  return (
    <>
        <div className="max-w-7xl mx-auto flex flex-col gap-4 pb-52">
      <h1 className="font-inter text-[32px] leading-[35.2px] font-semibold mt-8 text-[#272343] text-center lg:text-start">
        All Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {dataarray.map((product: IProduct, index: number) => (
           <Link 
           href={`/shop/${product.slug}`} 
           key={product.slug}
           className="group"
         >
          <div key={index} className="w-full max-w-[358px] mx-auto">
            <div className="product-card bg-white rounded-lg p-4">
              <div className="relative">
                <div className="absolute top-4 left-4 z-10 bg-[#01AD5A] text-white px-3 py-1 rounded-md text-sm">
                  {product.productState}
                </div>
                <div className="aspect-square relative w-full">
                  <Image
                    src={product.image}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-[#007580] text-sm md:text-base">
                    {product.title}
                  </p>
                  <div className="flex gap-2">
                    <p className="text-[#272343] font-medium text-lg">{product.price}</p>
                    <p className="font-normal text-md line-through text-[#9A9CAA]">
                      {product.discountedPrice}
                    </p>
                  </div>
                </div>
                <button className="p-2 md:p-3 bg-[#029FAE] hover:bg-[#076068] rounded-lg">
                  <ShoppingCart className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
    


















      <div className="max-w-full bg-[#1E28320D] overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 px-4 sm:px-6 lg:px-8 relative top-24 md:top-0">
          <h1 className="font-roboto font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[50px] leading-tight sm:leading-[58.59px] text-[#000000] pt-10 sm:pt-20 text-center px-2">
            Or Subscribe To The Newsletter
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 justify-between items-center w-full max-w-[643px] px-2">
            <div className="flex flex-col w-full sm:w-[80%]">
              <input
                className="font-roboto font-semibold text-base leading-[18.75px] h-10 text-[#1E283280]"
                placeholder=" Email address..."
              />
              <div className="w-full h-[2px] bg-[#000000]" />
            </div>
            <button className="font-sans font-normal text-base leading-[21.79px] text-[#1E2832] border-b-2 border-[#000000] cursor-pointer whitespace-nowrap">
              SUBMIT
            </button>
          </div>
          <div className="flex flex-col items-center w-full px-2 gap-y-8">
            <h1 className="font-roboto font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[50px] leading-tight sm:leading-[58.59px] text-[#000000] pt-6 sm:pt-10 text-center">
              Follow products and discounts on Instagram
            </h1>
            <div className="my-4 w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 place-items-center">
              {[table2, seat3, pnik_sofa, chair2, chairPopular, chair2Pro].map(
                (image, index) => (
                  <div
                    key={index}
                    className="relative max-w-[186px] max-h-[186px] flex-shrink-0"
                  >
                    <Image
                      src={image}
                      alt={`product-${index}`}
                      width={186}
                      height={186}
                      className="object-cover max-w-[200px] max-h-[200px]"
                      layout="responsive"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProductpage;
