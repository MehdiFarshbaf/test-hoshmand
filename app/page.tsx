import HeroHome from "@/components/pages/home/Hero.Home";
import SliderHome from "@/components/pages/home/Slider.Home";
import Counseling from "@/components/pages/home/Counseling.Home";

export default function Home() {
    return (
        <main className="">
            <HeroHome/>
            <SliderHome/>
            <Counseling/>
        </main>
    );
}
