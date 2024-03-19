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
const newData = {
    ...data,
name: "Firman Jonathan",
email: "crossxjonathan@gmail.com",
hobby: "coding"
}
console.log(newData)

// TUGAS B
const city = "medan"
const {address: {street,city:myCity}} = data;

console.log("street:",street);
console.log("city:",city);