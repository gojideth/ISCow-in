const HOST = '127.0.0.1:3001';

const listCows= async ()=>{
	const response= await fetch('http://127.0.0.1:3001/cows');
	const cows = await response.json();

	const finalCows = cows.allCows;
	finalCows.forEach((cow, index)=>{
		var tdRace= document.createElement('td');
		var tdIndex= document.createElement('td');
		var tdGender= document.createElement('td');
		var tdAge= document.createElement('td');
		var tdDate= document.createElement('td');
		var tdActions= document.createElement('td');
		var tdOrigin= document.createElement('td');
		if(cow.origin ==='natural'){
			tdOrigin.innerHTML = '<i class="fa-solid fa-leaf"></i>';
		}else{
			tdOrigin.innerHTML = '<i class="fa-solid fa-money-bill"></i>';
		}
		var tr = document.createElement('tr');
		tdIndex.innerHTML = index+1;
		tdRace.innerHTML = cow.race;
		tdGender.innerHTML = cow.gender;
		tdAge.innerHTML = cow.age; //TODO: Consulta para obtener la edad de la vaca
		tdDate.innerHTML = cow.born_date;
		var buttonEdit = document.createElement('button');
		var buttonDelete = document.createElement('button');
		buttonEdit.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
		buttonDelete.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
		buttonEdit.className = 'btn btn-m btn-primary';
		buttonDelete.className = 'btn btn-m btn-danger';
		tdActions.appendChild(buttonEdit);
		tdActions.appendChild(buttonDelete);
		tr.appendChild(tdIndex);
		tr.appendChild(tdRace);
		tr.appendChild(tdGender);
		tr.appendChild(tdDate);
		tr.appendChild(tdAge);
		tr.appendChild(tdOrigin);
		tr.appendChild(tdActions);
		document.getElementById('tableBody_Cows').appendChild(tr);

	});
};

const listFincas= async ()=>{
	const response= await fetch('http://127.0.0.1:3001/farms');
	const fincas = await response.json();

	const finalFincas = fincas.farms;
	finalFincas.forEach((finca, index)=>{
		var tdName= document.createElement('td');
		var tdIndex= document.createElement('td');
		var tdAddress= document.createElement('td');
		var tdSize= document.createElement('td');
		var tdLotes = document.createElement('td');
		var tdActions= document.createElement('td');
		var tr = document.createElement('tr');
		tdIndex.innerHTML = index+1;
		tdName.innerHTML = finca.farm_name;
		tdAddress.innerHTML = finca.farm_location;
		tdSize.innerHTML = finca.farm_size;
		tdLotes.innerHTML = finca.farm; //TODO: Consulta para obtener los lotes de la finca
		var buttonEdit = document.createElement('button');
		var buttonDelete = document.createElement('button');
		var buttonView = document.createElement('button');
		buttonEdit.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
		buttonDelete.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
		buttonView.innerHTML = '<i class="fa-regular fa-eye"></i>';
		buttonEdit.className = 'btn btn-m btn-primary';
		buttonDelete.className = 'btn btn-m btn-danger';
		buttonView.className = 'btn btn-m btn-success';
		buttonView.addEventListener('click', ()=>{
			window.location.href = 'http://127.0.0.1:5500/src/views/lotes.html';
		});
		buttonDelete.addEventListener('click', ()=>{
			alert('Eliminar');
			deleteFunction(finca.id, 'farms');
		});
		tdActions.appendChild(buttonEdit);
		tdActions.appendChild(buttonDelete);
		tdActions.appendChild(buttonView);
		tr.appendChild(tdIndex);
		tr.appendChild(tdName);
		tr.appendChild(tdAddress);
		tr.appendChild(tdLotes);
		tr.appendChild(tdActions);
		document.getElementById('tableBody_Fincas').appendChild(tr);
	});
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
	const response= await fetch('http://127.0.0.1:3001/plots');
	const lotes = await response.json();

	const finalLotes = lotes.lotes;
	finalLotes.forEach((user, index)=>{
		var tdArea= document.createElement('td');
		var tdIndex= document.createElement('td');
		var tdVacas= document.createElement('td');//TODO: Consulta para obtener las vacas del lote
		var tdActions= document.createElement('td');
		var tr= document.createElement('tr');
		tdIndex.innerHTML = index+1;
		tdArea.innerHTML = lotes.plot_size;
		tdVacas.innerHTML = lotes.cows;//TODO: Consulta para obtener las vacas del lote
		tdActions.innerHTML = '<button class="btn btn-m btn-primary" title="Editar"><i class="fa-regular fa-pen-to-square"></i></button><button class="btn btn-m btn-danger" href="index.html" title="Eliminar"><i class="fa-solid fa-trash-can"></i></button><button type="button" class="btn btn-m btn-info" data-bs-toggle="modal" data-bs-target="#modalNewCow title="Añadir Vaca"><i class="fa-solid fa-cow" ></i></button>';
		tr.appendChild(tdIndex);
	});
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

const deleteFunction = async (id, endpoint) => {
	console.log(id);
	await fetch(`http://${HOST}/${endpoint}/${id}`, {
		method: 'DELETE',
	}).then((response) => {
		window.alert('Vaca eliminada'+response);
	});
};

const radioButtonsCow = document.querySelectorAll('input[name="radioorigen"]');
radioButtonsCow.forEach(radio => radio.addEventListener('click', handleRadioClickCow));
