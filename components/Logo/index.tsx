import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/"
              className="h-8 md:h-10 w-18 md:w-[102px] rounded-lg bg-gray100 flex-center ">
            <span className="font-semibold text-xs md:font-medium md:text-lg text-gray900 md:text-black900">logo</span>
        </Link>
    )
}
export default Logo;