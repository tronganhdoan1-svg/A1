let patients = [
        {
            "id": 1,
            "fullName": "David Smith",
            "dateOfBirth": "1985-07-12",
            "symptoms": [
                "Fever",
                "Cough",
                "Shortness of breath"
            ]
        },
        {
            "id": 2,
            "fullName": "Caryna Smith",
            "dateOfBirth": "1998-06-12",
            "symptoms": [
                "Headache",
                "Nausea"
            ]
        },
        {
            "id": 3,
            "fullName": "John Clifford",
            "dateOfBirth": "1980-01-01",
            "symptoms": [
                "Fever"
            ]
        }
    ]

let hospital = {
    name: "Central Hospital",
    patients: patients
};

function showPatients(hospital) {
    //Make a div container to hold everything and as a target.
    const container = document.createElement('div');

    //Creates an h1 element to display the hospital name and appends it to the container.
    const h1 = document.createElement('h1');
    h1.textContent = hospital.name;
    container.appendChild(h1);

    for (let i = 0; i < hospital.patients.length; i++) {
        const patient = hospital.patients[i];
        //Creates an h2 element to display the patient's full name and date of birth and appends it to the container.
        const h2 = document.createElement('h2');
        h2.textContent = `${patient.fullName}, ${patient.dateOfBirth}`;
        container.appendChild(h2);
        //Now we create an unordered list to display the patient's symptoms.
        const ul = document.createElement('ul');
        //This will loop through the patient's symptoms.
        for (let j = 0; j < patient.symptoms.length; j++) {
            //Creates a list item for the patient symptom and appends it to the unordered list.
            const li = document.createElement('li');
            li.textContent = patient.symptoms[j];
            ul.appendChild(li);
        }
        container.appendChild(ul);
    }
    
    return container.innerHTML;
}

//Executes the function and logs the returned HTML string to the console.
console.log(showPatients(hospital));

//Renders the returned HTML string to the body of the document.
document.body.innerHTML = showPatients(hospital);