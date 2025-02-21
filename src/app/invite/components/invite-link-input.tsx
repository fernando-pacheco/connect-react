"use client"

import { IconButton } from "@/components/icon-button"
import { InputContainer, InputField, InputIcon } from "@/components/input"
import { Copy, Link } from "lucide-react"

interface InviteLinkInputProps {
    inviteLink: string
}

function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
    function copyInviteLink() {
        navigator.clipboard.writeText(inviteLink)
    }

    return (
        <InputContainer>
            <InputIcon>
                <Link className="size-5" />
            </InputIcon>

            <InputField readOnly defaultValue={inviteLink} />

            <IconButton className="-mr-2" onClick={copyInviteLink}>
                <Copy className="size-5" />
            </IconButton>
        </InputContainer>
    )
}

export { InviteLinkInput }
