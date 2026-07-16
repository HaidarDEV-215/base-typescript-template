export abstract class DomainEvent{
    public readonly accurredOn:Date;
    constructor(public readonly eventName:string){
        this.accurredOn = new Date();
    }
    protected abstract getEventData():Record<string,any>;// why Record ?
    
    public toJSON():object{
        return{
            eventName:this.eventName,
            accurredOn:this.accurredOn,
            data:this.getEventData() // to be scalable(geniric body type{data}).
        }
    }
}
//                    {string , any}
//userCreatedEvent -> {uderId,email}
//OrderPlacedEvent -> {orderId. total}