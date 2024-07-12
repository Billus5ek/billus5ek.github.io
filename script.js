const powerUps = [
    {name: 'Chocolate Bar', duration: 1, cost: 50},
    {name: 'Chips', duration: 1.5, cost: 90},
    {name: 'Chicken Wings', duration: 2, cost: 112},
    {name: 'Master Drink', duration: 2, cost: 127},
    {name: 'Protein bar', duration: 3, cost: 150},
    {name: 'Cheap protein powder', duration: 5, cost: 180},
    {name: 'Steak', duration: 4, cost: 210},
    {name: 'Rorate', duration: 4, cost: 525},
    {name: 'Protein shake', duration: 5, cost: 750},
    {name: 'Protein powder', duration: 10, cost: 1500},
    {name: 'Creatine', duration: 15, cost: 5250},
    {name: 'Small power potion', duration: 15, cost: 15000},
    {name: 'Small pump potion', duration: 15, cost: 15000},
    {name: 'Small speed potion', duration: 15, cost: 15000},
    {name: 'Secret Beans', duration: 10, cost: 18750},
    {name: 'Angel potion', duration: 20, cost: 75000},
];

function calculateByTime() {
    const trainingTime = parseFloat(document.getElementById('trainingTime').value) * 60; // Convert to minutes
    let results = '<h3>Result for time training:</h3><table border="1"><tr><th>Name</th><th>Amount</th><th>Price ($)</th></tr>';
    let totalCost = 0;

    powerUps.forEach(powerUp => {
        const quantity = Math.ceil(trainingTime / powerUp.duration);
        const cost = quantity * powerUp.cost;
        totalCost += cost;

        results += `<tr><td>${powerUp.name}</td><td>${quantity.toLocaleString()}</td><td>${cost.toLocaleString()}</td></tr>`;
    });

    results += `<tr><td colspan="2">Total cost</td><td>${totalCost.toLocaleString()}</td></tr></table>`;
    document.getElementById('timeResults').innerHTML = results;
}
