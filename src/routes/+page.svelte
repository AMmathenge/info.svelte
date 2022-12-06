<script>
	/** @type {import('./$types').PageData} */


    export let data;

</script>


<body>
    <div>
       <h2>info</h2>
        
            <div class="user">
                <table>
                    <tr>
                        <th>user id</th>
                        <th>user name</th>
                        <th>username</th>
                        <th>email</th>
                        <th>action</th>
                    </tr>
                    <tbody>
                        {#each data.users as user}
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
                            <a href={`/person/${user.id}`}>read more</a> 
                        </tr>

                        {/each}
                    </tbody>
                    
                </table>
            
                 
                    
            

            </div>
        

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
        padding: 0px;
    }
    tr:nth-child(even) {
        background-color: #dddddd;
    }

</style>