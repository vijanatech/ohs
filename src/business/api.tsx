import { Client, ID, Databases, Permission, Role } from 'appwrite';

export default class API {
    static client = new Client()
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('64d4a54274614d421630')

    static async login() {
        const response = await fetch('https://apis.onfonmedia.co.ke/v1/authorization', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                apiUsername: import.meta.env.PUBLIC_SMS_API_USERNAME,
                apiPassword: import.meta.env.PUBLIC_SMS_API_PASSWPORD
            }),
        });

        if (response.ok) {
            const data = await response.json();
            return data.token;
        } else {
            throw new Error('Login failed');
        }
    }

    static async sendSms(number: string, message: string = "Hongera, Taarifa zako zimepokelewa kikamilifu ONE HEALTH SOCIETY na sasa utakuwa ukipokea Elimu ya Afya kwenye simu yako kwa Lugha uliyoichagua.") {
        const token = await this.login()
        if (token !== "") {
            const response = await fetch('https://sms.onfonmedia.co.ke/v2_send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "to": number,
                    "from": "ONE HEALTH",
                    "content": message,
                    "dlr": "yes",
                    "dlr-url": "https://ohs-health.org/sms/",
                    "dlr-level": 1
                }),
            });
            console.log(response)
            if (response.ok) {
                const data = await response.json();
                
                return data;
            } else {
                throw new Error('Failed to push sms');
            }
        }else{
            throw new Error('Failed to push sms');
        }

    }

    static createPushSms = (store: any, data: any) => {
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
        promise.then(function () {
            store.showLoader = false
            store.response = store.response_success
            API.sendSms(data.number)
            setTimeout(() => {
                store.response = store.default_response
            }, 3000)
        }, function () {
            store.showLoader = false
            store.response = store.response_error
            setTimeout(() => {
                store.response = store.default_response
            }, 3000)
        });
    }

    static sendEmail = (store: any) => {
        const data = {
            message: {
                service_id: `${import.meta.env.PUBLIC_EMAIL_JS_SERVICE_ID}`,
                template_id: `${import.meta.env.PUBLIC_EMAIL_JS_TEMPLATE_ID}`,
                user_id: `${import.meta.env.PUBLIC_EMAIL_JS_USER_ID}`,
                template_params: store.data
            }
        }
        try {
            fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data.message),
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
