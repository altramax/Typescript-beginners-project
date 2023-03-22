// using modules in typescript
import { Hasformatter} from "../interface/Hasformatter.js"
export class Payment implements Hasformatter {
   constructor(
      public recipient : string,
      private details: string,
      readonly amount: number
     ){
    
     }
  
     format(){
      return `${this.recipient} is owed ₤${this.amount} for ${this.details}`
     }
  }