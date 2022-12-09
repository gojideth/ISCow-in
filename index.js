const listUsers= async ()=>{
	const response= await fetch('http://localhost:3001/persons/');
	const person = await response.json();
	console.log(person);
	let tableBody = '';      
	console.log(typeof person);
	Array.from(person).forEach((person, index) => {
		tableBody += `<tr>
												<td>${index + 1}</td>
												<td>${person.name}</td>
												<td>${person.email}</td>
												<td>${person.last_name}</td>
												<td>${person.is_admin}</td>
												<td></td>
												<td>
														<button class="btn btn-m btn-primary"><i class="fa-regular fa-pen-to-square"></i></button>			
														<button class="btn btn-m btn-danger"><i class="fa-solid fa-trash-can"></i></i></button>
												</td>
										</tr>`;
	});



	/* person.forEach((cow, index)=>{
		tableBody += `<tr>
                        <td>${index+1}</td>
                        <td>${cow.name}</td>
                        <td>${cow.email}</td>
                        <td>${cow.phone}</td>
                        <td>${cow.website}</td>
                        <td></td>
                        <td>
                                <button class="btn btn-m btn-primary"><i class="fa-regular fa-pen-to-square"></i></button>
                                <button class="btn btn-m btn-danger"><i class="fa-solid fa-trash-can"></i></i></button>
                        </td>
                </tr>`;
	}); */
	//document.getElementById('tableBody_Cows').innerHTML = tableBody;
	// eslint-disable-next-line no-undef
	tableBody_Cows.innerHTML = tableBody;
};

window.addEventListener('load', function() {
	listUsers();
});

const hidePadres = document.getElementById('hidePadres');

function handleRadioClickCow() {
	if(document.getElementById('radioNatural').checked){
		hidePadres.style.display = 'block';
	}else{
		hidePadres.style.display = 'none';
	}
}

const radioButtonsCow = document.querySelectorAll('input[name="radioorigen"]');
radioButtonsCow.forEach(radio => radio.addEventListener('click', handleRadioClickCow));
