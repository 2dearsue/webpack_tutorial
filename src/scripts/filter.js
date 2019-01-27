const fishProducts = [
  {species: 'Corvina', weight: 18, pricePerKg: 100}, // index 0
  {species: 'Luvina', weight: 1.6, pricePerKg: 250}, // index 1
  {species: 'Bacalao', weight: 32, pricePerKg: 60}, // index 2
  {species: 'Tuna', weight: 450, pricePerKg: 1000}, // index 3
  {species: 'Tuna', weight: 420, pricePerKg: 1000}, // index 4
  {species: 'Corvina', weight: 21, pricePerKg: 100}, // index 5
  {species: 'Corvina', weight: 23, pricePerKg: 100}, //index 6
  {species: 'Luvina', weight: 1.4, pricePerKg: 250}, // index 7
  {species: 'Hering', weight: 0.03, pricePerKg: 4}, // index 8
  {species: 'Tuna', weight: 390, pricePerKg: 1000}, // index 9
  {species: 'Luvina', weight: 18, pricePerKg: 100}, //  index 10
  {species: 'Bacalao', weight: 28, pricePerKg: 60}, // index 11
  {species: 'Corvina', weight: 17, pricePerKg: 100}, // index 12
];


const removeFish = (fishCollection, typeOfFish, numOfFishes = 1) => {
      const findFish = fishCollection.find(fish => fish.species === typeOfFish);
      const indexFish = fishCollection.indexOf(findFish);
      fishCollection.splice(indexFish, numOfFishes);
      console.log(fishCollection);
}

removeFish(fishProducts, 'Hering');

const filterBySpecies = species => fishProducts.filter(element => element.species = species);

const showCorvina = filterBySpecies('Corvina');
const showBacalao = filterBySpecies('Bacalao');
const showTuna = filterBySpecies('Tuna');
const showLuvina = filterBySpecies('Luvina');
