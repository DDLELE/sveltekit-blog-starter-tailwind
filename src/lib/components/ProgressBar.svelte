<script>
	import { onMount } from 'svelte';
	onMount(() => {
		/* Progress bar */
		//Source: https://alligator.io/js/progress-bar-javascript-css-variables/
		var h = document.documentElement,
			b = document.body,
			st = 'scrollTop',
			sh = 'scrollHeight',
			progress = document.querySelector('#progress'),
			scroll;

		const reactToScroll = function () {
			/*Refresh scroll % width*/
			scroll = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
			progress.style.setProperty('--scroll', scroll + '%');
		};
		reactToScroll();
		setTimeout(() => reactToScroll, 100);

		document.addEventListener('scroll', reactToScroll);
	});
</script>

<div
	id="progress"
	class="h-[0.20rem] mb-[0.2rem] sticky z-[31] top-0 border-bdark:border-stone-800 border-gray-100 bg-stone-600"
	style="background:linear-gradient(to right, #ddd var(--scroll), transparent 0);"
/>
