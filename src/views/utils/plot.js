const farmId = localStorage.getItem('farmId');
var response, lotes, finalLotes;

const listLotes= async ()=>{
	response= await fetch(`http://127.0.0.1:3001/plots/farm/${farmId}`);
	lotes = await response.json();
	finalLotes = lotes.plots;
	finalLotes.forEach((lote, index)=>{
		var tdIndex= document.createElement('td');
		var tdNumber = document.createElement('td');
		var tdTamaño= document.createElement('td');
		var tdEstado= document.createElement('td');
		var tdVacas= document.createElement('td');
		var tdActions= document.createElement('td');
		var tr= document.createElement('tr');
		tdIndex.innerHTML = index+1;
		tdNumber.innerHTML = lote.plot_number;
		tdTamaño.innerHTML = lote.plot_size;
		tdEstado.innerHTML = lote.plot_status;
		var number = fetchCowsQuantity(lote.id);
		number.then((number)=>{
			tdVacas.innerHTML = number.cowCount;
		});	
		var name = document.getElementById('name_contenedor');
		var farm = fetchFarmName(lote.farm_id);
		farm.then((farm)=>{
			name.innerHTML = 'Lotes de la granja: '+ farm.Farm.farm_name;
			console.log(farm.Farm.farm_name);
		});
		name.className = 'h1';

		tdVacas.innerHTML = lote.cows;//TODO: Consulta para obtener las vacas del lote
		var buttonEdit = document.createElement('button');
		var buttonDelete = document.createElement('button');
		var buttonView = document.createElement('button');

		buttonEdit.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
		buttonDelete.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
		buttonView.innerHTML = '<i class="fa-regular fa-eye"></i>';

		buttonEdit.className = 'btn btn-m btn-primary';
		buttonEdit.setAttribute('data-bs-toggle', 'modal');
		buttonEdit.setAttribute('data-bs-target', '#modalEditLote');
		buttonDelete.className = 'btn btn-m btn-danger';
		buttonView.className = 'btn btn-m btn-success';

		tdActions.appendChild(buttonEdit);
		tdActions.appendChild(buttonDelete);
		tdActions.appendChild(buttonView);
		tr.appendChild(tdIndex);
		tr.appendChild(tdNumber);
		tr.appendChild(tdTamaño);
		tr.appendChild(tdEstado);
		tr.appendChild(tdVacas);
		tr.appendChild(tdActions);
		const tableBody = document.getElementById('tableBody_Lotes');
		if (tableBody) {
			tableBody.appendChild(tr);
		}

	});
	return finalLotes;
};

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

const createJSONFromForm = (form) => {
	const formData = new FormData(form);
	var object = {};
	formData.forEach((value, key) => {
		object[key] = value;
	});
	return JSON.stringify(object);
};

const createLote = async () => {
	var form = document.querySelector('#formNewLote');
	var data = createJSONFromForm(form);
	data = JSON.parse(data);
	data.farm_id = localStorage.getItem('farmId');
	await fetch('http://127.0.0.1:3001/plots/create', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json'
		}
	});
	window.alert('Lote creado con éxito');
	window.location.reload();
};

const deleteLote = async (id) => {
	await fetch(`http://127.0.0.1:3001/plots/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		}
	});
	window.alert('Lote eliminado con éxito');
	window.location.reload();
};

const updateLote = async (id) => {
	var form = document.querySelector('#formEditLote');
	var data = createJSONFromForm(form);
	data = JSON.parse(data);
	const keys = Object.keys(data);
	keys.forEach((key)=>{
		if(data[key] == ''){
			delete data[key];
		}
	}
	);
	await fetch(`http://127.0.0.1:3001/plots/${id}`, {
		method: 'PUT',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json'
		}
	});
	window.alert('Lote actualizado con éxito');
	window.location.reload();
};




const table = document.querySelector('#tableBody_Lotes');
table.addEventListener('click', (e)=>{
	if(e.target.classList.contains('fa-eye')){
		const row = e.target.parentElement.parentElement.parentElement;
		const objectid = row.querySelector('td').textContent;
		const object = finalLotes.find((finca)=>{
			var i =finalLotes.indexOf(finca) == objectid-1;
			return i;
		});
		localStorage.setItem('plotId', object.id);
		window.location.href = 'cows.html';
	}else if(e.target.classList.contains('fa-trash-can')){
		const row = e.target.parentElement.parentElement.parentElement;
		const objectid = row.querySelector('td').textContent;
		const object = finalLotes.find((finca)=>{
			var i =finalLotes.indexOf(finca) == objectid-1;
			return i;
		});
		deleteLote(object.id);
	}else if(e.target.classList.contains('fa-pen-to-square')){
		const row = e.target.parentElement.parentElement.parentElement;
		const objectid = row.querySelector('td').textContent;
		const object = finalLotes.find((finca)=>{
			var i =finalLotes.indexOf(finca) == objectid-1;
			return i;
		});
		var btn = document.querySelector('#buttonUpdatePlot');
		btn.addEventListener('click', ()=>{
			updateLote(object.id);
		});
	}
});

var button = document.querySelector('#buttonNewPlot');
button.addEventListener('click', ()=>{
	createLote(createJSONFromForm(document.querySelector('#formNewLote')));
}
);

window.addEventListener('load', function() {
	listLotes();
});


