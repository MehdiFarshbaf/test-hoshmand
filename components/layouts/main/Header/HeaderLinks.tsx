import {headerLinks} from "@/components/layouts/main/Header/dataHeader";
import HeaderLink from "@/components/layouts/main/Header/HeaderLink";

const HeaderLinks = () => {
    return (
        <nav className="flex justify-center items-center gap-6">
            {headerLinks.map(link =>(
                <HeaderLink key={link.id} link={link}/>)
            )}
        </nav>
    )
}
export default HeaderLinks;