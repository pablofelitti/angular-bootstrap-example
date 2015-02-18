function CarType(name, models) {
    this.name = name;
    this.models = models;
}

function Model(name, canPurchase, price, img) {
    this.name = name;
    this.canPurchase = canPurchase;
    this.price = price;
    this.img = img;
    this.reviews = [];

    this.addReview = function (review) {
        this.reviews.push(review);
    }
}

function Review(vote, description) {
    this.vote = vote;
    this.description = description;
    this.isCool = function () {
        if (this.vote === undefined) {

        } else {
            return this.vote === 0;
        }
    }
}