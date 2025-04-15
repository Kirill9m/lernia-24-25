import Rating from "./Rating";

export default class Challenge {
    constructor(data) {
        this.data = data;
    }

    render(elemCreator) {
        this.container = elemCreator.createElement('article');
        this.container.className = "room";

        const img = elemCreator.createElement('img');
        img.src = this.data.image;
        this.container.append(img);

        const h2 = elemCreator.createElement('h2');
        h2.textContent = this.data.title;
        this.container.append(h2);

        const rating = new Rating(this.data.rating, "challengeRating");
        const ratingElem = rating.render(elemCreator);
        this.container.append(ratingElem);

        const groupSize = elemCreator.createElement("span");
        groupSize.className = "participants";
        groupSize.textContent = `${this.data.minParticipants}-${this.data.maxParticipants} participants`;
        this.container.append(groupSize);

        const description = elemCreator.createElement("p");
        description.textContent = this.data.description;
        this.container.append(description)

        const button = elemCreator.createElement("button");
        button.className = "red-button";
        button.textContent = this.data.type == 'online' ? 'Take challenge online' : "Book this room";
        this.container.append(button);
        
        return this.container;
    }

    toggleVisibility(visible) {
        this.container.style.opacity = visible ? 1 : 0.5;
    }
}