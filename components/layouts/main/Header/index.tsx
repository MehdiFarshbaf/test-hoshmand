import SearchIcon from "@/components/icons/Search.Icon";
import UserIcon from "@/components/icons/User.Icon";
import Logo from "@/components/Logo";

const Header = () => {
    return (
        <header className='flex-center bg-white h-16 md:h-18'>
            <div className="h-full w-full main-container flex justify-between items-center">
                <div className="">
                    <Logo/>
                </div>
                <div className="">menu</div>

                {/*search and user*/}
                <div className="flex gap-2">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg border border-gray100 flex-center">
                        <SearchIcon className="w-6 md:w-8 h-6 md:h-8"/>
                    </div>
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg border border-gray100 flex-center">
                        <UserIcon className="w-6 md:w-8 h-6 md:h-8"/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header