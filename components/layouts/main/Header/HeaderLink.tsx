'use client'

import {HeaderMenu} from "@/types/public-types";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useEffect} from "react";

interface IProps {
    link: HeaderMenu
}

const HeaderLink = ({link}: IProps) => {

    const pathName = usePathname()

    useEffect(() => {
        console.log("pathname is : ", pathName);
    }, [pathName]);

    return (
        <Link href={link.path} className="">
            <span className={`text-sm ${pathName === link.path ? 'text-black900 font-bold':'text-black200 font-medium'}`}>{link.label}</span>
        </Link>
    )
}
export default HeaderLink