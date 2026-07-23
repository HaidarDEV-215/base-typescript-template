export abstract class DomainEvent{
    public readonly occurredOn:Date;
    constructor(public readonly eventName:string){
        this.occurredOn = new Date();
    }

    protected abstract getEventData():Record<string,any>;// why Record ?
    // because event data should be ab object record <key is string : value is any type>
    
    public toJSON():object{//why object?
        //what is differance bitween object return type and Record.
        return{
            eventName:this.eventName,
            accurredOn:this.occurredOn,
            data:this.getEventData() // to be scalable(geniric body type{data}).
        }
    }
}
//getEventData 
//                    {string , any}
//userCreatedEvent -> {uderId,email}
//OrderPlacedEvent -> {orderId. total}