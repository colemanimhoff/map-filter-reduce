const spells = require('./spells').spells

// MAP ------------------------------------------------------------------------------------------

// Clean up the data so it's more readable
// Let's map through the array, and pull out each spell's name, desc, and duration

// CODE TOGETHER HERE

function simpleSpells(spells) {
  let cleanSpells = spells.map(function(spell) {
    // Business Logic

    let cleanSpell = {
      name: spell.name,
      description: spell.desc[0],
      duration: spell.duration
    }

    return cleanSpell
  })

  return cleanSpells
}


// Write a function called cleanSpells
  // Takes an array of spells as an input
  // Returns a new array of spells that only includes:
    // Spell name
    // Spell material
    // Name of the first class that can use the spell

function cleanSpells(spells) {
  let limitedSpells = spells.map(function(spell) {
    let firstClass = spell.classes[0].name;
    let limitedSpell = {
      name: spell.name,
      material: spell.material,
      firstClass: spell.classes[0].name
    };
    return limitedSpell;
  });
  return limitedSpells;
}

// console.log(cleanSpells(spells))

// FILTER ------------------------------------------------------------------------------------------

// Write a function called filterSpellsLevel that returns a new array of spells
  // Spell's level is no higher than 1
  // Keep spells that are level 1 or below
  // Remove spells that are level 2 or above

function filterSpellsLevel(spells) {
  let lowSpells = spells.filter(function(spell) {

    // Test or Condition
    if (spell.level < 2) {
      return spell
    }

    return spell.level < 2;

  });
  return lowSpells;
}

// console.log(filterSpellsLevel(spells))

// REDUCE ------------------------------------------------------------------------------------------

const numberArray = [1, 4, 6, 19, 24]

function sumArrayNums(array) {
  return array.reduce(function(accumulator, currentValue) {
    // Business logic
    // add them together

    return accumulator + currentValue
  }, 0) 
}

// console.log(sumArrayNums(numberArray))

// Write a function called reduceSpellNames that returns an 
// array of the spells' names
  // Function takes an array of spell objects as an input
  // Function returns an array of spell names as an output

  // function reduceSpellNames(spells) {
  //   return spells.reduce(function(spellArray, spell) {

  //     // console.log(spellArray)
  //     spellArray.push(spell.name)
  //     return spellArray

  //   }, []);
  // }
  // console.log(reduceSpellNames(spells));



  // function reduceSpellNames(spells) {
  //   let spellNames = spells.reduce(function(accumulator, spell) {
  //     console.log(accumulator)
  //     accumulator.push(spell.name);
  //     return accumulator

  //   }, []);

  //   return spellNames
  // }


  function reduceSpellNames(spells) {
    return spells.reduce(function(spellArray, spell) {
      spellArray.push(spell.name);
      return spellArray;
    }, []);
  }
  // reduceSpellNames(spells);

// console.log(reduceSpellNames(spells))



function reduceSpellsPractice(spells) {
  return spells.reduce(function(spellsArray, spell) {

    console.log(spellsArray)

    // Initalize new spell object
    let spellsObject = {}

    // Add data from current spell (curent value of iteration) to spellsObject
    spellsObject.name = spell.name;
    spellsObject.data = {};
    spellsObject.data.range = spell.range;
    spellsObject.data.material = spell.material;

    // Push the new spellsObject into accumulator array
    spellsArray.push(spellsObject)

    // Return accumulator to next iteration
    return spellsArray
  }, []);
}

// console.log(reduceSpellsPractice(spells));


// // First iteration
// []

// // Second iteration
// [
//   {
//     name: "Acid Arrow",
//     data: {
//       range: "90 feet",
//       material: "Powdered rhubarb leaf and an adder’s stomach."
//     }
//   }
// ]

// // Third iteration
// [
//   {
//     name: "Acid Arrow",
//     data: {
//       range: "90 feet",
//       material: "Powdered rhubarb leaf and an adder’s stomach."
//     }
//   },
//   {
//     name: "Acid Splash",
//     data: { range: "60 feet", material: undefined }
//   }
// ]

// // Fourth iteration
// [
//   ({
//     name: "Acid Arrow",
//     data: {
//       range: "90 feet",
//       material: "Powdered rhubarb leaf and an adder’s stomach."
//     }
//   },
//   {
//     name: "Acid Splash",
//     data: { range: "60 feet", material: undefined }
//   },
//   {
//     name: "Aid",
//     data: { range: "30 feet", material: "A tiny strip of white cloth." }
//   })
// ]

// // Final iteration

// [
//   ({
//     name: "Acid Arrow",
//     data: {
//       range: "90 feet",
//       material: "Powdered rhubarb leaf and an adder’s stomach."
//     }
//   },
//   {
//     name: "Acid Splash",
//     data: { range: "60 feet", material: undefined }
//   },
//   {
//     name: "Aid",
//     data: { range: "30 feet", material: "A tiny strip of white cloth." }
//   },
//   {
//     name: "Alarm",
//     data: {
//       range: "30 feet",
//       material: "A tiny bell and a piece of fine silver wire."
//     }
//   })
// ];

function mapAndReduce(spellsArray) {
  // Map over spellsArray
  // Return object with:
    // spell name
    // spell duration
    // Array of class names that can use the spell
    // Ex. {
      //   name: 'string',
      //   duration: 'string',
      //   classes: ['string', 'string']
      // }

  let result = spellsArray.map(function(currentSpell) {

    let spellObject = {
      name: currentSpell.name,
      duration: currentSpell.duration,
      classes: currentSpell.classes.reduce(function(classArray, currentClass) {
        let name = currentClass.name
        classArray.push(name)
        return classArray
      }, [])
    }
    
    return spellObject
  })
  return result
}

console.log(mapAndReduce(spells))

// [
//   {
//     name: "Acid Arrow",
//     duration: "Instantaneous",
//     classes: ["Wizard"]
//   },
//   {
//     name: "Acid Splash",
//     duration: "Instantaneous",
//     classes: ["Sorcerer", "Wizard"]
//   },
//   {
//     name: "Aid",
//     duration: "8 hours",
//     classes: ["Cleric", "Paladin"]
//   },
//   {
//     name: "Alarm",
//     duration: "8 hours",
//     classes: ["Ranger", "Wizard"]
//   }
// ];