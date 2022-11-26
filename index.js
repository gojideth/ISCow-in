const listUsers= async ()=>{
        const response= await fetch('https://jsonplaceholder.typicode.com/users');
        const cows = await response.json();

        let tableBody = ``;
        
        cows.forEach((cow, index)=>{
                tableBody += `<tr>
                        <td>${index+1}</td>
                        <td>${cow.name}</td>
                        <td>${cow.email}</td>
                        <td>${cow.phone}</td>
                        <td>${cow.website}</td>
                        <td></td>
                        <td>
                                <button class="btn btn-m btn-primary"><i class="fa-regular fa-pen-to-square"></i></button>
                                <button class="btn btn-m btn-danger"><i class="fa-solid fa-trash-can"></i></i></button>
                        </td>
                </tr>`
        });
        //document.getElementById('tableBody_Cows').innerHTML = tableBody;
        // eslint-disable-next-line no-undef
        tableBody_Cows.innerHTML = tableBody;
}

window.addEventListener('load', function() {
        listUsers();
});
