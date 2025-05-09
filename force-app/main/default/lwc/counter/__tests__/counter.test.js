import { createElement } from '@lwc/engine-dom';
import Counter from 'c/counter';
import getName from '@salesforce/apex/CounterController.getName'

jest.mock(
    '@salesforce/apex/CounterController.getName',
    () => {return { default: jest.fn() } },
    { virtual: true }
)

describe('c-counter', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    })

    function flushPromises () {
        return new Promise(jest.requireActual('timers').setImmediate)
    }

    it('Card title displays record name', async () => {
        getName.mockResolvedValue('Tommy')
        const element = createElement('c-counter', {
            is: Counter
        })

        document.body.appendChild(element)

        await flushPromises()
        const div = element.shadowRoot.querySelector('div.title');
        expect(div.textContent).toBe('Tommy')
    })

    it('increments counter when clicking on add button', async () => {
        const element = createElement('c-counter', {
            is: Counter
        })
        document.body.appendChild(element)

        const addButon = element.shadowRoot.querySelector('.add-btn')
        addButon.click()
        addButon.click()

        await flushPromises()
        const p = element.shadowRoot.querySelector('p')
        expect(p.textContent).toBe('Counter: 2')
    })

    it('decrements counter when clicking on subtract button', async () => {
        const element = createElement('c-counter', {
            is: Counter
        })
        document.body.appendChild(element)

        const subtractButon = element.shadowRoot.querySelector('.subtract-btn')
        subtractButon.click()

        await flushPromises()
        // const p = element.shadowRoot.querySelector('p')
        expect(element.count).toBe(-1)
    })

    it('sets counter background color', async () => {
        const element = createElement('c-counter', {
            is: Counter
        })
        document.body.appendChild(element)



        await flushPromises()
        const counterDiv = element.shadowRoot.querySelector('.slds-box')
        expect(counterDiv.style.backgroundColor).toBe('red')
    })
})