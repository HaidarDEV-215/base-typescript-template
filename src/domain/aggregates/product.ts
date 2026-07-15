import { Category } from "../entities/category";
import { Color } from "../entities/color";

// aggrigate object is a root (base) object contains entities objects as attributes
export interface ProductData{
    id?:number|undefined;
    name:string;
    category:Category;
    color:Color;
    price:number;
    createdAt?: Date| undefined;
    updatedAt?:Date|undefined;
}
// aggregate root (Product)
export class Product{
    private constructor (private data:ProductData){
        this.validate();
    }
    // validation
    private validate():void{
        if(!this.data.name || this.data.name.trim().length < 2){
            throw new Error("product name must be at least two characters");
        }
        if(this.data.price <=0){
            throw new Error("product price must be grater than zero");
        }
    }
    //factory method
    public static create(data:ProductData):Product{
        return new Product(data);
    }
    // getters
    public get id():number|undefined{
        return this.data.id;
    }
    public get name():string{
        return this.data.name;
    }
    public get category():Category{
        return this.data.category;
    }
    public get color():Color{
        return this.data.color;
    }
    public get ceratedAt():Date|undefined{
        return this.data.createdAt;
    }
    public get updatedAt():Date|undefined{
        return this.data.updatedAt;
    }
    public get price():number{
        return this.data.price;
    }
    // business logic
    public changePrice(newPrice:number):void{
        if(newPrice <= 0 ){
            throw new Error("product price must be grater than zero");
        }
        this.data.price = newPrice;
    }
    public changeColor(newColor:Color):void{
        this.data.color = newColor;
    }
    public toJSON():ProductData{
        return {...this.data};
    }
}