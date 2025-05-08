import { createElement } from '@lwc/engine-dom';
import DisplayAccountNameButton from 'c/displayAccountNameButton';

describe('c-display-account-name-button', () => {
    let element

    beforeEach(() => {
        element = createElement('c-display-account-name-button', {
            is: DisplayAccountNameButton
        })

        document.body.appendChild(element)
    })

    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    })

    it('mock function that retrieves accounts', () => {
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    })

    it('correctly dispatches event (listen to event that is being dispatched)', () => {

    })
})
