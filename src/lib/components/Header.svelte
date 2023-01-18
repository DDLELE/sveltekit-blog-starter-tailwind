<script>
	import MainNav from './MainNav.svelte';
	import HamburgerMenuButton from './HamburgerMenuButton.svelte';
	import { siteTitle } from '$lib/config';
	import { page } from '$app/stores';

	const focusMain = () => {
		const main = document.querySelector('main');
		main.focus();
	};

	const formatCurrentPage = (element, currentPath) => {
		if(!currentPath) return ""
		if(currentPath.includes(element))
		{
			return  'font-bold text-gray-900 no-underline dark:text-white'
		} else return 'text-gray-600 hover:text-gray-900 hover:text-underline dark:gray-100'
	}
	
</script>

<header id="header" class="fixed w-full z-10 top-0  dark:text-white">
	<div
		id="progress"
		class="h-1 z-20 top-0"
		style="background:linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0);"
	/>

	<div class="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
		<div class="pl-4">
			<a href="/" class="hover:no-underline">
				<h1 class="my-0 text-gray-900 dark:text-white text-xl no-underline hover:no-underline font-extrabold" href="/">
					{siteTitle}
				</h1></a>
		</div>

		<div class="block lg:hidden pr-4">
			<button
				id="nav-toggle"
				class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-green-500 appearance-none focus:outline-none"
			>
				<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
				</svg>
			</button>
		</div>

		<div
			class="w-full flex-grow lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20"
			id="nav-content"
		>
			<ul class="list-reset lg:flex justify-end flex-1 items-center">
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
</header>

<style lang="postcss">
</style>
