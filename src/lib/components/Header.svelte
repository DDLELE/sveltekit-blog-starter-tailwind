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
	
</script>

<header id="header" class="w-full z-20 top-0 dark:text-gray-100 {currentClasses}">

	<div class="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-2 pt-[0.8rem]">
		<div class="pl-9">
			<a href="/" class="hover:no-underline">
				<h1 class="my-0 text-gray-800 dark:text-gray-100 text-4xl no-underline hover:no-underline font-extrabold" href="/">
					{siteTitle}
				</h1></a>
		</div>

		<div class="block lg:hidden pr-4">
			<button
				id="nav-toggle"
				class="flex items-center px-3 py-3 rounded text-gray-500 transition-all hover:bg-zinc-800 focus:outline-none shadow outline-none"
			 on:click={()=>{toggleMenu()}}>
				<svg class="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
						href="/post" on:click={()=>{toggleMenu()}}>Posts</a
					>
				</li>
				<li class="mr-3">
					<a
						class="inline-block  py-2 px-4 {formatCurrentPage("/about", $page.url.pathname)}"
						href="/about" on:click={()=>{toggleMenu()}}>About</a
					>
				</li>
				<li class="mr-3">
					<a
						class="inline-block  py-2 px-4 {formatCurrentPage("/contact", $page.url.pathname)}"
						href="/contact" on:click={()=>{toggleMenu()}}>Contact</a
					>
				</li>
			</ul>
		</div>
	</div>
</header>

<style lang="postcss">
</style>
