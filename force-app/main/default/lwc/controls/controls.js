import { LightningElement } from 'lwc';

export default class Controls extends LightningElement {
    handleSubtract(event){
        const factor = event.target.dataset.factor;
        this.dispatchEvent(new CustomEvent('subtract', {
          detail: factor
        }));
    }
   
    handleAdd(event){
        const factor = event.target.dataset.factor;
        this.dispatchEvent(new CustomEvent('add', {
          detail: factor
        }));
    }
   
    handleMultiply(event) {
        const factor = event.target.dataset.factor;
        this.dispatchEvent(new CustomEvent('multiply', {
          detail: factor
        }));
      }
}