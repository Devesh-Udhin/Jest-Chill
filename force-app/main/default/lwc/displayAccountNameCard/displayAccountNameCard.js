import { LightningElement, api } from 'lwc'

export default class DisplayAccountNameCard extends LightningElement {
    @api height
    @api backgroundColor
    accountName

    connectedCallback () {
        this.template.addEventListener('accountchange', (event) => {
            this.accountName = event.detail.name
        })
    }
}
