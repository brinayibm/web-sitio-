function calculateAge() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();

    const ageInMilliseconds = today - birthdate;
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;
    const ageInDays = ageInHours / 24;
    const ageInYears = today.getFullYear() - birthdate.getFullYear();

    const result = document.getElementById('result');
    result.innerHTML = `
        <p>Edad: ${ageInYears} años</p>
        <p>Días vividos: ${ageInDays.toFixed(0)} días</p>
        <p>Horas vividas: ${ageInHours.toFixed(0)} horas</p>
    `;
}