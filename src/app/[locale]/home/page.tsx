'use client'

import { HeroSlide } from "@/app/components/specific/HeroSlide";
import SustainabilitySection from "@/app/components/specific/Sustainability";
import AboutUs from "@/app/components/specific/About";


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
                <SustainabilitySection/>
            </section>
        </main>
        </div>
    );
}


export default Home;