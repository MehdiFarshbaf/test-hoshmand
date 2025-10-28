'use client'
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {PropsAddCounseling} from "@/types/public-types";
import TextInput from "@/components/public/form/inputs/TextInput";
import UserInputIcon from "@/components/icons/UserInput.Icon";
import EmailIcon from "@/components/icons/Email.Icon";
import PhoneIcon from "@/components/icons/Phone.Icon";
import TextAreaInput from "@/components/public/form/inputs/TextAreaInput";

const CounselingForm = () => {

    // schema
    const schema = yup.object().shape({
        fullName: yup.string().trim().required("نام و نام خانوادگی الزامی است."),
        email: yup.string().trim().required('ایمیل الزامی است.').email('ایمیل وارد شده معتبر نمی باشد.'),
        description: yup.string().trim().optional(),
        phoneNumber: yup.string().matches(/^(\+98?)?{?(0?9[0-9]{9,9}}?)$/, 'شماره موبایل معتبر نیست').required('این فیلد الزامی می باشد.').length(11, 'طول شماره تلفن باید 11 کاراکتر باشد.'),
    });

    const {handleSubmit, control, formState: {errors}, reset} = useForm<PropsAddCounseling>({
        resolver: yupResolver(schema),
        defaultValues: {}
    });

    const onSubmit: SubmitHandler<PropsAddCounseling> = (data) => {
        console.log("form data is : ", data);
        reset()
    }

    return (
        <div className="main-container mx-auto bg-white1 rounded-lg border-gray200 w-full py-8 px-4 md:p-10">
            <form onSubmit={handleSubmit((values: PropsAddCounseling) => onSubmit(values))}
                  className='FormModalBody w-full flex flex-col p-6 gap-4'>
                <div className="w-full flex flex-col gap-6 md:gap-6 md:flex-row mb-8 md:mb-10">
                    <TextInput name="fullName" control={control} placeholder="نام و نام خانوادگی"
                               label="نام و نام خانوادگی"
                               type="text"
                               errors={errors}
                               icon={<UserInputIcon/>}/>
                    <TextInput name="email" control={control} placeholder="مثلا mfarshbaf92@gmail.com"
                               label="آدرس ایمیل خود را وارد کنید"
                               type="email"
                               errors={errors}
                               icon={<EmailIcon/>}/>
                    <TextInput name="phoneNumber" control={control} placeholder="021-123456789"
                               label="شماره تماس خود را وارد کنید"
                               type="text"
                               errors={errors}
                               icon={<PhoneIcon/>}/>
                </div>
                <div className="mb-8 md:mb-10">
                    <p className="text-black900 mb-6 md:mb-4 font-medium text-sm md:font-semibold">نوع سرویس(های) مورد نظر خود را انتخاب کنید. </p>
                </div>
                <TextAreaInput name="description" control={control} placeholder="توضیحات (اختیاری)"
                               label="در مورد درخواست خود برای ما بنویسید."/>
                <div className="mt-8 w-full flex-center">
                    <button
                        className="w-full max-w-[386px] h-10 flex-center bg-black500 text-white1 font-bold text-sm md:text-base rounded-2xl"
                        type="submit">ثبت درخواست
                    </button>
                </div>
            </form>
        </div>
    )
}
export default CounselingForm