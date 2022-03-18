const beers = [
    {
        name: 'Stout',
        brand: 'Minerva'
    }, 
    { 
        name: 'Pikantus',
        brand: 'Erdinger'
    }, 
    {
        name: 'IPA',
        brand: 'Minerva'
    }, 
    {
        name: 'Porter',
        brand: 'Fuller'
    }, 
    { 
        name: 'IPA',
        brand: 'Lagunitas'
    },
    { 
        name: 'Piedra Lisa',
        brand: 'Colima'
    }, 
    { 
        name: 'Modelo',
        brand: 'Corona'
    }
];

function load(raw_data, numberOfRecords, f) {
    const data = raw_data;
    let i = 0;
    let reg = numberOfRecords;
    const fn = f;

    return () => {
        if (i >= data.length) return;

        const arr = [];

        for( let j = 0; j < reg && i < data.length; j++ ) {
            arr.push(data[i++]);
        }

        fn(arr);
    }
}

const showData = load(beers, 2, (arr) => {
    myBeers.innerHTML += arr.reduce((accumulator, beer) => {
        return accumulator += `<div>
            <h2>${beer.name}</h2>
            <p>${beer.brand}</p>
        </div>`
    }, "");
})
;

const showData2 = load(beers, 2, (arr) => {
    console.log(arr);
})
;

btnLoad.addEventListener("click", () => {
    showData();
    showData2();
});