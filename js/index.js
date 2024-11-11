var quotes = [{
    'author': '― Robert Frost',
    'quote': '“In three words I can sum up everything Ive learned about life it goes on.'
},
{
    'author': '― Oscar Wilde',
    'quote': '“Be yourself; everyone else is already taken.”'
},
{
    'author': '― Mahatma Gandhi',
    'quote': '“Be the change that you wish to see in the world.”'
},
{
    'author': '― Plato',
    'quote': '“Only the dead have seen the end of war.”'
},
{
    'author': '― Pablo Picasso',
    'quote': '“Everything you can imagine is real.”'
},
{
    'author': '― Bill Watterson',
    'quote': '“Reality continues to ruin my life.”'
},
];

function ChangeQuote(){
    var number = Math.floor(Math.random()* quotes.length + 1);
    document.querySelector('#quotes').textContent = `${quotes[number].quote}`;
    document.querySelector('#author').textContent = `${quotes[number].author}`;
}







