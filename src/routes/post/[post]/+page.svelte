<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script>
	export let data;

	const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories } =
		data.meta;
</script>

<style lang="postcss">
	@tailwind base;
	@tailwind components;

</style>


<svelte:head>
	<!-- Be sure to add your image files and un-comment the lines below -->
	<title>{title}</title>
	<meta data-key="description" name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	<!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />
	<!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>

<article
	class="w-full px-4 py-6 md:px-6 text-xl text-gray-800 leading-normal overflow-auto"
>
	<!--Title-->
	<div class="font-sans">
		<p class="text-base md:text-sm text-green-500 font-bold">
			&lt; <a
				href="/post"
				class="text-base md:text-sm text-green-500 font-bold no-underline hover:underline"
				>BACK TO BLOG</a
			>
		</p>
		<h1 class="font-sans break-normal text-gray-900 dark:text-gray-100">
			{title}
		</h1>
		<p class="text-sm md:text-base font-normal text-gray-600 dark:text-gray-100">Published: {date}</p>
		<p class="text-sm md:text-base font-normal text-gray-600 dark:text-gray-100">Updated: {updated}</p>
	</div>

	<!-- You might want to add an alt frontmatter attribute. If not, leaving alt blank here works, too. -->
	<img
		class="my-7 rounded-sm"
		src={coverImage}
		alt=""
		style="aspect-ratio: {coverWidth} / {coverHeight};"
		width={coverWidth}
		height={coverHeight}
	/>

	<!--Post Content-->

	{@html data.PostContent}

	{#if categories}
	<div class="text-xl md:text-md text-gray-500 py-6">
		<div class="flex flex-row">
		Tags:
		{#each categories as category}
			<a class="text-xl md:text-md dark:bg-teal-900 bg-teal-100 border-teal-300 dark:border-teal-800 border-2 px-2 mx-2" href="/post/category/{category}/">
				{category}
			</a>
			{/each}
		</div>
	</div>
	{/if}
</article>
