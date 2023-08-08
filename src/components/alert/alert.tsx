import { component$ } from "@builder.io/qwik";

interface AlertProps {
    value: string,
    color: string,
    style: string
}
export const Alert = component$((props: AlertProps) => {
    return (
        <><div class={props.color} role="alert" style={props.style}>
            {props.value}
        </div>
        </>
    );
});