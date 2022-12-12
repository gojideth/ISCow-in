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
		const tableBody = document.getElementById('tableBody_Cows');
		if (tableBody) {
			tableBody.appendChild(tr);
		}

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
		buttonEdit.addEventListener('click', ()=>{
			//setPlaceholders(finca.farm_name, finca.farm_location, finca.farm_size);
			editFunction(finca.id, 'farms');
		});
		tdActions.appendChild(buttonEdit);
		tdActions.appendChild(buttonDelete);
		tdActions.appendChild(buttonView);
		tr.appendChild(tdIndex);
		tr.appendChild(tdName);
		tr.appendChild(tdAddress);
		tr.appendChild(tdLotes);
		tr.appendChild(tdActions);
		const tableBody = document.getElementById('tableBody_Fincas');
		if (tableBody) {
			tableBody.appendChild(tr);
		}
	});
};

const listLotes= async ()=>{
	const response= await fetch('http://127.0.0.1:3001/plots');
	const lotes = await response.json();
	const finalLotes = lotes.plots;
	finalLotes.forEach((lote, index)=>{
		var tdArea= document.createElement('td');
		var tdIndex= document.createElement('td');
		var tdVacas= document.createElement('td');//TODO: Consulta para obtener las vacas del lote
		var tdActions= document.createElement('td');
		var tdNumber = document.createElement('td');
		var tr= document.createElement('tr');
		tdIndex.innerHTML = index+1;
		tdNumber.innerHTML = lote.plot_number;
		tdArea.innerHTML = lote.plot_size;
		tdVacas.innerHTML = lote.cows;//TODO: Consulta para obtener las vacas del lote
		var buttonEdit = document.createElement('button');
		var buttonDelete = document.createElement('button');
		buttonEdit.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
		buttonDelete.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
		buttonEdit.className = 'btn btn-m btn-primary';
		buttonDelete.className = 'btn btn-m btn-danger';
		tdActions.appendChild(buttonEdit);
		tdActions.appendChild(buttonDelete);
		tr.appendChild(tdIndex);
		tr.appendChild(tdNumber);
		tr.appendChild(tdArea);
		tr.appendChild(tdVacas);
		tr.appendChild(tdActions);
		const tableBody = document.getElementById('tableBody_Lotes');
		if (tableBody) {
			tableBody.appendChild(tr);
		}

	});
};

window.addEventListener('load', function() {
	listCows();
	listFincas();
	listLotes();
});

const modalAddFarm = document.querySelector('.modalAddFarm');
if (modalAddFarm) {
	var btnAdd = modalAddFarm.querySelector('.btn');
	btnAdd.addEventListener('click', () => {
		var form = modalAddFarm.querySelector('#formAddFarm');
		var formData = new FormData(form);
		var data = {};
		for (var [key, value] of formData.entries()) {
			data[key] = value;
		}
		var jsonString = JSON.stringify(data);
		var json = JSON.parse(jsonString);
		addFunction(json, 'farms');
	});
}


const hidePadres = document.getElementById('hidePadres');

function handleRadioClickCow() {
	if(document.getElementById('radioNatural').checked){
		hidePadres.style.display = 'block';
	}else{
		hidePadres.style.display = 'none';
	}
}

const deleteFunction = async (id, endpoint) => {
	await fetch(`http://${HOST}/${endpoint}/${id}`, {
		method: 'DELETE',
	}).then((response) => {
		window.alert('Vaca eliminada'+response);
	});
};

const editFunction = async (id, endpoint) => {
	await fetch(`http://${HOST}/${endpoint}/${id}`, {
		method: 'PUT',
	}).then((response) => {
		window.alert('Vaca editada'+response);
	});
};

const addFunction = async (json, endpoint) => {
	await fetch(`http://${HOST}/${endpoint}/create`, {
		method: 'POST',
		body: json,
	}).then((response) => {
		window.alert('Vaca agregada'+response);
	});
};
const radioButtonsCow = document.querySelectorAll('input[name="radioorigen"]');
radioButtonsCow.forEach(radio => radio.addEventListener('click', handleRadioClickCow));
