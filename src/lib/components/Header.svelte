<script>
	import { siteTitle } from '$lib/config';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	const focusMain = () => {
		const main = document.querySelector('main');
		main.focus();
	};

	const formatCurrentPage = (element, currentPath) => {
		if(!currentPath) return ""
		if(currentPath.includes(element))
		{
			return  'font-bold text-gray-800 no-underline dark:text-gray-100'
		} 
		else return 'text-gray-600 hover:text-gray-800 hover:text-underline dark:text-gray-400 hover:dark:text-gray-100'
	}

	let headerClassesTop = "bg-gray-100 dark:bg-stone-800"
	let headerClassesBottom = "bg-white dark:bg-stone-900"
	let currentClasses = headerClassesTop
	let isMenuClosed = true

	const toggleMenu = () => {
		isMenuClosed = !isMenuClosed
		// console.log(isMenuClosed)
	}

	onMount(()=> {
				/* Progress bar */
		//Source: https://alligator.io/js/progress-bar-javascript-css-variables/
		var h = document.documentElement,
			b = document.body,
			st = 'scrollTop',
			sh = 'scrollHeight',
			progress = document.querySelector('#progress'),
			scroll;
		var scrollpos = window.scrollY;
	
		const reactToScroll = function () {
			/*Refresh scroll % width*/
			scroll = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
			progress.style.setProperty('--scroll', scroll + '%');

			/*Apply classes for slide in bar*/
			scrollpos = window.scrollY;

			// when lower
			if (scrollpos > 10) {
				currentClasses = headerClassesBottom
			} 
			// when at top
			else {
				currentClasses = headerClassesTop
			}
		}
		reactToScroll()
		setTimeout(()=>reactToScroll, 100)

		document.addEventListener('scroll', reactToScroll);
	})
	
</script>

<header id="header" class="fixed w-full z-20 top-0 dark:text-gray-100 shadow-lg {currentClasses}">

	<div class="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-2 pt-[0.8rem]">
		<div class="pl-9">
			<a href="/" class="hover:no-underline">
				<h1 class="my-0 text-gray-800 dark:text-gray-100 text-xl no-underline hover:no-underline font-extrabold" href="/">
					{siteTitle}
				</h1></a>
		</div>

		<div class="block lg:hidden pr-4">
			<button
				id="nav-toggle"
				class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-green-500 appearance-none hover:dark:text-white focus:outline-none hover:shadow-lg"
			 on:click={()=>{toggleMenu()}}>
				<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
				</svg>
			</button>
		</div>

		<div
			class="w-full flex-grow lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20 {currentClasses}" class:hidden={isMenuClosed}
			id="nav-content"
		>
			<ul class="list-reset lg:flex justify-end flex-1 items-center mr-4 list-none ml-5">
				<li class="mr-3">
					<a
						class="inline-block py-2 px-4 {formatCurrentPage("/post", $page.url.pathname)}"
						href="/post">Posts</a
					>
				</li>
				<li class="mr-3">
					<a
						class="inline-block  py-2 px-4 {formatCurrentPage("/about", $page.url.pathname)}"
						href="/about">About</a
					>
				</li>
				<li class="mr-3">
					<a
						class="inline-block  py-2 px-4 {formatCurrentPage("/contact", $page.url.pathname)}"
						href="/contact">Contact</a
					>
				</li>
			</ul>
		</div>
	</div>
	<div
	id="progress"
	class="h-[0.30rem] z-20 top-0 border-b dark:border-stone-800 border-gray-100 bg-emerald-600"
	style="background:linear-gradient(to right, rgb(5 150 105 /1) var(--scroll), transparent 0);"
/>
</header>

<style lang="postcss">
</style>
