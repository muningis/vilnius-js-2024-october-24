<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<h1>{data.post.title}</h1>
<p>{data.post.content}</p>
<p>{data.post.description}</p>
