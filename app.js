const spells = require('./spells').spells


// MAP

// Clean up the data so it's more readable
// Let's map through the array, and pull out each spell's name, desc, and duration

// CODE TOGETHER HERE


// Write a function called cleanSpells
  // Takes an array of spells as an input
  // Returns a new array of spells that only includes:
    // Spell name
    // Spell material
    // Name of the first class that can use the spell


// FILTER

// Write a function called filterSpellsLevel that returns a new array of spells
  // Spell's level is no higher than 1
  // Keep spells that are level 1 or below
  // Remove spells that are level 2 or above


// REDUCE

// const numberArray = [1, 4, 6, 19, 24]

// function sumArrayNums(array) {
//   return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
// } 

// console.log(sumArrayNums(numberArray))


// Write a function called reduceSpellNames that returns an array of the spells' names
  // Function takes an array of spell objects as an input
  // Function returns an array of spell names as an output

  // function reduceSpellNames (spells) {
  //   return spells.reduce((spellArray, spell) => {
  //     spellArray.push(spell.name)
  //     return spellArray
  //   }, [])
  // }

  // console.log(reduceSpellNames(spells))

  // function reduceSpellsObject (spells) {
  //   return spells.reduce((spellsArray, spell) => {
  //     console.log(spellsArray)
  //     //intitalize new spellObj
  //     let spellsObj = {}
  //     //add data from current spell (cureent value of iteration to spellsObj)
  //     spellsObj.name = spell.name
  //     spellsObj.data = {}
  //     spellsObj.data.range = spell.range
  //     spellsObj.data.material = spell.material
  //     //push spellsObj into accumulator array
  //     spellsArray.push(spellsObj)
  //     //return accumulator to next iteration
  //     return spellsArray
  //   }, [])
  // }

  // console.log(reduceSpellsObject(spells))

    //Map over spells array
    //Return object with spell name
    //Spell duration
    //Array of class names that can use the spell
    // {
    //   name: 'string',
    //   duration: 'string', 
    //   classes: ['string', 'string']
    // }

  function mapAndReduce (spellsArray) {
    let results = spellsArray.map((currentSpell) => {
      let spellObj = {
        name: currentSpell.name,
        duration: currentSpell.duration,
        classes: currentSpell.classes.reduce((classArray, currentClass) => {
          let name = currentClass.name
          classArray.push(name)
          return classArray
        }, [])
      }
      return spellObj
    })
    return results
  }

  console.log(mapAndReduce(spells))