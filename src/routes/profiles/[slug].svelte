<script context="module">
export async function preload({params, query}) {
  let profileName;
  
  profileName = params.slug;
  return {
    profileName
  };
}


</script>


<script>
import { stores } from '@sapper/app';
const { session } = stores();

export let profileName;
let profile = {};
session.subscribe(s => {
  profile = s.profiles[profileName];
});

</script>

<img src="img/{profile.name}.jpg" alt="">
<div>{profile.bio}</div>