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
	const response= await fetch('https://jsonplaceholder.typicode.com/users');
	const users = await response.json();

	let tableBody = '';
        
	users.forEach((user, index)=>{
		tableBody += `<tr>
						<td>${index+1}</td>
                        <td>${user.id}</td>
                        <td>${user.username}</td>
                        <td>${user.name}</td>
                        <td>${user.name}</td> <!-- lastname -->
                        <td>${user.email}</td>
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

const listLotes= async ()=>{
	const response= await fetch('https://jsonplaceholder.typicode.com/users');
	const lotes = await response.json();

	let tableBody = '';
        
	lotes.forEach((user, index)=>{
		tableBody += `<tr>
						<td>${index+1}</td>
                        <td>${user.id}</td>
                        <td>${user.username}</td>
                        <td>${user.name}</td>
                        <td>
                                <button class="btn btn-m btn-primary" title="Editar"><i class="fa-regular fa-pen-to-square"></i></button>
                                <button class="btn btn-m btn-danger" href="index.html" title="Eliminar"><i class="fa-solid fa-trash-can"></i></button>
                                <button type="button" class="btn btn-m btn-info" data-bs-toggle="modal" data-bs-target="#modalNewCow title="Añadir Vaca"><i class="fa-solid fa-cow" ></i></button>
                        </td>
						<script>
							
						</script>
                </tr>`	;
	});
	// eslint-disable-next-line no-undef
	tableBody_Lotes.innerHTML = tableBody;
};

window.addEventListener('load', function() {
	listCows();
	listUsers();
	listFincas();
	listLotes();
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
