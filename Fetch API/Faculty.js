var fetch = require('cross-fetch');
alert("Run JS")
fetch("https://arjunbala.com/DFaculty/api.php/records/faculty")
    .then(response => response.json)
    .then(data => console.log(data))