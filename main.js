const watch = document.querySelector("#watch");
let milliseconds = 0;
let timer;

const startWatch = () => {
    watch.classList.remove(`paused`)
    clearInterval(timer);
    timer = setInterval(()=>{
        milliseconds += 10;
        let dateTimer = new Date(milliseconds);
        watch.innerHTML =
            ("0"+dateTimer.getUTCHours()).slice(-2) + `:` +
            ("0"+dateTimer.getUTCMinutes()).slice(-2) + `:` +
            ("0"+dateTimer.getUTCSeconds()).slice(-2) + `:` +
            ("0"+dateTimer.getUTCMilliseconds()).slice(-3, -1);
    },10);
};

const pauseWatch = () => {
    watch.classList.add(`paused`);
    clearInterval(timer);
};
const resetWatch = () => {
    watch.classList.remove(`pause`);
    clearInterval(timer);
    milliseconds = 0;
    watch.innerHTML ="00:00:00:00";
};
document.addEventListener(`click`, (e) =>{
    const element = e.target;
    if(element.id ===`start`) startWatch();
    if(element.id ===`pause`) pauseWatch();
    if(element.id ===`reset`) resetWatch();

});
var callme = (function() {
    var start = true;
    return function(me) {
        if(start) {
            me.value = "Pause";
            startWatch();
        } else {
            me.value = "Start";
            pauseWatch();
        }
        start = !start;
    };
}());
document.querySelector(`.b-1`).addEventListener(`click`,() => {
    let data = document.querySelector(`.i-1`).value;
    document.querySelector(`.out-1`).innerHTML += data;
});

document.querySelector(`.i-1`).addEventListener(`click`,() => {
    let data = document.querySelector(`.watch`).value;
    document.querySelector(`.out-8`).innerHTML += data;
});

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('body').appendChild(table);
// Creating and adding data to first row of the table
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Start time";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Name";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "Time spent";
let heading_4 = document.createElement('th');
heading_4.innerHTML = "Time spent";


row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
thead.appendChild(row_1);


// Creating and adding data to second row of the table
let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = "";
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = "";
let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = "";
let row_2_data_4 = document.createElement('td');
row_2_data_4.innerHTML = "";

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
row_2.appendChild(row_2_data_4);
tbody.appendChild(row_2);




// Creating and adding data to third row of the table
let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = "2.";
let row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML = "";
let row_3_data_3 = document.createElement('td');
row_3_data_3.innerHTML = "";
let row_3_data_4 = document.createElement('td');
row_3_data_3.innerHTML = "";

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
row_4.appendChild(row_3_data_4);
tbody.appendChild(row_3);

let row_4 = document.createElement('tr');
let row_4_data_1 = document.createElement('td');
row_4_data_1.innerHTML = "";
let row_4_data_2 = document.createElement('td');
row_4_data_2.innerHTML = "";
let row_4_data_3 = document.createElement('td');
row_4_data_3.innerHTML = "";
let row_4_data_4 = document.createElement('td');
row_4_data_4.innerHTML = "";

row_4.appendChild(row_4_data_1);
row_4.appendChild(row_4_data_2);
row_4.appendChild(row_4_data_3);
row_4.appendChild(row_4_data_4);
tbody.appendChild(row_4);



