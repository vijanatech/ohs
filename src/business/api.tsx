import { Client, ID, Databases, Permission, Role } from 'appwrite';



export default class API {
    static async login() {
        try {
            const response = await fetch('https://apis.onfonmedia.co.ke/v1/authorization', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    apiUsername: 'onehealth',
                    apiPassword: 'LwJ0Ta8X5FEMy2YQ3d9Sr4H1kUeCOWuNxjcs7tzgoP6pGnRf'
                }),
            });

            if (response.ok) {
                const data = await response.json();
                return data.token;
            } else {
                throw new Error('Login failed');
            }
        } catch (error) {
            throw error;
        }
    }

    static async createPushSms(store: { showLoader: any; response_error: any; response_success: any; default_response: any; response: any; data?: { name: string; number: string; gender: string; region: string; district: string; language: string; }; }, data: { name: string; number: string; gender: string; region: string; district: string; language: string; }) {
        const token = await this.login();

        try {
            const response = await fetch('https://sms.onfonmedia.co.ke/v2_send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                // Handle success
                store.showLoader = false;
                store.response = store.response_success;
                setTimeout(() => {
                    store.response = store.default_response;
                }, 3000);
            } else {
                // Handle error
                store.showLoader = false;
                store.response = store.response_error;
                setTimeout(() => {
                    store.response = store.default_response;
                }, 3000);
            }
        } catch (error) {
            // Handle exception
            store.showLoader = false;
            store.response = store.response_error;
            setTimeout(() => {
                store.response = store.default_response;
            }, 3000);
        }
    }
}
