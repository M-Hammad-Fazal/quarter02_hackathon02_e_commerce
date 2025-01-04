import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import Sponsors from "@/components/Sponsors";
import TopCategories from "@/components/TopCategories";
import PopularStyles from "@/components/PopularStyles";
import OurProduct from "@/components/OurProduct";

export default function Home() {
  return (
   <div>
      <Hero/>
      <Sponsors/>
      <FeaturedProducts/>
      <TopCategories/>
      <PopularStyles/>
      <OurProduct/>
   </div>
  );
}
