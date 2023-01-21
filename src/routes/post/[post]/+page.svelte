<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script>
	import Img from "$lib/components/Img.svelte";


	export let data;

	const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories, coverImageAlt } =
		data.meta;
</script>


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
	class="w-full pt-4 text-xl text-gray-800 leading-normal overflow-auto"
>
	<!--Title-->
	<div class="font-sans">
		<p class="text-base md:text-sm text-green-500 font-bold">
			&lt; <a
				href="/post"
				class="text-base md:text-sm text-green-500 font-bold no-underline hover:underline"
				>ALL POSTS</a
			>
		</p>
		<h1 class="font-sans break-normal text-gray-800 dark:text-gray-100">
			{title}
		</h1>
		<p class="text-sm md:text-base font-normal text-gray-600 dark:text-gray-100">Published: {date}</p>
		<p class="text-sm md:text-base font-normal text-gray-600 dark:text-gray-100">Updated: {updated}</p>
	</div>

	<!-- You might want to add an alt frontmatter attribute. If not, leaving alt blank here works, too. -->
	  
	<Img
		loading="lazy" decoding="async"
		classes="rounded my-6 p-0 mx-0 w-full"
		src={coverImage}
		alt="{coverImageAlt}"
		style="aspect-ratio: {coverWidth} / {coverHeight};"
		width={coverWidth}
		height={coverHeight}
	/>
	
	<!--Post Content-->

	{@html data.PostContent}

	{#if categories}
	<div class="text-xl md:text-md text-gray-500 py-6">
		Tags:
		<div class="flex flex-row flex-wrap">
		{#each categories as category}
			<a class="text-xl md:text-md dark:bg-teal-900 bg-teal-100 border-teal-300 dark:border-teal-800 border-2 px-2 mr-1 mt-1" href="/post/category/{category}/">
				{category}
			</a>
			{/each}
		</div>
	</div>
	{/if}
</article>
