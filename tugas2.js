const matematika = 80
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa = 69

let totalNilai = matematika + bahasaIndonesia + bahasaInggris + ipa;
let pelajaran = 4

let ratarata = totalNilai / pelajaran;
let grade = ''


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
