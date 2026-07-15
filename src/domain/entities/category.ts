// ======  Category Entity = Domain modele
// 1. interface

export interface CategoryData{
    id? :number | undefined; // it's optional because it generates automaticly by database
    name : string;
    createdAt?: Date| undefined;
    updatedAt?:Date|undefined;
}

export class Category{
    private constructor (private data:CategoryData){
        this.validate();
    }
    private validate():void{
        this.validateName(this.data.name);
    }
    //validation
    private validateName(name:string):void{
        if(!this.data.name|| this.data.name.trim().length ===0)
        {
            throw new Error ("Category name is required");
        }
        if(this.data.name.trim().length < 2)
        {
            throw new Error ("Category name must be at least two character");
        }
        if(this.data.name.trim().length > 100)
        {
            throw new Error ("Category name connot exceed 100 character");
        }
        this.data.name = name;
    }
    //4. factory method
    public static create(data:CategoryData):Category{
       return new Category(data);
    }
    //5. getters
    public getID():number|undefined{
        return this.data.id;
    }
    public getName():string{
        return this.data.name;
    }
    public getCeratedAt():Date|undefined{
        return this.data.createdAt;
    }
    public getUpdatedAt():Date|undefined{
        return this.data.updatedAt;
    }
    // modern way to write getters in typescript
    // to invoke in main type ( console.log (mycategory.id); ,,,,, console.log(mycategory.name);)
    /*
    public get id():number|undefined{
        return this.data.id;
    }
    public get name():string{
        return this.data.name;
    }
    public get ceratedAt():Date|undefined{
        return this.data.createdAt;
    }
    public get updatedAt():Date|undefined{
        return this.data.updatedAt;
    }
    */
    //6. buisness logic
    public updateName(newName : string):void{
        this.validateName(newName);
        this.data.name = newName.trim();
    }
    public isNew():boolean{
        return this.data.id === undefined;
    }



    // public toJSON():CategoryData{
    //     return {
    //         id:this.data.id,
    //         name:this.data.name,
    //         createdAt:this.data.createdAt,
    //         updatedAt:this.data.updatedAt
    //     }
    // }
    public toJSON():CategoryData{
        return{...this.data};
    }
}