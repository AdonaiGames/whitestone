import { define } from '../application/components.js';
import { Component } from './component.js';

export class Engine extends Component {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'closed' });
        //shadow.appendChild(template.content.cloneNode(true));
    }

    static get observedAttributes() {
        return ['disabled'];
    }

    get enabled() {
        return !this.hasAttribute('disabled');
    }

    connectedCallback() {
        //Added to DOM.
    }

    disconnectedCallback() {
        //Removed from DOM.
    }

    attributeChangedCallback(name, previous, current) {
        //Called when an observed attribute (observableAttributes) is added/removed/updated/replaced.
    }

    adoptedCallback() {
        //Moved into a new document via adoptNode().
    }
}

define('engine', Engine);