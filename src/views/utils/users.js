const HOST = '127.0.0.1:3001';

var response, users, finalUsers;


const listUsers= async ()=>{
	response= await fetch('http://127.0.0.1:3001/persons/');
	users = await response.json();
	finalUsers = users.persons;
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
		var buttonEdit = document.createElement('button');
		var buttonDelete = document.createElement('button');
		buttonEdit.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
		buttonDelete.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
		buttonEdit.className = 'btn btn-m btn-primary';
		buttonEdit.setAttribute('data-bs-toggle', 'modal');
		buttonEdit.setAttribute('data-bs-target', '#modalEditUser');
		buttonDelete.className = 'btn btn-m btn-danger';
		tdActions.appendChild(buttonEdit);
		tdActions.appendChild(buttonDelete);
		tr.appendChild(tdIndex);
		tr.appendChild(tdName);
		tr.appendChild(tdLastName);
		tr.appendChild(tdEmail);
		tr.appendChild(tdAdmin);
		tr.appendChild(tdActions);
		const tableBody = document.getElementById('tableBody_Users');
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

const table = document.querySelector('#tableBody_Users');
table.addEventListener('click', (e) => {
	if (e.target.classList.contains('fa-pen-to-square')) {
		const row = e.target.parentElement.parentElement.parentElement;
		const id = row.querySelector('td').textContent;
		const object = finalUsers.find((user) =>{
			var i = finalUsers.indexOf(user) == id-1;
			return i;
		});
		var btn = document.querySelector('#buttonEditUser');
		btn.addEventListener('click', () => {
			editUser(object.id);
		});
	}else if(e.target.classList.contains('fa-trash-can')){
		const row = e.target.parentElement.parentElement.parentElement;
		const id = row.querySelector('td').textContent;
		const object = finalUsers.find((user) =>{
			var i = finalUsers.indexOf(user) == id-1;
			return i;
		});
		deleteUser(object.id);
	}
});

const createUser = async () => {
	var form = document.querySelector('#formAddUser');
	var data = createJSONFromForm(form);
	data = JSON.parse(data);
	await fetch(`http://${HOST}/persons/create`, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	window.alert('Usuario creado');
	window.location.reload();
};

const editUser = async (id) => {
	var form = document.querySelector('#formEditUser');
	var data = createJSONFromForm(form);
	data = JSON.parse(data);
	const keys = Object.keys(data);
	keys.forEach((key) => {
		if (data[key] === '') {
			delete data[key];
		}
	});
	console.log(data);
	await fetch(`http://${HOST}/persons/${id}`, {
		method: 'PUT',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	window.alert('Usuario editado');
	window.location.reload();
};

const deleteUser = async (id) => {
	await fetch(`http://${HOST}/persons/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	});
	window.alert('Usuario eliminado');
	window.location.reload();
};

var btn = document.querySelector('#buttonAddUser');
btn.addEventListener('click', () => {
	createUser(createJSONFromForm(document.querySelector('#formAddUser')));
});

window.addEventListener('load', function() {
	listUsers();
});