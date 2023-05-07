let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
const quotes = [{
    quote: `"The way to get started is to quit talking and begin doing."`,
    person: `Walt Disney`
},
{
    quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
    person: `Nelson Mandela`
},
{
    quote: `"If life were predictable it would cease to be life, and be without flavor. ."`,
    person: `Eleanor Roosevelt`
},
{
    quote: ` "Many of life’s failures are people who did not realize how close they were to success when they gave up."`,
    person: `Thomas A. Edison`
},
{
    quote: ` "Money and success don’t change people; they merely amplify what is already there."`,
    person: `Will Smith`
},
{
    quote: `"The big lesson in life, baby, is never be scared of anyone or anything."`,
    person: `Frank Sinatra`
},
{
    quote: `"If you want to lift yourself up, lift up someone else."`,
    person: `Booker T. Washington`
},
{
    quote: `"Once you face your fear, nothing is ever as hard as you think."`,
    person: `Olivia Newton-John`
},
{
    quote:`"If what you have done yesterday still looks big to you, you haven't done much today."`,
    person:`Mikhail Gorbachev`
},
{
    quote:`"Believe you can and you're halfway there."`,
    person: "Theodore Roosevelt"
},
{
    quote:`"It is during our darkest moments that we must focus to see the light."`,
    person: "Aristotle"
}

];
btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()*quotes.length)
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
    
})