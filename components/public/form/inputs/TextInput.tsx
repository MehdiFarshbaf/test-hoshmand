import {Controller, FieldValues, Path} from "react-hook-form";
import {IHookFormProps} from "@/types/public-types";
import {ChangeEvent, HTMLProps, ReactNode} from "react";

interface IProps<T extends FieldValues> extends IHookFormProps<T> {
    icon: ReactNode
    name: string;
    label?: string;
    placeholder?: string;
    type?: "text" | "email" | "password" | "url" | "number";
    changeF?: (value: string) => void; // Optional callback for custom onChange logic
    classNames?: {
        classContainer?: HTMLProps<HTMLElement>["className"];
        classLabel?: HTMLProps<HTMLElement>["className"];
        classInput?: HTMLProps<HTMLElement>["className"];
        classError?: HTMLProps<HTMLElement>["className"];
    };
}

const TextInput = <T extends FieldValues>({
                                              name, icon,
                                              control,
                                              errors,
                                              placeholder,
                                              label,
                                              classNames,
                                              type,
                                              changeF,
                                          }: IProps<T>) => {
    return (
        <div className={`container-input ${classNames?.classContainer}`}>
            {label && label?.length > 0 && (
                <p className={`label-input ${classNames?.classLabel}`}>{label}</p>
            )}
            <div
                className="h-10 w-full bg-white2 rounded-2xl border border-gray200 px-2 md:px-4 flex justify-start items-center gap-1 md:gap-2">
                {icon}
                <Controller
                    render={({field: {onChange, value}}) => (
                        <input
                            type={type}
                            style={{
                                ...(type === "number" ? {direction: "ltr", textAlign: "left"} : {}),
                            }}

                            value={value ?? ""} // dir={useDirection && language?.rtl ===1 ? "rtl":"ltr"}
                            autoComplete="off"
                            onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                const newValue = event.target.value;
                                onChange(newValue);
                                if (changeF) {
                                    changeF(newValue);
                                }
                            }}
                            className={`class-input flex-1 h-full border-none outline-none ${type === "email" || type === "number" && "!text-left"} ${
                                classNames?.classInput || ""
                            }`}
                            placeholder={placeholder}
                        />
                    )}
                    name={name as Path<T>}
                    control={control}
                />
            </div>

            {errors && errors[name]?.message && (
                <p className={`text-red-700 mt-2 text-xs md:text-sm ${classNames?.classError || ""}`}>
                    {errors[name]?.message as string}
                </p>
            )}
        </div>
    )
}

export default TextInput;