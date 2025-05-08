import { LightningElement, api } from 'lwc'

export default class DisplayAccountNameCard extends LightningElement {
    @api height
    @api buttonLabel
    accountName

    connectedCallback () {
        window.addEventListener('accountchange', (event) => {
            this.accountName = event.detail.name
        })
    }

    get heightValue () {
        return `height:${this.height <= 300 ? this.height : 300}px;`
    }
}
