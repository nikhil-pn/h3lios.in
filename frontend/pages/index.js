import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";

function Home({ products }) {
  return (
    <main>
      <HeroBanner></HeroBanner>
      <Wrapper>
        {/* heading and paragaph start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            {/* <h1>{products?.data?.[0]?.attributes?.name}</h1> */}
            {/* Need to populate heading like this  */}
            Cushioning for Your Miles
          </div>
          <div className="text-md md:text-xl">
            A lightweight Nike ZoomX midsole is combined with increased stack
            heights to help provide cushioning during extended stretches of
            running.
          </div>
        </div>
        {/* heading and paragaph end */}
      </Wrapper>

      {/* products grid start */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   gap-5 my-14 px-8  md:px-20">
        {products?.data?.map((product) => (
          <ProductCard key={product.id} data={product}></ProductCard>
        ))}
      </div>
      {/* products grid end */}
    </main>
  );
}

export async function getStaticProps() {
  const products = await fetchDataFromApi("/api/products?populate=*");

  return {
    props: { products: products },
  };
}

export default Home;
