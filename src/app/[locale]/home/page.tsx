'use client'

import { HeroSlide } from "@/app/components/specific/HeroSlide";
import SustainabilitySection from "@/app/components/specific/Sustainability";


export const Home = () => {
    return(
        <div>
        <main>
            <section>
                <HeroSlide/>
            </section>
            <section>
                <SustainabilitySection/>
            </section>
        </main>
        </div>
    );
}


export default Home;