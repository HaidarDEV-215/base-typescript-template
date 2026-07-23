// aggregate root (Product)
export class Product {
    data;
    constructor(data) {
        this.data = data;
        this.validate();
    }
    // validation
    validate() {
        if (!this.data.name || this.data.name.trim().length < 2) {
            throw new Error("product name must be at least two characters");
        }
        if (this.data.price <= 0) {
            throw new Error("product price must be grater than zero");
        }
    }
    //factory method
    static create(data) {
        return new Product(data);
    }
    // getters
    get id() {
        return this.data.id;
    }
    get name() {
        return this.data.name;
    }
    get category() {
        return this.data.category;
    }
    get color() {
        return this.data.color;
    }
    get ceratedAt() {
        return this.data.createdAt;
    }
    get updatedAt() {
        return this.data.updatedAt;
    }
    get price() {
        return this.data.price;
    }
    // business logic
    changePrice(newPrice) {
        if (newPrice <= 0) {
            throw new Error("product price must be grater than zero");
        }
        this.data.price = newPrice;
    }
    changeColor(newColor) {
        this.data.color = newColor;
    }
    toJSON() {
        return { ...this.data };
    }
}
