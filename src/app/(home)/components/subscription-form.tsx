import { ArrowRight, Mail, User } from "lucide-react"
import { Button } from "../../../components/button"
import {
    InputContainer,
    InputField,
    InputIcon,
} from "../../../components/input"

function SubscriptionForm() {
    return (
        <form
            action=""
            className="bg-gray-700 border border-gray-700 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
        >
            <h2 className="font-heading font-semibold text-gray-200 text-xl">
                Inscrição
            </h2>
            <div className="space-y-3">
                <InputContainer>
                    <InputIcon>
                        <User />
                    </InputIcon>
                    <InputField type="text" placeholder="Nome completo" />
                </InputContainer>

                <InputContainer>
                    <InputIcon>
                        <Mail />
                    </InputIcon>
                    <InputField type="email" placeholder="E-mail" />
                </InputContainer>
            </div>
            <Button type="submit">
                Confirmar <ArrowRight className="size-5" />
            </Button>
        </form>
    )
}

export { SubscriptionForm }
