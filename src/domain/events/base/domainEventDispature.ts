import { DomainEvent } from "./domainEvent"
// allarm to tell all that event had been accurred !
export class DomainEventDispatcher{
                              // <key:name of event{string} , value:array of functions{for each event}>
    private static handlers : Map<string,Array<(event:DomainEvent)=>void>> = new Map();
    
    // register : when event happend (LISTEN FROM DISPATCHER), then do handlers
    public static register <T extends DomainEvent> (eventName:string, handler:(event:T)=>void):void{
        if (!this.handlers.has(eventName)){
            this.handlers.set(eventName,[]);
        }
        this.handlers.get(eventName)!.push(handler as (event : DomainEvent)=>void);
    }
    // dispatcher : whrn event happend brodcast it.
    public static dispatch (event:DomainEvent):void{
        console.log(`🚀Event fired : ${event.eventName}`);
        const handlersStack = this.handlers.get(event.eventName);
        // to bring handlers array from Map using 
        // ((_MapName.get(_KeyName'string')))
        // and store them into handlerStack variable.
        if(handlersStack){
                        //for each function (handler) revoke this handler
            handlersStack.forEach(handler => handler(event));
        }
    }
}

/*
export class DomainEventDispatcher{
                              // <key:name of event{string} , value:array of functions{for each event}>
    private static handlers : Map<string,Array<(event:DomainEvent)=>void>> = new Map();
    
    
    public static register (eventName:string, handler:(event:DomainEvent)=>void):void{
        if (!this.handlers.has(eventName)){
            this.handlers.set(eventName,[]);
        }
        this.handlers.get(eventName)!.push(handler);
    }
    public static dispatch (event:DomainEvent):void{
        console.log(`🚀Event fired : ${event.eventName}`);
        const handlers = this.handlers.get(event.eventName);
        if(handlers){
            handlers.forEach(handler => handler(event));
        }
    }
}
*/
/*
//exaple 
handler dataType : map=> 
{
// key (event name)  :     value (event's functions array-object)

UserCreated          : [ sendWelcomeEmail , logUserCreation ],
OrderPaidEvent       : [ sendInvoice , updateAccounting ],
CategoryCreated      : [ clearCategoryCache ]
}
*/