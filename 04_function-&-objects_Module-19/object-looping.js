var nam = {
    brand:"samgsung",
    price: 20000,
    color: "Red",
    model: "corei5",
    ram:"4gb"

}

var after1 = Object.keys(nam)
var after2 = Object.values(nam)
for ( i = 0; i<after1.length; i++)
{
    var str = after1[i]
    var vlu =after2[i]
        console.log(str,":", vlu)
   
}