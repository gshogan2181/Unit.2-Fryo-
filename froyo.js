// Prompt user to pick flavors 
const userInputString = prompt(
        "Enter a list of comma-separated froyo flavors:",
        "Strawberry, Vanilla, Raseberry, coffee, Pinapple"
    
);

const FlavorArray = userInputString.split(",")

const FlavorCount = {};

for (let i = 0; i < FlaovorArray.length; i++) {
    const flavor = FlavorArray[i].trim();
    FlavorCount[Flavor] = (flavorCount[flavor]|| 0) +1
}

console.log(flavorCount);

function formatFlavorTable(flavorCount) {
    let table ="\Flavor\Quantity\n"

    for (const flavor in flavorCount) {
        table += `${flavor}\${flavorCount[flavor]}\n`
    }

    return table;
}

console.log (formatFlavorTable(flavorCount));