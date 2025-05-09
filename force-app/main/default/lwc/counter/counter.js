import { LightningElement, api } from 'lwc'
import getName from '@salesforce/apex/CounterController.getName'

export default class Counter extends LightningElement {
    @api recordId
    @api bgColor = 'red'
    cardTitle
    @api count = 0

    connectedCallback () {
        this.getRecordName()
    }

    get backgroundColor () {
        return `background-color:${this.bgColor}`
    }

    async getRecordName () {
        this.cardTitle = await getName({ recordId: this.recordId })
    }

    handleSubtractButton () {
        this.count--
    }

    handleAddButton () {
        this.count++
    }
}
