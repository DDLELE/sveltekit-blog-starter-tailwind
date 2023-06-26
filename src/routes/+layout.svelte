<!-- This is the global layout file; it "wraps" every page on the site. (Or more accurately: is the parent component to every page component on the site.) -->
<script>
	import ProgressBar from './../lib/components/ProgressBar.svelte';
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { currentPage, isMenuOpen } from '$lib/assets/js/store';
	import { navItems } from '$lib/config';
	import { preloadCode } from '$app/navigation';
	import { afterUpdate, onMount } from 'svelte';
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
	});

	afterUpdate(() => {
		// console.log("after update")
		const svgClasses = 'w-full h-full p-1';
		const normalClasses = 'text-gray-500 dark:text-gray-300 ';
		const normalClassesBorder = 'border-gray-300 dark:border-gray-700 ';
		const normalClassesBg = 'bg-gray-100 dark:bg-gray-900 ';
		const normalClassesHover =
			'hover:text-gray-500 hover:dark:text-gray-200 hover:bg-white hover:dark:bg-gray-800 ';
		const svgClassesConfirm = 'text-green-500 border-green-500';

		const copySvg = `<svg class="${svgClasses} ${normalClasses}"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="8" y="8" width="12" height="12" rx="2" />  <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" /></svg>`;
		const checkSvg = `<svg class="${svgClasses} ${svgClassesConfirm}"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="20 6 9 17 4 12" /></svg>`;

		const codes = document.getElementsByTagName('pre');
		for (const codeBlock of codes) {
			// skip if a copy button exists
			if (codeBlock.getElementsByTagName('div').length > 0) continue;

			codeBlock.className = codeBlock.className + ' relative flex flex-row justify-between ';

			let copyContainer = document.createElement('div');
			copyContainer.className = 'sticky z-10 top-0 right-0 flex flex-row h-7 items-center ';
			let copyButton = document.createElement('div');
			copyContainer.append(copyButton);

			copyButton.addEventListener('click', () => {
				copyButton.innerHTML = checkSvg;

				// copyButton.before(copyTextObj)
				copyButton.className = copyButton.className.replace(
					normalClassesBorder,
					'border-green-500 '
				);
				copyButton.setAttribute('title', 'Copied');

				setTimeout(() => {
					copyButton.innerHTML = copySvg;
					copyButton.className = copyButton.className.replace(
						'border-green-500 ',
						normalClassesBorder
					);
					// copyContainer.removeChild(copyTextObj)
				}, 1500);
				navigator.clipboard.writeText(codeBlock.innerText);
			});

			copyButton.setAttribute('title', 'Copy the code');

			copyButton.innerHTML = copySvg;
			copyButton.className = 'min-w-[1.75rem] min-h-[1.75rem] h-7 w-7 ';
			copyButton.className += `shadow-xl rounded-md cursor-pointer ${normalClasses} ${normalClassesBg} ${normalClassesHover} ${normalClassesBorder}`;
			copyButton.className += 'border';
			codeBlock.appendChild(copyContainer);
		}
	});
</script>

<!-- 
	The below markup is used on every page in the site. The <slot> is where the page's
	actual contents will show up.
-->
<div>
	<div class="min-h-[100vh] bg-gray-100 dark:bg-stone-800 pb-10 cool-bg">
		<ProgressBar/>
		<Header />
		<div class="container w-full max-w-4xl mx-auto pt-20 pb-16 px-8">
			{#key data.path}
				<main id="main" tabindex="-1" in:fade={transitionIn} out:fade={transitionOut}>
					<slot />
				</main>
			{/key}
		</div>
	</div>
	<Footer />
</div>

<style>
</style>
