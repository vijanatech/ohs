import { component$, useTask$ } from '@builder.io/qwik';
import API from '~/business/api';
export default component$(() => {
    return (
        <>
            <button type="button" onClick$={
                () => {
                    API.createPushSms({})
                }
            }>Testing</button>
        </>
    );
})