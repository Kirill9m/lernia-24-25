import Challenge from "./Challenge";
import TextFilter from "./filters/TextFilter"

export default class FullChallengesList{
    constructor(backend){
        this.backend = backend;
    }

    async start(listContainer, elemCreator){
        const challengesFromApi = await this.backend.loadAllChallenges();

        this.filter = new TextFilter();
        this.filter.addEventListener('change', () => {
            this.update();
          });

        const filterElem = this.filter.render(elemCreator);
        listContainer.append(filterElem);

        const listElem = elemCreator.createElement('ul');
        listElem.className = 'popular-rooms-list'
        listContainer.append(listElem)

        this.challenges = [];

        challengesFromApi
        .forEach(challengeData => {
        const challenge = new Challenge(challengeData);
        this.challenges.push(challenge);

        const liItem = elemCreator.createElement("li");
        listElem.append(liItem);

        const elem = challenge.render(elemCreator);
        liItem.append(elem);
        });
    }

    update() {
        this.challenges.forEach(challenge => {
            const doesMatches = this.filter.doesChallengeMatch(challenge);
            challenge.toggleVisibility(doesMatches);
        });
    }
}