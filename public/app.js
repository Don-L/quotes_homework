window.onload = function(){
  main();
}

function main(){

  var quotes = [{'words': "Visual Basic is the way forward, I don't know why we are doing JavaScript.  ", 
                'person': 'Jay Chetty'},
                {'words': 'I used the jQuery diet plugin and lost 10kg in a week.  ',
                'person': 'Keith'},
                {'words': 'Scaffolding is nothing but a fiery hell.  ',
                'person': 'Valerie'},
                {'words': 'The only CSS you need to know is background-color: tomato.  ',
                'person': 'Rick'},
                {'words': 'That is quite obviously a frog.  ',
                'person': 'Jay Chetty'}]

  displayQuotes(quotes);

  userQuoteForm();

  var button = document.getElementById('userQuote');
  button.onclick = handleClick;

  var articles = document.getElementsByTagName('article');
  for (var i = 0; i < articles.length; i++) {
    articles[i].style.backgroundColor = 'wheat';
  }

  
}


var handleClick = function() {

  var inputWords = document.getElementById('user-quote-words');
  words = inputWords.value;
  var inputPerson = document.getElementById('user-quote-person');
  person = inputPerson.value;
  appendQuote(words, person);
  inputWords.value = '';
  inputPerson.value = '';
}


var appendQuote = function(inputWords, inputPerson) {

  var section = document.getElementById('quotes');
  var article = document.createElement('article');
  article.style.backgroundColor = 'wheat';
  var blockquote = document.createElement('blockquote');
  blockquote.innerText = inputWords + '  ';
  var cite = document.createElement('cite');
  cite.innerText = inputPerson;
  section.appendChild(article);
  article.appendChild(blockquote);
  blockquote.appendChild(cite);
}




var displayQuotes = function(quoteList) {

  var index = getRandomQuoteIndex(quoteList);

  var quoteOfTheDay = quoteList.splice(index, 1)[0];
  var aside = document.getElementById('quote-of-the-day');
  var h2 = document.createElement('h2');
  h2.innerText = 'Quote of the Day';
  var blockquote = document.createElement('blockquote');
  blockquote.innerText = quoteOfTheDay['words'];
  var cite = document.createElement('cite');
  cite.innerText = quoteOfTheDay['person'];
  aside.appendChild(h2);
  aside.appendChild(blockquote);
  aside.appendChild(cite);

  var section = document.getElementById('quotes');

  for (quote of quoteList) {
    var deleteButton = document.createElement('button');
    deleteButton.id = quote['words'];
    var article = document.createElement('article');
    var blockquote = document.createElement('blockquote');
    blockquote.innerText = quote['words'];
    var cite = document.createElement('cite');
    cite.innerText = quote['person'];
    section.appendChild(article);
    article.appendChild(blockquote);
    blockquote.appendChild(cite);
    article.appendChild(deleteButton);

  }

}


var getRandomQuoteIndex = function(quoteList) {
  return (Math.floor(Math.random() * (quoteList.length) + 0));
}



var userQuoteForm = function() {

  var main = document.getElementById('main');
  var form = document.createElement('form');
  var textInput = document.createElement('input');
  var fieldset = document.createElement('fieldset');
  textInput.type = 'text';
  textInput.placeholder = 'Enter your own quote here';
  textInput.size = 70;
  textInput.id = 'user-quote-words';
  var button = document.createElement('input');
  button.type = 'button';
  button.value = 'Display your quote!';
  button.id = 'userQuote';
  var nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.placeholder = 'Who said it?';
  nameInput.size = 40;
  nameInput.id = 'user-quote-person';

  main.appendChild(fieldset);
  fieldset.appendChild(form);
  form.appendChild(textInput);
  form.appendChild(nameInput);
  form.appendChild(button);
}






















