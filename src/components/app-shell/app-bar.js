import data from "../../data/data";

class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="app-bar">
                <p class="app-bar__brand">${data.title}</p>
            </div>
        `;
    }
}

customElements.define("app-bar", AppBar);
