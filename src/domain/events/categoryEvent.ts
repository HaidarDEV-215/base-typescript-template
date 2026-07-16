import { DomainEvent } from "./base/domainEvent";

export class CategoryCreatedEvent extends DomainEvent{
    constructor(public readonly CategoryId : number, public readonly CategoryName:string){
        super("categoryCreated");
    }
    protected getEventData(){
        return{
            CategoryId:this.CategoryId,
            CategoryName:this.CategoryName
        }
    }
}
// open closed principle : we add new feature class rather than modify old one upthere
export class CategoryNameChanged extends DomainEvent{
    constructor(
        public readonly CategoryId : number,
        public readonly OldCategoryName:string,
        public readonly NewCategoryName:string){
        super("categorNameChanged");
    }
    protected getEventData(){
        return{
            CategoryId:this.CategoryId,
            OldCategoryName:this.OldCategoryName,
            NewCategoryName:this.NewCategoryName
        }
    }
}