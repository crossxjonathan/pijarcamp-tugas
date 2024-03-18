let data = {
    id:1,
    name:"Leanne Graham",
    username:"Bret",
    email:"Sincere@april.biz",
    address:{
        street:"Kulas Light",
        suit:"Apt. 556",
        city:"Gwenborough",
        zipcode:"92998-3874",
    },
    phone:"1-770-736-8031 x56442",
    website:"hiddengard.org",
}

// TUGAS A

data.name = "Firman Jonathan"
data.email = "crossxjonathan@gmail.com"
data.hobby = "coding"

console.log(data)

// TUGAS B

const {address: {street,city}} = data;

console.log("street:",street);
console.log("city:",city);