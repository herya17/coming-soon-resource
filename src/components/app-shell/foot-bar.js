import data from "../../data/data";

class FootBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        const year = new Date().getFullYear();

        this.innerHTML = `
            <div class="foot-bar">
                <p class="foot-bar__brand">Website by <a href="https://herya.netlify.app">${data.footer}</a>.</p>
                <p class="foot-bar__copyright">&copy; ${year} All Right Reserved.</p>
            </div>
        `;
    }
}

customElements.define("foot-bar", FootBar);
