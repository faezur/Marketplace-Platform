import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Footer from "../components/Footer/Footer";
import Categories from "../components/Category/Categories";
import BecomeMerchant from "@/components/BecomeMerchant/BecomeMerchant";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
      <BecomeMerchant/>
      <Footer />
    </>
  );
}