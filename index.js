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
	const response= await fetch('http://127.0.0.1:3001/persons');
	const fincas = await response.json();

	const finalFincas = fincas.farms;
	finalFincas.forEach((finca, index)=>{
		var tdName= document.createElement('td');
		var tdIndex= document.createElement('td');
		var tdAddress= document.createElement('td');
		var tdLotes = document.createElement('td');
		var tdActions= document.createElement('td');
		var tr = document.createElement('tr');
		tdIndex.innerHTML = index+1;
		tdName.innerHTML = finca.name;
		tdAddress.innerHTML = finca.address;
		tdLotes.innerHTML = finca.lotes; //TODO: Consulta para obtener los lotes de la finca
		tdActions.innerHTML = '<button class="btn btn-m btn-primary" title="Editar"><i class="fa-regular fa-pen-to-square"></i></button><button class="btn btn-m btn-danger" title="Eliminar"><i class="fa-solid fa-trash-can"></i></button><button class="btn btn-m btn-info" title="Ver lotes"><i class="fa-regular fa-eye"></i></button>';
		tr.appendChild(tdIndex);
		tr.appendChild(tdName);
		tr.appendChild(tdAddress);
		tr.appendChild(tdLotes);
		tr.appendChild(tdActions);
		document.getElementById('tableBody_Fincas').appendChild(tr);
	});
	// eslint-disable-next-line no-undef
};

const listUsers= async ()=>{
	const response= await fetch('http://127.0.0.1:3001/persons');
	const users = await response.json();

	const finalUsers = users.persons;
	finalUsers.forEach((user, index)=>{
		var tdName= document.createElement('td');
		var tdIndex= document.createElement('td');
		var tdLastName= document.createElement('td');
		var tdEmail= document.createElement('td');
		var tdAdmin= document.createElement('td');
		var tdActions= document.createElement('td');
		var tr= document.createElement('tr');
		if(user.is_admin === true){
			tdAdmin.innerHTML = '<i class="fa-solid fa-user-check" text="success"></i>';
		}else{
			tdAdmin.innerHTML = '<i class="fa-solid fa-user-large-slash" style"color:red"></i>';
		}
		tdIndex.innerHTML = index+1;
		tdName.innerHTML = user.name;
		tdLastName.innerHTML = user.last_name;
		tdEmail.innerHTML = user.email;
		tdActions.innerHTML = '<button class="btn btn-m btn-primary" title="Editar"><i class="fa-regular fa-pen-to-square"></i></button><button class="btn btn-m btn-danger" title="Eliminar"><i class="fa-solid fa-trash-can"></i></button>';
		tr.appendChild(tdIndex);
		tr.appendChild(tdName);
		tr.appendChild(tdLastName);
		tr.appendChild(tdEmail);
		tr.appendChild(tdAdmin);
		tr.appendChild(tdActions);
		document.getElementById('tableBody_Users').appendChild(tr);
	});
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
