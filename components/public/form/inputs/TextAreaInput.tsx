import {Controller, FieldValues} from "react-hook-form";
import {IHookFormProps} from "@/types/public-types";
import {ChangeEvent, HTMLProps} from "react";

interface IProps<T extends FieldValues> extends IHookFormProps<T> {
    name: string;
    label?: string;
    placeholder?: string;
    classNames?: {
        classContainer?: HTMLProps<HTMLElement>["className"];
        classLabel?: HTMLProps<HTMLElement>["className"];
        classInput?: HTMLProps<HTMLElement>["className"];
        classError?: HTMLProps<HTMLElement>["className"];
    };
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}


const TextAreaInput = <T extends FieldValues>({
                                                  name,
                                                  control,
                                                  errors,
                                                  placeholder,
                                                  label,
                                                  classNames,
                                                  onChange,
                                              }: IProps<T>) => {


    return (
        <div className={`container-input ${classNames?.classContainer}`}>
            {label && label?.length > 0 && (
                <p className={`label-input ${classNames?.classLabel}`}>{label}</p>
            )}
            <div className="w-full bg-white2 rounded-2xl border border-gray200 p-4 h-[188px] md:h-[171px]">
                <Controller
                    render={({field}) => (
                        <textarea
                            {...field}
                            value={field.value || ""}
                            placeholder={placeholder}
                            className={`class-textarea flex-1 outline-none w-full h-full resize-none ${classNames?.classInput || ""}`}
                            onChange={(event) => {
                                field.onChange(event); // Call the onChange from react-hook-form
                                if (onChange) {
                                    onChange(event); // Call the external onChange if provided
                                }
                            }}
                        />
                    )}
                    name={name as Path<T>}
                    control={control}
                />
            </div>
            {errors && errors[name]?.message && (
                <p className={`text-red-700 mt-2 text-xs md:text-sm ${classNames?.classError || ""}`}>
                    {errors[name].message as string}
                </p>
            )}
        </div>
    );
};
export default TextAreaInput;