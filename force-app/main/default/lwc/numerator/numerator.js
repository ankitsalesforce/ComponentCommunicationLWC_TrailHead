import { LightningElement,api } from 'lwc';

export default class Numerator extends LightningElement {
    //@api counter = 0;
    _currentCount = 0;
    priorCount = 0;
    
    handleIncrement() {
      this.counter++;
    }
    handleDecrement() {
      this.counter--;
    }
    handlemultiply(){
        this.counter=this.counter * this.counter;
    }

    @api
    maximizeCounter() {
      this.counter += 1000000;
    }

    
    @api
    get counter() {
      return this._currentCount;
    }
    set counter(value) {
      this.priorCount = this._currentCount;
      this._currentCount = value;
    }
}