import { SButton } from "./styles"

type ButtonPropsType = {
    text: string
    variant: 'primary' | 'secondary'
}

export const Button = (props: ButtonPropsType) => {
    return <SButton type={props.variant}> {props.text}  </SButton>
}
