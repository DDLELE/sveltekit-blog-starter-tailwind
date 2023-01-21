<script>
    export let src;
    export let alt;
    export let width;
    export let height;
    export let classes;
    export let pictureClasses;
    export let id;
    export let loading = "eager"

    const getAvifFormat = (file) => `${file.substring(0,file.length-3)}avif`
    const getWebpFormat = (file) => `${file.substring(0,file.length-3)}webp`
</script>

<div class="{pictureClasses}">
    <picture>
        <source srcset={getAvifFormat(src)} type="image/avif" />
        <source srcset={getWebpFormat(src)} type="image/webp" />
        <img class="{classes}" src={src} alt={alt} width={width} height={height} loading="{loading}" decoding="async"/>
    </picture>
</div>