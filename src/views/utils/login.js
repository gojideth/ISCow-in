var personId;

const getUserCredentials = (form) => {
	var formData = new FormData(form);
	const data = {};
	for (var [key, value] of formData.entries()) {
		data[key] = value;
	}
	return data;
};

const login = async () => {
	var loginForm = document.querySelector('#formLogin');
	const user = getUserCredentials(loginForm);
	console.log(user);
	const response = await fetch('http://127.0.0.1:3001/persons/login', {
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
btnLogin.addEventListener('click', (e) => {
	e.preventDefault();
	login();
});