<!-- This is the global layout file; it "wraps" every page on the site. (Or more accurately: is the parent component to every page component on the site.) -->
<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { currentPage, isMenuOpen } from '$lib/assets/js/store';
	import { navItems } from '$lib/config';
	import { preloadCode } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	export let data;

	const transitionIn = { delay: 150, duration: 150 };
	const transitionOut = { duration: 100 };

	export const prerender = true;

	/**
	 * This pre-fetches all top-level routes on the site in the background for faster loading.
	 * https://kit.svelte.dev/docs/modules#$app-navigation-preloaddata
	 *
	 * Any route added in src/lib/config.js will be preloaded automatically. You can add your
	 * own preloadData() calls here, too.
	 **/

	onMount(() => {
		const navRoutes = navItems.map((item) => item.route);
		preloadCode(...navRoutes);

		/* Progress bar */
		//Source: https://alligator.io/js/progress-bar-javascript-css-variables/
		var h = document.documentElement,
			b = document.body,
			st = 'scrollTop',
			sh = 'scrollHeight',
			progress = document.querySelector('#progress'),
			scroll;
		var scrollpos = window.scrollY;
		var header = document.getElementById('header');
		var navcontent = document.getElementById('nav-content');
	
		const reactToScroll = function () {
			/*Refresh scroll % width*/
			scroll = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
			progress.style.setProperty('--scroll', scroll + '%');

			/*Apply classes for slide in bar*/
			scrollpos = window.scrollY;

			if (scrollpos > 10) {
				header.classList.add('bg-white');
				header.classList.add('dark:bg-gray-900');
				header.classList.remove('dark:bg-gray-800');
				header.classList.add('shadow');
				navcontent.classList.add('bg-white');
				navcontent.classList.add('dark:bg-gray-900');
				navcontent.classList.remove('bg-green-100');
			} else {
				header.classList.remove('bg-white');
				header.classList.add('dark:bg-gray-800');
				header.classList.remove('dark:bg-gray-900');
				header.classList.remove('shadow');
				navcontent.classList.remove('bg-white');
				navcontent.classList.remove('dark:bg-gray-900');
				navcontent.classList.add('bg-green-100');
			}
		}
		reactToScroll()

		document.addEventListener('scroll', 
			reactToScroll);

		//Javascript to toggle the menu
		document.getElementById('nav-toggle').onclick = function () {
			document.getElementById('nav-content').classList.toggle('hidden');
		};
	});

</script>

<!-- 
	The below markup is used on every page in the site. The <slot> is where the page's
	actual contents will show up.
-->
<div>
	<div class="min-h-[100vh] bg-gray-100 dark:bg-gray-800 pb-10">
		<Header />
	<div class="container w-full md:max-w-4xl mx-auto pt-20">
		{#key data.path}
			<main id="main" tabindex="-1" in:fade={transitionIn} out:fade={transitionOut}>
				<slot />
			</main>
		{/key}
	</div>
	</div>
	<Footer />
</div>

