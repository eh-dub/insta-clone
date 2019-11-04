<style>
  h1, figure, p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    margin: 0 0 1em 0;
  }

  p {
    margin: 1em auto;
    text-align: left;
    font-size: 14px;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }

  #posts {
  }

  .post {
    border-radius: 3px;
    border: 1px solid #e6e6e6;
    max-width: 600px;
    margin: 0 auto;

  }

  .post-header {
    display: flex;
    flex-flow: row nowrap;
    padding: 16px;
    height: 48px;
    align-items: center;
  }

  .post-header * {
    margin: 0;
  }

  .post-pro-pic {
    width: 32px;
    height: 32px;
    border-radius: 16px;
  }

  h2 {
    font-size: 14px;
    color: #262626;
    font-weight: 600;
    line-height: 32px;
  }

  #user-name {
    margin-left: 16px;
    height: 32px;
  }

  .post-img {
    object-fit: cover;
  }

  .post-bottom-half {
    padding: 0 16px;
  }
</style>

<svelte:head>
  <title>Instagram</title>
</svelte:head>

<div id="posts">
{#each posts as p}
  <article class="post">
    <header class="post-header">
      <img class="post-pro-pic" src="img/{p.user}.jpg" alt="">
      <h2 id="user-name">{p.user}</h2>
    </header>
    {#each p.images as img}
      <div class="">
        <img class="post-img" src="img/{img}" alt="">
      </div>
    {/each}
    <div class="post-bottom-half">
      <div class="post-caption">
        <p><b>{p.user}</b> {p.caption}</p>
      </div>
      <div class="post-comments">
        {#each p.comments as c}
          <p><b>{c.user}</b> {c.comment}</p>
        {/each}
      </div>
    </div>
    
  </article>
{/each}
</div>


<script>
import { stores } from '@sapper/app';
const { preloading, page, session } = stores();
console.log(session);
let posts = [];
session.subscribe(v => {
  posts = v.posts;
  console.log(v);
})
</script>