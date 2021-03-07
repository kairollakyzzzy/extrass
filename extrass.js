let words = [];
let theCommonWord ;
let sum = 0;
const PhrasesWithPictures = [
    {
        phrase: "A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey",
        imageURL: "http://www.quickmeme.com/img/9d/9d6eaa73b5d0da75ba229b66972795387243df429f6bd0996fa796bcea56ce63.jpg"
    },
    {
        phrase: "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore",
        imageURL: "https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg"
    },
    {
        phrase: "You are a wizard, Harry (c) Hagrid",
        imageURL: "https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg"
    }
];
function theMostRepeatedWord() {
  let str = document.getElementById('message').value;
  for(l = 0;l<3;l++){
    if(str.localeCompare(PhrasesWithPictures[l]['phrase']) == 0){
        let picture = document.getElementById('picture').src = PhrasesWithPictures[l]['imageURL'];
    }
  }
  let string = str.toLowerCase();
  let words = string.match(/\w+/g);
  console.log(words); 
  let occurances = {};
  for (let word of words) {
    if (occurances[word]) {
      occurances[word]++;
    } else {
      occurances[word] = 1;
    }
  }
  console.log(occurances);
  let maximum = 0;
  let theRepeatedWord = '';
  for (let word of words) {
    if (occurances[word] > maximum) {
      maximum = occurances[word];
      theRepeatedWord = word;
    }
  }
  alert(theRepeatedWord);
}