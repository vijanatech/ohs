import { Client, Account, ID, Databases, Permission, Role } from 'appwrite';

export default class API {

    static client = new Client()
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('64d4a54274614d421630')

    static createPushSms = (store: any, data: {}) => {
        const databases = new Databases(this.client);
        const uniqueID = ID.unique()
        const permissions = [Permission.read(Role.guests())]
        const promise = databases.createDocument(
            '64d4a625a1c550eeca93',
            '64d4a7d56981a119bfaf',
            uniqueID,
            data,
            permissions
        );
        promise.then(function (response) {
            store.showLoader = false
            store.response = store.response_success
            setTimeout(() => {
                store.response = store.default_response
            }, 3000)
        }, function (error) {
            store.showLoader = false
            store.response = store.response_error
            setTimeout(() => {
                store.response = store.default_response
            }, 3000)
        });
    }

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