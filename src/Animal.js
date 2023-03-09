export default class Animal {
  static properties = {
    size: { label: 'Size', unit: 'm' },
    weight: { label: 'Weight', unit: 'kg' },
    age: { label: 'Age', unit: 'year(s)' },
    offspring: { label: 'Offsprings', unit: '' },
    speed: { label: 'Speed', unit: 'km/h' },
  };

  constructor(name, image, size, weight, age, offspring, speed) {
    this.name = name;
    this.image = image;
    this.size = size;
    this.weight = weight;
    this.age = age;
    this.offspring = offspring;
    this.speed = speed;
  }
}
