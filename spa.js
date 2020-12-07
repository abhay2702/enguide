var quote=[
    
'Windows’ original name was Interface Manager.',
'Cambridge University used the first webcam.',
'The woman who rented out her garage to Larry Page and Sergey Brin in 1998 later became the CEO of YouTube.',
'The founder of the McAfee Antivirus program, John McAfee does not use his software.',
'Bill Gates house was designed using a Macintosh computer.',
'Over 5000 new computer viruses are released every month.',
 'Douglas Englebert invented the first computer mouse in 1964.',
 'The Windows 98 OS would move windows outside the average monitors resolution as a way of minimising them.',
'This is mainly because parts were harder to come by during earlier times and would often have to be custom made or ordered.',
'The QWERTY keyboard was invented to reduce the typing speed of users.',
'Amazon now sells more ebooks than hardcover books.',
'In 2010, a high school in Pennsylvania issued MacBooks to its entire student body.',
'HP, Apple, and Microsoft all began developing their computers in a garage.',
'80% of emails sent daily are spam mail.',
'Around 70% of virus programmers allegedly work under a strict contract for crime syndicates.',
'The word "Typewriter" is the longest word you can type using only one row of the keyboard.',
'The Tandy TRS-80 Model I computer radiates so much interference that you need to use an AM radio to play sounds from games.',
'The father of Computer Science committed suicide.',
'A computer as powerful as the human brain would be able to perform 38,000 trillion operations per second.',
'Large banks use computers to process checks and debit card charges by the highest amount first.',
'A 15-year-old once hacked NASA.',
'The Sasser worm mainly targets computers running on Microsoft OS and exploits a vulnerable network port.',
'Mary Kenneth Keller is the first woman from the U.S. to earn a PHD in Computer Science',
'The new Texas Instrument calculators have ABC keyboards as the standardised tool for tests.',
 'John Lasseter promoted computer animation. They fired him for it.',
'Three students once installed keystroke loggers onto their teachers computers to hack and sell grades to students..',
'A random memory stick an employee found in a parking lot hacked U.S military computers..',
'The United States Air Force used the first transistor computer.',
'92% of the worlds currency exists only on computers.',
'1 out of 8 people in the United States met online.',
'Johann Henrich von Muller conceptualised a computer on paper, called the Difference Engine, in 1786.',
'The first hard disk cost $40,000 and weighed 550 lbs.',
 'Creeper, written by Bob Thomas in 1971, is the first computer virus.',
'The first computer looked like an oversized calculator.',
'The first hard drive could only hold 5MB of data'


]
function newQuote(){
    var randomNumber=Math.floor(Math.random()*(quote.length));
    document.getElementById('quoteDisp').innerHTML=quote[randomNumber];

}

