var q1 = document.querySelector('#question1');
var ans = document.querySelector('#ans1');
var r1 = document.getElementById('Radios1');
var r2 = document.getElementById('Radios2');
var r3 = document.getElementById('Radios3');
var r4 = document.getElementById('Radios4');
//ans.remove();

ans.addEventListener('click', function() {
    //ans.append();
    ans.textContent = "Selected";
    if (r1.onselect) {
        ans.textContent = r1.textContent
    }
});