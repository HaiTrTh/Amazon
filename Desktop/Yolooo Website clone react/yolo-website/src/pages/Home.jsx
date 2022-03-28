import React from 'react'
import { Link } from 'react-router-dom'
import Helment from '../components/Helment'
import HeroSlider from '../components/HeroSlider'
import Section, { SectionTitle, SectionBody } from '../components/Section'
import heroSliderData from '../assets/fake-data/hero-slider'
import PolicyCard from '../components/PolicyCard'
import Grid from '../components/Grid'
import policy from '../assets/fake-data/policy'
import productData from '../assets/fake-data/products'
import ProductCard from '../components/ProductCard'


const Home = () => {
  return (
    <Helment title="Trang chủ">
      {/* {hero slider} */}
      <HeroSlider
        data={heroSliderData}
        control={true}
        auto={false}
        timeOut={5000}
      />
      {/* {End hero slider} */}
      <Section>
        <SectionBody>
          <Grid
            col={4}
            mdCol={2}
            smCol={1}
            gap={20}
          >
            {
              policy.map((item, index) =>
                <Link to="/policy">
                  <PolicyCard
                    key={index}
                    name={item.name}
                    description={item.description}
                    icon={item.icon}
                  />
                </Link>
              )
            }

          </Grid>
        </SectionBody>
      </Section>
      {/* end policy section */}


      {/* best selling section */}
      <Section>
        <SectionTitle>
          Top sản phẩm bán chạy trong tuần
        </SectionTitle>
        <SectionBody>
          <Grid
            col={4}
            mdCol={2}
            smCol={1}
            gap={20}
          >
            {/* Product - Card */}
            {
              productData.getProducts(4).map((item, index) => (
                <ProductCard
                  key={index}
                  img01={item.img01}
                  img02={item.img02}
                  name={item.name}
                  price={item.price}
                  slug={item.slug}
                />

              ))

            }
          </Grid>

        </SectionBody>
      </Section>
    </Helment>
  )
}

export default Home