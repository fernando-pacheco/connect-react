import type { ComponentProps } from "react"

interface IconButtonProps extends ComponentProps<"button"> {}

function IconButton(props: IconButtonProps) {
    return (
        <button
            className="items-center justify-between p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-150"
            {...props}
        />
    )
}

export { IconButton }
