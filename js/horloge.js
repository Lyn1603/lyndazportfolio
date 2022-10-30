
// For the date
var maintenant= new Date();
var jour=maintenant.getDate();
var mois=maintenant.getMonth()+1;
var an=maintenant.getFullYear();
document.write("Today is ",jour,"/",mois,"/",an,".");
// End For the date


// For the clock
function refresh(){
    var t = 1000; // rafraîchissement en millisecondes
    setTimeout('showDate()',t)
}

function showDate() {
    var date1 = new Date()
    var h = date1.getHours();
    var m = date1.getMinutes();
    var s = date1.getSeconds();
    if( h < 10 ){ h = '0' + h; }
    if( m < 10 ){ m = '0' + m; }
    if( s < 10 ){ s = '0' + s; }
    var time = h + ':' + m + ':' + s
    document.getElementById('time').innerHTML = time;
    refresh();
 }
// End for the clock

