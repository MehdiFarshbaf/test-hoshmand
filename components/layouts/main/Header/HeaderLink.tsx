'use client'

import {HeaderMenu} from "@/types/public-types";
import Link from "next/link";
import {usePathname} from "next/navigation";

interface IProps {
    link: HeaderMenu
}

const HeaderLink = ({link}: IProps) => {

    const pathName = usePathname()

    return (
        <Link href={link.path} className="">
            <span className={`text-sm ${pathName === link.path ? 'text-black900 font-bold':'text-black200 font-medium'}`}>{link.label}</span>
        </Link>
    )
}
export default HeaderLink