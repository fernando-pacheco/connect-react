import { Button } from "@/components/button"
import { IconButton } from "@/components/icon-button"
import { InputContainer, InputField, InputIcon } from "@/components/input"
import { ArrowRight, Copy, Mail } from "lucide-react"

export default function Home() {
    return (
        <div>
            <Button>
                Enviar
                <ArrowRight />
            </Button>

            <IconButton>
                <Copy />
            </IconButton>

            <div className="flex gap-20">
                <InputContainer>
                    <InputIcon>
                        <Mail className="size-5" />
                    </InputIcon>
                    <InputField placeholder="Digite seu email" />
                </InputContainer>

                <InputContainer error>
                    <InputIcon>
                        <Mail className="size-5" />
                    </InputIcon>
                    <InputField placeholder="Digite seu email" />
                </InputContainer>
            </div>
        </div>
    )
}
