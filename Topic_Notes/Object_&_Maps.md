# Objects (Dictionaries)
* In JavaScript, objects are often used as dictionaries to store key-value pairs. Dictionaries to store key-value pairs.
* The keys can only be strings or symbols. 
* Objects provide unordered data structures.

# Code:
dictionary ()
let dictionary = {
  key1: "value1",
  key2: "value2",
  key3: "value3"
};

// Accessing values
console.log(dictionary.key1);  // Output: value1

// Adding new key-value pair
dictionary.key4 = "value4";

// Looping through keys
for (let key in dictionary) {
  console.log(`${key}: ${dictionary[key]}`);
}

# Map:
* Map is an ordered collection of key-value pairs, introduced in ES6.
* Keys can be any type (objects, functions, etc.), unlike objects where keys are strings or symbols.
* Map remembers the original insertion order of the keys.

# Map Example Code: 
let map = new Map();

// Adding key-value pairs
map.set('key1', 'value1');
map.set('key2', 'value2');
map.set('key3', 'value3');

// Accessing values
console.log(map.get('key1'));  // Output: value1

// Checking if a key exists
console.log(map.has('key2'));  // Output: true

// Looping through key-value pairs
for (let [key, value] of map) {
  console.log(`${key}: ${value}`);
}

// Removing a key
map.delete('key2');

// Getting the size of the map
console.log(map.size);  // Output: 2

# Differences between Objects and Maps:
* Key types: Object keys are always strings or symbols, while Map keys can be any data type.
* Order: Map preserves the insertion order of its keys, whereas Object does not guarantee order (though modern engines tend to keep order for string keys).
* Size: Map has a size property, while Object does not have a direct way to get the size.
* Methods: Map provides useful methods like set, get, delete, and has, which make it more powerful for managing key-value pairs than Object.