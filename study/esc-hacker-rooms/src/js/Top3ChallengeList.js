import Challenge from "./Challenge";

export default class Top3ChallengeList {
    constructor(backend) {
        this.backend = backend;
    }

    async start(listElem, elemCreator) {
        const challengesFromApi = await this.backend.loadAllChallenges();

        challengesFromApi
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5)
        .forEach((challengeData) => {
            const challenge = new Challenge(challengeData);
            
            const elem = challenge.render(elemCreator);
            listElem.append(elem);
        });
    }
}