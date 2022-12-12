const HOST = '127.0.0.1:3001';
var personId;

const getUserCredentials = (form) => {
	const formData = new FormData(form);
	const data = {};
	for (var [key, value] of formData.entries()) {
		data[key] = value;
	}
	const jsonString = JSON.stringify(data);
	console.log(jsonString);
	return JSON.parse(jsonString);
};

const login = async () => {
	const user = getUserCredentials(document.getQuerySelector('#formLogin'));
	const response = await fetch(`http://${HOST}/persons/login`, {
		method: 'POST',
		body: JSON.stringify(user),
	});
	const data = await response.json();
	personId = data.id;
	if (personId !== undefined) {
		window.alert('Bienvenido');
	} else {
		window.alert('Usuario o contraseña incorrectos');
	}
};

var btnLogin = document.querySelector('#buttonLogin');
btnLogin.addEventListener('click', () => {
	login();
});