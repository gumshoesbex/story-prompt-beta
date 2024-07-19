
// created 3 different sections of story prompt: beginning, 1 noun, 1 verb
let storyPieces = {
        beginnings: ['It all started when the ', 'Looking back now, I should have ', 
        'It was the best of times, when the ', 'Once upon a time, the ', 'When the clock struck midnight, the '],
        nouns: ['book', 'computer', 'cheetah', 'coffee', 'heinie', 'octopus'],
        verbs: ['pranced', 'evacuated', 'hacked', 'guzzled', 'studied', 'danced']
}

// create a function to format and display
function storyCreator() {
    // assigned a random number to each section
    let beginningIndex = Math.floor(Math.random() * storyPieces.beginnings.length);
    let nounsIndex = Math.floor(Math.random() * storyPieces.nouns.length);
    let verbsIndex = Math.floor(Math.random() * storyPieces.verbs.length);

    //chooose section by random number
    let beginningChoice = storyPieces.beginnings[beginningIndex];
    let nounChoice = storyPieces.nouns[nounsIndex];
    let verbChoice = storyPieces.verbs[verbsIndex];

    // put all sections together and print
    console.log(beginningChoice + nounChoice + ' ' + verbChoice);
}

storyCreator();


