<script>
	import Img from "./Img.svelte";

	export let posts = []
</script>


{#each posts as post}
<a href="/post/{post.slug}" class="hover:no-underline">
<article class="h-full w-full bg-gray-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0  shadow-lg hover:shadow-2xl my-10 cursor-pointer">
	<div class="">
		<div class="lg:-mx-6 lg:flex lg:items-center">
			<Img classes="object-cover w-full lg:mx-6 rounded h-72 lg:h-96" pictureClasses="lg:w-1/2" src={post.coverImage}
			alt=""
			/>

			<div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 pb-6 px-6">
				<tags class="text-sm text-blue-500 uppercase flex flex-row flex-wrap">
					{#each post.categories as category}
					<a class="text-blue-500" href="/post/category/{category}/">
						<tag class="mr-3">
						{category}
						</tag>
					</a>
					{/each}
				</tags>

				<a href="/post/{post.slug}" class="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-gray-100 md:text-3xl">
					{post.title}
				</a>

				<p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
					{post.excerpt}
				</p>

				<a href="/post/{post.slug}" class="inline-block mt-2 text-blue-500 hover:text-blue-400">Read the post ></a>

				<div class="flex items-center mt-6">
					<Img loading="lazy" decoding="async" classes="object-cover object-center w-10 h-10 rounded-full" src="{post.authorImageUrl}" alt=""/>

					<div class="mx-4">
						<p class="text-sm font-bold text-gray-700 dark:text-gray-200">{post.author}</p>
						<p class="text-sm text-gray-500 dark:text-gray-400">{post.authorCurrentRole}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</article>
</a>
{/each}

<style>
	article {
		 font-family: 'JetBrains Mono', monospace;   
	}
</style>