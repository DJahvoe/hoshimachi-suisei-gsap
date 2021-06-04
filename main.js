gsap.to('.overlay h1', 2, {
	opacity: 0,
	y: -60,
	ease: Expo.easeInOut,
});

gsap.to('.overlay span', 2, {
	delay: 0.3,
	opacity: 0,
	y: -60,
	ease: Expo.easeInOut,
});

gsap.to('.overlay', 2, {
	delay: 1,
	top: '-100%',
	ease: Expo.easeInOut,
});

gsap.from('.ellipse-container', 1, {
	delay: 2,
	opacity: 0,
	ease: Expo.easeInOut,
});

gsap.from('.blue', 1, {
	delay: 3.5,
	opacity: 0,
	ease: Expo.easeInOut,
});

gsap.from('.circle1', 1, {
	delay: 2.4,
	opacity: 0,
	ease: Expo.easeInOut,
});

gsap.from('.circle2', 1, {
	delay: 2.6,
	opacity: 0,
	ease: Expo.easeInOut,
});

gsap.from('.logo', 1, {
	delay: 3,
	opacity: 0,
	y: -100,
	ease: Expo.easeInOut,
});

gsap.from('.menu-links ul li', 1, {
	delay: 3.2,
	opacity: 0,
	x: -100,
	ease: Expo.easeInOut,
	stagger: 0.08,
});

gsap.from('.scrolldown', 1, {
	delay: 3.4,
	opacity: 0,
	y: 100,
	ease: Expo.easeInOut,
});

gsap.from('.text .title', 1, {
	delay: 3,
	opacity: 0,
	x: 200,
	ease: Expo.easeInOut,
});

gsap.from('.text p', 1, {
	delay: 3.2,
	opacity: 0,
	x: 200,
	ease: Expo.easeInOut,
});

gsap.from('.watchnow', 1, {
	delay: 3.4,
	opacity: 0,
	x: 200,
	ease: Expo.easeInOut,
});

gsap.from('.media ul li', 1, {
	delay: 3,
	opacity: 0,
	y: 100,
	ease: Expo.easeInOut,
	stagger: 0.08,
});
