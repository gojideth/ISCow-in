const plotId = localStorage.getItem('plotId');
var response, cows, finalCows;

const listCows= async ()=>{
	response= await fetch(`http://127.0.0.1:3001/cows/plot/${plotId}`);
	cows = await response.json();
	finalCows = cows.cows;
	finalCows.forEach((cow, index)=>{
		var tdIndex= document.createElement('td');
		var tdRace = document.createElement('td');
		var tdGender= document.createElement('td');
		var tdBornDate= document.createElement('td');
		var tdAge= document.createElement('td');
		var tdOrigin= document.createElement('td');
		var tdActions= document.createElement('td');
		var tr = document.createElement('tr');
		tdIndex.innerHTML = index+1;
		tdRace.innerHTML = cow.race;
		tdGender.innerHTML = cow.gender;
		tdBornDate.innerHTML = cow.born_date;
		tdAge.innerHTML = obtainAgeCow(cow.born_date);
		tdOrigin.innerHTML = cow.origin;	
		

		var buttonEdit = document.createElement('button');
		var buttonDelete = document.createElement('button');
		var buttonView = document.createElement('button');

		buttonEdit.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
		buttonDelete.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
		buttonView.innerHTML = '<i class="fa-regular fa-eye"></i>';

		buttonEdit.className = 'btn btn-m btn-primary';
		buttonView.className = 'btn btn-m btn-success';
		buttonDelete.className = 'btn btn-m btn-danger';

		tdActions.appendChild(buttonEdit);
		tdActions.appendChild(buttonDelete);
		tdActions.appendChild(buttonView);
		tr.appendChild(tdIndex);
		tr.appendChild(tdRace);
		tr.appendChild(tdGender);
		tr.appendChild(tdBornDate);
		tr.appendChild(tdAge);
		tr.appendChild(tdOrigin);
		tr.appendChild(tdActions);
		const tableBody = document.getElementById('tableBody_Cows');
		if (tableBody) {
			tableBody.appendChild(tr);
		}

	});
};

const obtainAgeCow =  (born_date) => {
	var today = new Date();
	var bornDate = new Date(born_date);
	var difference = today.getTime() - bornDate.getTime();
	var age = Math.floor(difference / (1000 * 3600 * 24 * 365.25));
	return age;
};

const table = document.querySelector('#tableBody_Cows');
table.addEventListener('click', (e)=>{
	if(e.target.classList.contains('fa-eye')){
		const row = e.target.parentElement.parentElement.parentElement;
		const objectid = row.querySelector('td').textContent;
		const object = finalCows.find((finca)=>{
			var i =finalCows.indexOf(finca) == objectid-1;
			return i;
		});
		localStorage.setItem('cowId', object.id);
		//window.location.href = '.html';
	}
});

window.addEventListener('load', function() {
	listCows();
});

