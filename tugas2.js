const matematika = 80
const bahasaIndonesia = 89
const bahasaInggris = 89
const ipa = 69

if(typeof matematika !== 'number' ||typeof bahasaIndonesia !== 'number'||
typeof bahasaInggris !== 'number' ||typeof ipa !== 'number' ||
 matematika < 0 || matematika > 100 || bahasaIndonesia < 0 || bahasaIndonesia > 100 || bahasaInggris < 0 || bahasaInggris > 100
|| ipa < 0 || ipa > 100) {
    console.log("Maaf, nilai tidak boleh berupa huruf dan tidak boleh lebih besar atau lebih kecil");
} else{

let totalNilai = matematika + bahasaIndonesia + bahasaInggris + ipa;
let pelajaran = 4;
let ratarata = totalNilai / pelajaran;
let grade = '';


if (ratarata > 90){
    grade = 'A'
} else if(ratarata > 80){
    grade = 'B'
} else if(ratarata > 70){
    grade = 'C'
} else if(ratarata > 60){
    grade = 'D'
} else{
    grade = 'E'
}

console.log("rata-rata:",ratarata)
console.log("grade:",grade)
}