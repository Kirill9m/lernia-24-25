export default class Rating {
    constructor(rating, className, elemCreator) {
        this.rating = rating;
        this.className = className;

    }
    render(elemCreator) {
        const container = elemCreator.createElement("figure");
        container.className = "rating";
        container.classList.add(this.className);

        for (let i = 0; i < 5; i++) {
            const star = elemCreator.createElement('span');
            star.classList.add("star");
            if (i < this.rating){
                star.classList.add("filled");
            }
            container.append(star);
        }

            return container;
    }
}