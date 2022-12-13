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
	listLotes();
});

