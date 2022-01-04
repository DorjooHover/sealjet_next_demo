import ProdcutSection, { ProductSection } from '../component/ProductSection'
import HomeSection from '../component/HomeSection'
import Head from 'next/head'
import NewsSection from '../component/NewsSection'
import FooterSection from '../component/FooterSection'


export default function Home() {
  return (
    
    <div>
      <Head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title> SEALJET</title>
        <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
      </Head>
    <HomeSection />
    <ProductSection />
    <NewsSection />
    <FooterSection />
    
    </div>
    
  )
}

