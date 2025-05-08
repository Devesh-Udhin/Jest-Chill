import { createElement } from '@lwc/engine-dom';
import DisplayAccountNameCard from 'c/displayAccountNameCard';

describe('c-display-account-name-card', () => {
    let element;

    beforeEach(() => {
        element = createElement('c-display-account-name-card', {
            is: DisplayAccountNameCard
        })
        document.body.appendChild(element);
    })

    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    })

    it('checks styling', () => {
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    })

    it('correctly listen to events (must dispatch an event)', () => {

    })
})
