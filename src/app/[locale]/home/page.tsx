'use client'

import { HeroSlide } from "@/app/components/specific/HeroSlide";
import SustainabilitySection from "@/app/components/specific/Sustainability";
import AboutUs from "@/app/components/specific/About";
import Location from "@/app/components/specific/Location";
import Products from "@/app/components/specific/Products";


export const Home = () => {
    return(
        <div>
        <main>
            <section>
                <HeroSlide/>
            </section>
            <section>
                <AboutUs/>
            </section>
            <section>
                <Products/>
            </section>
            <section>
                <SustainabilitySection/>
            </section>
            <section>
                <Location/>
            </section>
        </main>
        </div>
    );
}


export default Home;