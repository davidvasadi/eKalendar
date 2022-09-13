///itt lesz a regisztráció fetche////

let regBtn = document.querySelector('.regBtn'); // regisztráció gomb

//gombnyomásra fut le a regisztrációs infó átadása
regBtn.addEventListener('click', () => {
    
    let fname = document.querySelector("#fname").value;
    let email = document.querySelector("#email").value;
    let coname = document.querySelector("#coname").value;
    let pwd = document.querySelector("#pwd").value;

    let formData = {
        fname: fname,
        email:email,
        coname:coname,
        pwd:pwd
    };
    
    fetch('http://localhost:8000/api/registration', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json', // ez kell mivel json küldünk, így ismeri fel csak a backend
        }
    })
    .then(res => res.json()) //először elkapjuk a responset és csinálunk belőle jsont
    .then(body => console.log(body)); //majd kinyerjük belőle a msg-et
})
