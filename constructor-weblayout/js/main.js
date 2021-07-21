/*
new Swiper('.swiper-container', {
	loop: true,
	navigation: {
		nextEl: '.arrow',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20
		},
		541: {
			slidesPerView: 2,
			spaceBetween: 40
		}
	}
});

const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.header');
menuButton.addEventListener('click', function () {
	menuButton.classList.toggle('menu-button-active');
	menu.classList.toggle('header-active');
})
*/
const getElement = (tagName, classNames) => {
	const element = document.createElement(tagName);

	if (classNames) {
		element.classList.add(...classNames);
	}
	return element;
};

const createHeader = (param) => {
	const header = getElement('header');
	const container = getElement('div', ['container'])
	const wrapper = getElement('div', ['header']);

	header.append(container);
	container.append(wrapper);

	return header;
};

const movieConstructor = (selector, options) => {

	const app = document.querySelector(selector);

	if (options.header) {
		app.append(createHeader(options.header));
	}
	
};

movieConstructor('.app', {
	title: 'Ведьмак',
	header: {
		logo: ''
	} 
});