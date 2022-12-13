const HOST = '127.0.0.1:3001';

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
