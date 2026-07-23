export class DomainEvent {
    eventName;
    occurredOn;
    constructor(eventName) {
        this.eventName = eventName;
        this.occurredOn = new Date();
    }
    // because event data should be ab object record <key is string : value is any type>
    toJSON() {
        //what is differance bitween object return type and Record.
        return {
            eventName: this.eventName,
            accurredOn: this.occurredOn,
            data: this.getEventData() // to be scalable(geniric body type{data}).
        };
    }
}
//getEventData 
//                    {string , any}
//userCreatedEvent -> {uderId,email}
//OrderPlacedEvent -> {orderId. total}
