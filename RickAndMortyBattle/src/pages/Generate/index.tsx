import { Card } from "../../components/Card"
import { HomeButton } from "../../components/HomeButton"
import { ButtonGenerate, GenerateContainer } from "./styles"

export const Generate = () => {
    return (
        <GenerateContainer>
            <Card image="" name="" />
            <ButtonGenerate>Gerar</ButtonGenerate>
            <HomeButton />
        </GenerateContainer>
    )
}