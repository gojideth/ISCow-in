const userId = localStorage.getItem('personId');

var response, fincas, finalFincas;

const listFincas= async (id)=>{
	response= await fetch(`http://127.0.0.1:3001/farms/person/${id}`);
	fincas = await response.json();
	finalFincas = fincas.Farm;
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
		var number = fetchNumberPlots(finca.id);
		number.then((number)=>{
			tdLotes.innerHTML = number.plots;
		});
		
		var buttonEdit = document.createElement('button');
		var buttonDelete = document.createElement('button');
		var buttonView = document.createElement('button');
		buttonEdit.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
		buttonDelete.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
		buttonView.innerHTML = '<i class="fa-regular fa-eye"></i>';
		buttonEdit.className = 'btn btn-m btn-primary';
		buttonEdit.setAttribute('data-bs-toggle', 'modal');
		buttonEdit.setAttribute('data-bs-target', '#modalEditFarm');
		buttonDelete.className = 'btn btn-m btn-danger';
		buttonView.className = 'btn btn-m btn-success';

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
	return finalFincas;
};

const fetchNumberPlots = async (id) => {
	const response = await fetch(`http://127.0.0.1:3001/plots/number/${id}`);
	const number = await response.json();
	return number;
};

const createJSONFromForm = (form) => {
	const formData = new FormData(form);
	var object = {};
	formData.forEach((value, key) => {
		object[key] = value;
	});
	return JSON.stringify(object);
};

const createFinca = async () => {
	var form = document.querySelector('#formAddFarm');
	var data = createJSONFromForm(form);
	data = JSON.parse(data);
	data.person_id =  localStorage.getItem('personId');
	await fetch('http://127.0.0.1:3001/farms/create', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json'
		}
	}).then((response) => {
		return response;
	});	
	window.alert('Finca creada');
	window.location.reload();
};

const editFinca = async (id) => {
	var form = document.querySelector('#formEditFarm');
	var data = createJSONFromForm(form);
	data = JSON.parse(data);
	const keys = Object.keys(data);
	keys.forEach((key) => {
		if (data[key] === '') {
			delete data[key];
		}
	});
	await fetch(`http://127.0.0.1:3001/farms/${id}`, {
		method: 'PUT',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json'
		}
	});
	window.alert('Finca editada');
	window.location.reload();
};

const table = document.querySelector('#tableBody_Fincas');
table.addEventListener('click', (e)=>{
	if(e.target.classList.contains('fa-eye')){
		const row = e.target.parentElement.parentElement.parentElement;
		const objectid = row.querySelector('td').textContent;
		const object = finalFincas.find((finca)=>{
			var i =finalFincas.indexOf(finca) == objectid-1;
			return i;
		});
		localStorage.setItem('farmId', object.id);
		window.location.href = 'lotes.html';
	}else if(e.target.classList.contains('fa-pen-to-square')){
		const row = e.target.parentElement.parentElement.parentElement;
		const objectid = row.querySelector('td').textContent;
		const object = finalFincas.find((finca)=>{
			var i =finalFincas.indexOf(finca) == objectid-1;
			return i;
		});
		var btn = document.querySelector('#buttonEditFarm');
		btn.addEventListener('click', () => {
			console.log(object.id);
			editFinca(object.id);
		});
	}else if(e.target.classList.contains('fa-trash-can')){
		const row = e.target.parentElement.parentElement.parentElement;
		const objectid = row.querySelector('td').textContent;
		const object = finalFincas.find((finca)=>{
			var i =finalFincas.indexOf(finca) == objectid-1;
			return i;
		}
		);
	}
});
		

	
var btn = document.querySelector('#buttonAddFarm');
btn.addEventListener('click', () => {
	createFinca();
});

window.addEventListener('load', function() {
	listFincas(userId);

});