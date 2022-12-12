const userId = localStorage.getItem('personId');
const listFincas= async (id)=>{
	const response= await fetch(`http://127.0.0.1:3001/farms/person/${id}`);
	const fincas = await response.json();
	const finalFincas = fincas.Farm;
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
	const data = createJSONFromForm(form);
	const finalData = {...data, person_id: localStorage.getItem('personId')};
	const response = await fetch('http://127.0.0.1:3001/farms/create', {
		method: 'POST',
		body: finalData,
	}).then((response) => {
		return response;
	});	
	console.log(response);
};
		

var btn = document.querySelector('#buttonAddFarm');
btn.addEventListener('click', () => {
	createFinca();
});

window.addEventListener('load', function() {
	listFincas(userId);
});