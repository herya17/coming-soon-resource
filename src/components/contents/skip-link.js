class SkipLink extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
			<a href="#root" class="skip-link">Skit to content</a>
		`;
	}
}

customElements.define("skip-link", SkipLink);
