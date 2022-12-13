const plotId = localStorage.getItem('plotId');

var response, cows, finalCows;

const listCows= async (id)=>{
	response= await fetch(`http://127.0.0.1:3001/cows/plot/${id}`);
	cows = await response.json();
	finalCows = cows.allCows;
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
		var buttonWeight = document.createElement('button');
		buttonWeight.innerHTML = '<i class="fa-solid fa-weight"></i>';
		buttonEdit.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
		buttonDelete.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
		buttonEdit.className = 'btn btn-m btn-primary';
		buttonDelete.className = 'btn btn-m btn-danger';
		buttonWeight.className = 'btn btn-m btn-success';
		buttonEdit.setAttribute('data-bs-toggle', 'modal');
		buttonEdit.setAttribute('data-bs-target', '#modalEditCow');
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

const createJSONFromForm = (form) => {
	const formData = new FormData(form);
	var object = {};
	formData.forEach((value, key) => {
		object[key] = value;
	});
	return JSON.stringify(object);
};

const createCow = async () => {
	var form = document.querySelector('#formNewCow');
	var data = createJSONFromForm(form);
	data = JSON.parse(data);
	data.plot_id = localStorage.getItem('plotId');
	await fetch('http://127.0.0.1:3001/cows/create', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	}).then((response) => {
		return response;
	});
	window.alert('Vaca creada con éxito');
	window.location.reload();
};

var btn = document.querySelector('#buttonNewCow');
btn.addEventListener('click', () => {
	createCow();
});

const editCow = async (id) => {
	var form = document.querySelector('#formEditCow');
	var data = createJSONFromForm(form);
	data = JSON.parse(data);
	const keys = Object.keys(data);
	keys.forEach((key) => {
		if (data[key] === '') {
			delete data[key];
		}
	});
	await fetch(`http://127.0.0.1:3001/cows/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
	window.alert('Vaca editada con éxito');
	window.location.reload();
};

const deleteCow = async (id) => {
	await fetch(`http://127.0.0.1:3001/cows/${id}`, {
		method: 'DELETE'
	});
	window.alert('Vaca eliminada con éxito');
	window.location.reload();
};


const table = document.querySelector('#tableBody_Cows');
table.addEventListener('click', (event) => {
	if(event.target.classList.contains('fa-pen-to-square')){
		const row = event.target.parentElement.parentElement.parentElement;
		const objectid = row.querySelector('td').textContent;
		const object = finalCows.find((cow) =>{
			var i = finalCows.indexOf(cow) === objectid;
			return i;
		});
		var btn = document.querySelector('#buttonEditCow');
		btn.addEventListener('click', () => {
			editCow(object.id);
		});
	}else if(event.target.classList.contains('fa-trash-can')){
		const row = event.target.parentElement.parentElement.parentElement;
		const objectid = row.querySelector('td').textContent;
		const object = finalCows.find((cow) =>{
			var i = finalCows.indexOf(cow) === objectid;
			return i;
		});
		deleteCow(object.id);
	}
});

const fetchCowsQuantity = async (plotId) => {
	const response = await fetch(`http://127.0.0.1:3001/cows/number/${plotId}`);
	const cows = await response.json();
	return cows;
};

const fetchFarmName = async (farmId) => {
	const response = await fetch(`http://127.0.0.1:3001/farms/${farmId}`);
	const farm = await response.json();
	return farm;
};

window.addEventListener('load', function() {
	listCows(plotId);
});

