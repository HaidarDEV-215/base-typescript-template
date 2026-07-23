import { DomainEvent } from "./base/domainEvent.js";
export class CategoryCreatedEvent extends DomainEvent {
    CategoryId;
    CategoryName;
    constructor(CategoryId, CategoryName) {
        super("categoryCreated");
        this.CategoryId = CategoryId;
        this.CategoryName = CategoryName;
    }
    getEventData() {
        return {
            CategoryId: this.CategoryId,
            CategoryName: this.CategoryName
        };
    }
}
// open closed principle : we add new feature class rather than modify old one upthere
export class CategoryNameChanged extends DomainEvent {
    CategoryId;
    OldCategoryName;
    NewCategoryName;
    constructor(CategoryId, OldCategoryName, NewCategoryName) {
        super("categorNameChanged");
        this.CategoryId = CategoryId;
        this.OldCategoryName = OldCategoryName;
        this.NewCategoryName = NewCategoryName;
    }
    getEventData() {
        return {
            CategoryId: this.CategoryId,
            OldCategoryName: this.OldCategoryName,
            NewCategoryName: this.NewCategoryName
        };
    }
}
