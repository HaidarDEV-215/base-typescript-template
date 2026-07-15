import { hexColor } from "../value_objects/hexColors";

export interface ColorData{
    id?:number|undefined;
    name:string;
    hexCode:string;
    createdAt?: Date| undefined;
    updatedAt?:Date|undefined;
}

export class Color{
    private hexColorValueObject:hexColor;
    private constructor (private data:ColorData){
        this.validate();
        this.hexColorValueObject = hexColor.create(data.hexCode);
    }
    private validate():void{
        if(!this.data.name || this.data.name.trim().length === 0){
            throw new Error("color name is required");
        }
    }
    public static create(data:ColorData):Color{
        return new Color (data);
    }
    //getters 
    public get id():number|undefined{
        return this.data.id;
    }
    public get name():string{
        return this.data.name;
    }
    public get hexCode():string{
        return this.hexColorValueObject.Value;
    }
    public get hexColorObject():hexColor{
        return this.hexColorValueObject;
    }
    public get createdAt():Date|undefined{
        return this.data.createdAt;
    }
    public get updatedAt():Date|undefined{
        return this.data.updatedAt;
    }
    public getRGB():string{
        return this.hexColorValueObject.toRGB();
    }
    // methods
    public updateHexCode(newHexCode:string):void{
        this.hexColorValueObject = hexColor.create(newHexCode);
        this.data.hexCode = this.hexColorValueObject.Value;
    }
    public toJSON():ColorData{
        return {...this.data};
    }
}