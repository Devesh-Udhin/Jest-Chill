import { LightningElement } from 'lwc'
import getMyAccounts from '@salesforce/apex/DisplayAccountController.getMyAccounts'

export default class DisplayAccountNameButton extends LightningElement {
    currentAccountName
    accountList = []
    count

    connectedCallback () {
        this.count = 0
        this.fetchAccounts()
    }

    async fetchAccounts () {
        this.accountList = await getMyAccounts()
    }

    dispatchNextAccountEvent () {
        this.currentAccountName = this.accountList[this.count].Name
        this.count = (this.count + 1) % 4

        this.dispatchEvent(new CustomEvent('accountchange', {
            detail: { name: this.currentAccountName },
            bubbles: true,
            composed: true
        }))
    }
}
