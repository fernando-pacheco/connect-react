import type { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

interface IconButtonProps extends ComponentProps<"button"> {}

function IconButton({ className, ...props }: IconButtonProps) {
    return (
        <button
            className={twMerge(
                "items-center justify-between p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-150",
                className
            )}
            {...props}
        />
    )
}

export { IconButton }
