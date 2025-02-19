import type { ComponentProps } from "react"

interface InputContainerProps extends ComponentProps<"div"> {
    error?: boolean
}

interface InputFieldProps extends ComponentProps<"input"> {}

interface InputIconProps extends ComponentProps<"span"> {}

function InputContainer({ error = false, ...props }: InputContainerProps) {
    return (
        <div
            data-error={error}
            className="group bg-gray-900 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger"
            {...props}
        />
    )
}

function InputIcon(props: InputIconProps) {
    return (
        <span
            className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
            {...props}
        />
    )
}

function InputField(props: InputFieldProps) {
    return (
        <input className="flex-1 outline-0 placeholder-gray-400" {...props} />
    )
}

export { InputContainer, InputIcon, InputField }
