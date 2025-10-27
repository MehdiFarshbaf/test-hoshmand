import Link from "next/link";

import AppImage from "@/components/public/AppImage";
// img hero
import imgHero from "@/assets/images/hero.png"

const HeroHome = () => {
    return (
        <section className="w-full  bg-hero flex-center py-10 md:py-9">
            <div className="main-container flex flex-col-reverse justify-between md:flex-row  w-full">
                <div className="mt-6 max-w-[486px] text-center md:text-start">
                    <h2 className="text-center md:text-start text-black900 font-bold text-lg md:text-2xl mb-3 ms:mb-4">کمپین‌های
                        بازاریابی و تبلیغاتی</h2>
                    <p className="text-center md:text-start text-black500 mb-2 md:mb-4 font-bold md:font-semibold text-sm md:text-base">آیا
                        به دنبال راهی مطمئن برای دیده شدن برندتان هستید؟ مشاوره رایگان ما به شما کمک می‌کند تا مسیر
                        موفقیت را پیدا کنید. همین حالا قدم اول را بردارید!</p>
                    <p className="font-semibold md:font-bold text-black400 text-xs md:text-base mb-4 md:mb-9">جهت دریافت
                        مشاوره
                        رایگان با شماره‌ی زیر تماس بگیرید</p>
                    <div className="w-full flex justify-center md:justify-start">
                        <Link href={'/'}
                              className="bg-primary-main h-10 md:h-12 rounded-lg px-[30px] md:px-4 text-white ont-semibold md:font-bold text-sm md:text-lg">دریافت
                            مشاوره
                        </Link>
                    </div>
                </div>
                <AppImage src={imgHero.src} width={285} height={200} alt="hero image"
                          className="w-full h-[132px] lg:h-[428px] object-contain max-w-[690px]"/>
            </div>
        </section>
    )
}
export default HeroHome;

