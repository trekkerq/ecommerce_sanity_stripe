import React from 'react';
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from  '../components';




const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      {console.log(bannerData)}
      <div className="products-heading">
        <h2>Morehouse & Spelman Colleges'</h2>
        <p>Ralph Lauren Collection</p>
      </div>
      <div className="products-container">
        
        {/* {['Product 1', 'Product 2', 'Product 3'].map((product) => product)} */}
        {products?.map((product) => <Product key={product.id} product={product} />)}
        
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      products,
      bannerData,
  }
}

}

export default Home;
