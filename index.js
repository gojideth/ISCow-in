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
                        <td></td>
                </tr>`
        });
        //document.getElementById('tableBody_Cows').innerHTML = tableBody;
        tableBody_Cows.innerHTML = tableBody;
}

window.addEventListener('load', function() {
        listUsers();
});
