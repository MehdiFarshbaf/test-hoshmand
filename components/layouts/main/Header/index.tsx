import Logo from "@/components/Logo";
import HeaderLinks from "@/components/layouts/main/Header/HeaderLinks";

// icons
import SearchIcon from "@/components/icons/Search.Icon";
import UserIcon from "@/components/icons/User.Icon";
import MenuIcon from "@/components/icons/Menu.Icon";

const Header = () => {
    return (
        <header className='flex-center bg-white h-16 md:h-18'>
            <div className="h-full w-full main-container flex justify-between items-center">
                <div className="flex gap-4">
                    <button className="btn-header md:hidden">
                        <MenuIcon/>
                    </button>
                    <Logo/>
                </div>
                <div className="hidden md:block">
                    <HeaderLinks/>
                </div>

                {/*search and user*/}
                <div className="flex gap-2">
                    <div className="btn-header">
                        <SearchIcon className="w-6 md:w-8 h-6 md:h-8"/>
                    </div>
                    <div className="btn-header">
                        <UserIcon className="w-6 md:w-8 h-6 md:h-8"/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header