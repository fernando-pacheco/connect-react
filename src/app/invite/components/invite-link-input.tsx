import { IconButton } from "@/components/icon-button"
import { InputContainer, InputField, InputIcon } from "@/components/input"
import { Copy, Link } from "lucide-react"

function InviteLinkInput() {
    return (
        <InputContainer>
            <InputIcon>
                <Link className="size-5" />
            </InputIcon>

            <InputField
                readOnly
                defaultValue="http://localhost/3000/hjiodfhasdfhas"
            />

            <IconButton className="-mr-2">
                <Copy className="size-5" />
            </IconButton>
        </InputContainer>
    )
}

export { InviteLinkInput }
