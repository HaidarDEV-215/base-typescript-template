//   ============================ hex color value object =============================

export class hexColor{
    private readonly value:string;//more seafty
    private constructor (hexCode:string){
        this.value = hexCode;
    }
    //factory method 
    public static create(hexCode:string):hexColor{
        if(!hexCode || hexCode.trim().length === 0) {
            throw new Error("hex color cannot be empty");
        }
        const trimmed = hexCode.trim();
        const hexRegular_x3 = /^#[0-9A-F]{3}$/i;  // regular exprition template  
        // start with #, values [0,9] or [A,F] for each character, {length} $/:end  i: ignore case
        const hexRegular_x6 = /^#[0-9A-F]{6}$/i;
        let normalizationHex:string;
        if(hexRegular_x3.test(trimmed)){// is (trimmed) pass the test? check correctness by template
            const R = trimmed[1];
            const G = trimmed[2];
            const B = trimmed[3];
            normalizationHex = `#${R}${R}${G}${G}${B}${B}`.toUpperCase();
        }
        else  if (hexRegular_x6.test(trimmed)){
            normalizationHex = trimmed.toUpperCase();
        }
        else{
            throw new Error("invalid hex color format. Must be #RGB or #RRGGBB");
        }
        return new hexColor(normalizationHex);
    }
    //getters
    public get Value():string{
        return this.value;
    }
    public getRed():number{
        return parseInt(this.value.substring(1,3),16);
    }
    public getGreen():number{
        return parseInt(this.value.substring(3,5),16);
    }
    public getBlue():number{
        return parseInt(this.value.substring(5,7),16);
    }
    // #FF0000
    // rgb(255,0,0)
    public toRGB():string{
        return `rgb(${this.getRed()},${this.getGreen()},${this.getBlue()})`;
    }
    public equals(other:hexColor):boolean{
        return this.value === other.value;
    }
    public toString():string{
        return this.value;
    }
}