import {Button} from "../Button/Button";
import {SButtons, SCard, SDescription, SPicture, STitle, SWrapperContent} from "./styles";

type CardPropsType = {
    src: string
    title: string
    description: string
}

export function Card(props: CardPropsType) {
    return (
        <SCard>
            <SPicture src={props.src} alt="PictureCard"/>
            <SWrapperContent>
                <STitle>{props.title}</STitle>
                <SDescription> {props.description} </SDescription>
                <SButtons>
                    <Button text="See more" variant="primary"/>
                    <Button text="Save" variant="secondary"/>
                </SButtons>
            </SWrapperContent>
        </SCard>
    )
}


