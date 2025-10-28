import {HTMLProps} from "react";
import {
    Control,
    FieldErrors, FieldValues,
    UseFormGetValues,
    UseFormHandleSubmit,
    UseFormReset,
    UseFormSetValue,
    UseFormWatch
} from "react-hook-form";


export type ClassName = HTMLProps<HTMLElement>["className"]

export interface IHookFormProps<T extends FieldValues = FieldValues> {
    control: Control<T>;
    errors?: FieldErrors<T>;
    watch?: UseFormWatch<T>;
    setValue?: UseFormSetValue<T>;
    getValue?: UseFormGetValues<T>;
    handleSubmit?: UseFormHandleSubmit<T>;
    reset?: UseFormReset<T>;
}


export interface PropsIcon {
    className?: ClassName,
}

export interface HeaderMenu {
    id: number;
    label: string;
    path: string;
}

export interface SliderItem {
    id: number;
    title: string;
    description: string;
    image: string;
}

export interface PropsAddCounseling {
    fullName: string;
    email: string;
    phoneNumber: string;
    description?: string;
}