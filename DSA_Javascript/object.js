let dictionary = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
  };
  
  // Accessing values
  console.log("Print first value: ", dictionary.key1);  // Output: value1
  
  // Adding new key-value pair
  dictionary.key4 = "value4";
  
  // Looping through keys
  console.log("Print all values in below: ")
  for (let key in dictionary) {
    console.log(`${key}: ${dictionary[key]}`);
  }