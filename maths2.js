var quote=[
    
    'There are types of interesting numbers in mathematics. One such number is a hundred. The number 100 does not actually mean 100. It is derived from the Old Norse word "hundrath," which actually means 120.',
'The number 2 is the smallest prime number. It is also the only even prime number. The digit 1 is considered to be prime to every other number. Therefore, we take 2 as the smallest.',
'We all have heard about the Pythagoras theorem. But there is also something which is known as Pythagoras constant. The square root of 2 i.e. 1.41 was the first rational number to be discovered which is known as the Pythagoras constant.',
'Romans did not consider 0 to be a number at all. Therefore, there are in total zero zeros in Roman numerals.',
'The idea of zero was invented by an Indian astronomer and mathematician Brahmagupta in around 600 A.D. He contributed a lot to mathematics and astronomy and is known for explaining how to find the cube and cube-root of an integer. ',
'Roman numerals only have seven different letters which form the entire number system:  I, V, X, L, C, D, and M.',
'Mathematically, an even number is a number that can be divided into two smaller numbers which are actually whole numbers.',
'There is only one number in the entire Hindu Arabic number system which can be spelled with the same number of letters as itself. That number is four.',
'If you take any number multiplied by three and sum the digits in the answer, then the answer you receive after adding the digits will always be divisible by three. For example: 3 x 4 = 12 or, 1 + 2 = 3 or, 3 / 3 = 1',
'A perfect number refers to a positive integer which is equal to the sum of its positive divisors. By this rule, 6 is the smallest perfect number. The next perfect number is 28.',
'We follow the decimal system number which has 10 digits from 0 to 9. It is also known as the Hindu Arabic numeral system. It was discovered more than 1000 years ago.',
'Pi is also known as the ratio of circumference to the diameter of a circle. It is a special number which is irrational. There is a designated day, called Pi day, that we celebrate on March 14.',
'Leonardo Fibonacci from Pisa, in the 13th century, discovered the Fibonacci sequence. Starting at 0 and 1, this sequence is created as the sum of the two preceding numbers, For example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, …',
'9 is also known as the magic number. This is because if you multiply a number by 9 and add all the digits of the new number together, the sum will always add up to 9. For example: 8 x 9 = 72 or, 7 + 2 = 9',
'Very often, the number 1 is confused as a prime number but dividing 1 by 1, you get 1. Nothing has been divided.',
'The game blackjack originated in Italy and was known as the game 31. The goal was similar to a modern Day blackjack i.e. reach as close as to 31. ',
'If you walked up on the street and asked someone about their favorite number, there is almost a 10% chance that they will say number seven.',
'13 is regarded as an unlucky number. But in Alex Bellos research, it turned out to be the most popular two-digit number.',
'Googol means 1 followed by 100 zeroes. A googolplex is 1 followed by a googol zeros. It is hard to imagine how long this number would be.',
'Denver is known as the mile-high city because it has an elevation of precisely 5280 feet – the length of a mile.',
'Number four is viewed with superstition and distrust and much of East Asia. This is known as tetra phobia. This is because the word four sounds similar to that in a number of Asian languages.',
'Teenagers texting in Thailand will send the digits 555 to indicate that something is funny. In the Thai language, 5 is pronounced as ha which when translated becomes hahaha.',
'The majority of the months have 31 days in a calendar. Only four months have 30 days i.e. April, June, September, and November. February typically only has 28 days, with the exception of leap years.',
'In a sample of 23 people, there are 50% chances that two of them will share the same birthday. This is known as the birthday problem.',
'Seven is the most significant number across religions and cultures. For example, seven colors in a rainbow, seven days in a week, seven notes on the musical skill, etc.',
'Zero is the only number that cannot be represented by Roman numerals because there is no letter that represents zero.',
'What comes after million, billion, and trillion? You can term the numbers after these terms as quadrillion, quintillion, sextillion, septillion, octillion, nonillion, and decillion.',
'The signs Plus (+) and Minus (-) were discovered as early as in 1489 A.D.',
'Two and five are the only prime numbers in the entire number system which ends with two or five.',
'A geometrical close bounded figure which has 20 sides is known as an icosagon.',
'In Indian number system, from 0 to 1000, the letter A only appears first in 1000 ("one thousand"). ',
'The calculator which is the most widely used mathematical device in todays world has actually originated from the concept of an abacus.',
'If the sum of the digits is divisible by three, then the given number will also be divisible by three. This is known as the rule of divisibility of three.',
'If you add up all the numbers between 1 to 100 consecutively then the total that you will reach is 5050.',
'Jiffy is actually considered to be a unit of time for 1/100th of a second ',
'Do you know what a Palindrome Number is? It is a number that reads the same backward and forward, e.g. 12421.',
'There are other special numbers also apart from Pythagoras constant and pi. Some of these numbers are Euler’s constant, Golden ratio, etc.',
'The minimum number of cuts that are required to cut the figure into eight pieces are three i.e. horizontally, vertically, and cutting by the base.',
'The opposite sides of a dice always add up to 7. For example, 6 and 1 will always be on opposite sides which add up to 7.',
'A baseball field is of the perfect shape of a rhombus.'


]
function newQuote(){
    var randomNumber=Math.floor(Math.random()*(quote.length));
    document.getElementById('quoteDisp').innerHTML=quote[randomNumber];

}

