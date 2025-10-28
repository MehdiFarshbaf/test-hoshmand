import CounselingForm from "@/components/pages/home/CounselingForm.Home";

const Counseling = () => {
    return (
        <section className="w-full bg-gray50 py-10 mb-8 md:py-[60px]">
            <div
                className="main-container flex justify-center items-center flex-col gap-4 md:gap-6 text-center mb-8 md:mb-4">
                <h2 className="text-black900 text-lg font-bold md:text-[20px]">فرم دریافت مشاوره</h2>
                <p className="text-black500 font-medium text-sm md:font-semibold md:text-base">برای ارتقای بیزینس خود به
                    دنبال فرصتی ناب هستید؟ فرم زیر را تکمیل کنید تا مشاوران ما به
                    صورت کاملان رایگان شمارا راهنمایی کنند.</p>
            </div>
            <div className="main-container">
                <CounselingForm/>
            </div>
        </section>
    )
}
export default Counseling