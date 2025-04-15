const API_URL = "https://lernia-sjj-assigments.vercel.app/api";

export default class ApiBackend {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }
    async loadAllChallenges() {
        const responce = await fetch(this.apiUrl + '/challenges');
        const payload = await responce.json();
        return payload.challenges;
    }
}