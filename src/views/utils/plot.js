const farmId = localStorage.getItem('farmId');
const listLotes= async ()=>{
	const response= await fetch(`http://127.0.0.1:3001/plots/farm/${farmId}`);
	const lotes = await response.json();
	const finalLotes = lotes.plots;
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
			console.log(farm);
			name.innerHTML = 'Lotes de la granja: '+ farm.Farm.farm_name;
		});
		name.className = 'h1';

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
		tr.appendChild(tdTamaño);
		tr.appendChild(tdEstado);
		tr.appendChild(tdVacas);
		tr.appendChild(tdActions);
		const tableBody = document.getElementById('tableBody_Lotes');
		if (tableBody) {
			tableBody.appendChild(tr);
		}

	});
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

window.addEventListener('load', function() {
	listLotes();
});

