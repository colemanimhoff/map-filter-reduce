const spells = require('./spells').spells


// MAP

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

// FILTER

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

console.log(filterSpellsLevel(spells))

// REDUCE

// Write a function called reduceSpellNames that returns an array of the spells' names
  // Function takes an array of spell objects as an input
  // Function returns an array of spell names as an output
