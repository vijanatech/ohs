export default class API {
    
    static sendEmail = (store: any) => {
        try {
            fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(store.message),
            })
                .then((response) => {
                    if (response.ok) {
                        store.showLoader = false
                        store.response = store.response_success
                        setTimeout(() => {
                            store.response = store.default_response
                        }, 3000)
                    } else {
                        store.showLoader = false
                        store.response = store.response_error
                        setTimeout(() => {
                            store.response = store.default_response
                        }, 3000)
                    }
                })
                .catch(() => {
                    store.showLoader = false;
                    store.response = store.response_error
                    setTimeout(() => {
                        store.response = store.default_response
                    }, 3000);
                })
        }
        catch {
            store.showLoader = false;
            store.response = store.response_error
            setTimeout(() => {
                store.response = store.default_response
            }, 3000)
        }
    }
}