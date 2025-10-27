import {HTMLProps, ReactNode} from "react";


export type ClassName = HTMLProps<HTMLElement>["className"]

// export type OptionSelect = { value: number; label: string }

export type ChildrenType = ReactNode

export type CallbackFunction = (...args: any[]) => any;
export type NavItem = { id: number, label: string, path: string }

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