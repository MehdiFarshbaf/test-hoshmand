import {SliderItem} from "@/types/public-types";
import AppImage from "@/components/public/AppImage";

interface IProps {
    slide: SliderItem
}

const SliderCard = ({slide}: IProps) => {
    return (
        <div
            className="w-full  h-[198px] md:h-[226px] bg-white1 rounded-lg border border-gray200 py-3 px-4 md:py-6 flex flex-col  text-center">
            <AppImage src={slide.image} width={56} height={56} alt={slide.title}
                      className=" w-10 h-10 md:w-14 md:h-14 object-fill mx-auto mb-2 md:mb-4"/>
            <p className="text-black500 font-bold text-xs mb-2 line-clamp-1">{slide.title}</p>
            <p className="text-black500 font-medium text-xs line-clamp-4">{slide.description}</p>
        </div>
    )
}
export default SliderCard;