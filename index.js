const listCows= async ()=>{
	const response= await fetch('https://jsonplaceholder.typicode.com/users');
	const cows = await response.json();

	let tableBody = '';
    
	cows.forEach((cow, index)=>{
		tableBody += `<tr>
                        <td>${index+1}</td>
                        <td>${cow.id}</td>
                        <td>${cow.name}</td>
                        <td>${cow.email}</td>
                        <td>${cow.phone}</td>
                        <td>${cow.website}</td>
                        <td></td>
                        <td>
                                <button class="btn btn-m btn-primary" title="Editar"><i class="fa-regular fa-pen-to-square"></i></button>
                                <button class="btn btn-m btn-danger" title="Eliminar"><i class="fa-solid fa-trash-can"></i></i></button>
                        </td>
                </tr>`;
	});
	// eslint-disable-next-line no-undef
	tableBody_Cows.innerHTML = tableBody;
};

const listFincas= async ()=>{
	const response= await fetch('https://jsonplaceholder.typicode.com/users');
	const fincas = await response.json();

	let tableBody = '';
        
	fincas.forEach((finca, index)=>{
		tableBody += `<tr>
						<td>${index+1}</td>
                        <td>${finca.id}</td>
                        <td>${finca.name}</td>
                        <td>${finca.address.street}</td>
                        <td>${finca.phone}</td>
                        <td>
                                <button class="btn btn-m btn-primary" title="Editar"><i class="fa-regular fa-pen-to-square"></i></button>
                                <button class="btn btn-m btn-danger" title="Eliminar"><i class="fa-solid fa-trash-can"></i></button>
                                <button class="btn btn-m btn-info" title="Ver lotes"><i class="fa-regular fa-eye"></i></button>
                        </td>
                </tr>`;
	});
	// eslint-disable-next-line no-undef
	tableBody_Fincas.innerHTML = tableBody;
};

const listUsers= async ()=>{
	const response = await fetch('http://127.0.0.1:3001/persons');
	const users = await response.json();
	let tableBody = '';
	const finalUsers = users.persons;
	console.log(finalUsers)     ;
	finalUsers.forEach((user, index)=>{
		tableBody += `<tr>
						<td>${index+1}</td>
                        <td>${'Acá va el ID'}</td>
                        <td>${user.name + user.last_name}</td>
                        <td>${user.name}</td>
                        <td>${user.last_name}</td> <!-- lastname -->
                        <td>${user.email}</td>
                        <td>${user.is_admin}</td>
                        <td></td> <!-- role -->
                        <td>
                                <button class="btn btn-m btn-primary" title="Editar"><i class="fa-regular fa-pen-to-square"></i></button>
                                <button class="btn btn-m btn-danger" title="Eliminar"><i class="fa-solid fa-trash-can"></i></button>
                        </td>
                </tr>`;
	});
	// eslint-disable-next-line no-undef
	tableBody_Users.innerHTML = tableBody;
};

window.addEventListener('load', function() {
	listCows();
	listUsers();
	listFincas();
});

const hidePadres = document.getElementById('hidePadres');

function handleRadioClickCow() {
	if(document.getElementById('radioNatural').checked){
		hidePadres.style.display = 'block';
	}else{
		hidePadres.style.display = 'none';
	}
}

const radioButtonsCow = document.querySelectorAll('input[name="radioorigen"]');
radioButtonsCow.forEach(radio => radio.addEventListener('click', handleRadioClickCow));
