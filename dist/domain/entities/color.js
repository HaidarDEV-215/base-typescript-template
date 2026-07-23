import { hexColor } from "../value_objects/hexColors.js";
export class Color {
    data;
    hexColorValueObject;
    constructor(data) {
        this.data = data;
        this.validate();
        this.hexColorValueObject = hexColor.create(data.hexCode);
    }
    validate() {
        if (!this.data.name || this.data.name.trim().length === 0) {
            throw new Error("color name is required");
        }
    }
    static create(data) {
        return new Color(data);
    }
    //getters 
    get id() {
        return this.data.id;
    }
    get name() {
        return this.data.name;
    }
    get hexCode() {
        return this.hexColorValueObject.Value;
    }
    get hexColorObject() {
        return this.hexColorValueObject;
    }
    get createdAt() {
        return this.data.createdAt;
    }
    get updatedAt() {
        return this.data.updatedAt;
    }
    getRGB() {
        return this.hexColorValueObject.toRGB();
    }
    // methods
    updateHexCode(newHexCode) {
        this.hexColorValueObject = hexColor.create(newHexCode);
        this.data.hexCode = this.hexColorValueObject.Value;
    }
    toJSON() {
        return { ...this.data };
    }
}
