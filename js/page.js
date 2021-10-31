//charts

let ctx = document.getElementById('monthlySales').getContext('2d');
let pieCtx = document.getElementById('deptSales').getContext('2d');
let YearlyLabel = document.getElementById('yearlyTotal')


let monthlySales = Array.of(12001, 9090, 300);
let monthlyLabels = Array.of('Oct', 'Nov', 'Dec')

let deptSales = Array.of(12000, 900, 300);
let deptLabels = Array.of('Hiking', 'Running', 'Hunting')

let yearlyTotal = 0;

function addyearTotal(x) {
    yearlyTotal = x + yearlyTotal;
}
monthlySales.forEach(addyearTotal)

let octNums = Array.of(1000, 5040, 6900);
let NovNums = Array.of(2200, 5500, 6030);
let DecNums = Array.of(1300, 5030, 6040);

// let total = Array.of(addyearTotal(...octNums),addyearTotal(...NovNums),addyearTotal(...DecNums));

function findOver1000() {
    let firstthousand = monthlySales.find(Element => Element > 1000)
    alert(firstthousand)
}

YearlyLabel.innerHTML = "Ksh " + yearlyTotal;


function resetNum() {
    monthlySales.fill(0);
    monthlySalesChart.update();
}


//bar
var monthlySalesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: monthlyLabels,
        datasets: [{
            label: 'Number of Sales',
            data: monthlySales,
            backgroundColor: [
                'rgba(238, 184, 104, 1)',
                'rgba(75, 166, 223, 1)',
                'rgba(239, 118, 122, 1)',
            ],
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


//pie

var deptSalesChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: deptLabels,
        datasets: [{
            label: 'Number of Sales',
            data: deptSales,
            backgroundColor: [
                'rgba(238, 184, 104, 1)',
                'rgba(75, 166, 223, 1)',
                'rgba(239, 118, 122, 1)',
            ],
            borderWidth: 0
        }]
    },
    options: {

    }
})