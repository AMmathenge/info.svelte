<script>
	import { USER } from '$env/static/private';


       /** @type {import('./$types').PageData} */
    
       export let data;
</script>

<div class="tilte">
    <div class="post">
        <h2>{data.users.username}</h2>
        <h2>{data.users.user}</h2>
    </div>
</div>