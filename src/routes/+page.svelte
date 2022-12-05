<script>
	/** @type {import('./$types').PageData} */


    export let data;

</script>


<body>
    <div>
       <h2>info</h2>
        {#each data.users as user}
            <div class="user">
                <table>
                    <tr>
                        <th>user id</th>
                        <th>user name</th>
                        <th>username</th>
                        <th>email</th>
                    </tr>
                    <tr>
                        <td>
                            {user.id}
                        </td>
                        <td>
                            {user.name}
                        </td>
                        <td>
                            {user.username}
                        </td>
                        <td>
                            {user.email}
                        </td>
                    </tr>
                </table>
            
                <a href={`${user.id}`}>read more</a>  
                    
            

            </div>
        {/each}

    </div>
</body>

<style>
    table{
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }
    td, th{
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }
    tr:nth-child(even) {
        background-color: #dddddd;
    }

</style>