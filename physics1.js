var quote=[
    'The speed of light is generally rounded down to 186,000 miles per second. In exact terms it is 299,792,458 m/s (metres per second – that is equal to 186,287.49 miles per second)',
    'It takes 8 minutes 17 seconds for light to travel from the Sun’s surface to the Earth.',
    'Quasars emit more energy than 100 giant galaxies.',
    'If our Sun were just inch in diameter, the nearest star would be 445 miles away.',
 'One million, million, million, million, millionth of a second after the Big Bang the Universe was the size of a …pea.',
'Some of the main physics formulas deal with 1D motion, 2D & 3D motion, the laws of motion, work energy, power, circular motion, gravitation, the properties of matter and electricity.',
'Many physicists believe wormholes (a “shortcut” through space and time) exist all around us but they are smaller than atoms.',
'The thermometer was invented in 1607 by Galileo.',
'Englishman Roger Bacon invented the magnifying glass in 1250.',
'Alfred Nobel invented dynamite in 1866.',
'Wilhelm Rontgen won the first Nobel Prize for physics for discovering X-rays in 1895.',
'The mass of our entire atmosphere is estimated to be some 5.5 quadrillion tons (55 followed by 14 zeros).',
'Sunlight exerts pressure, or solar radiation pressure.',
'The lowest energy state of a atom is called the ground state.',
'All the matter that makes up the human race could fit in a sugar cube, because atoms are 99.9999999999999 % empty space.',
'Physics is an experimental science. The scientific method is used to form and test hypotheses (an educated guess or possible explanation) of observations in the natural world.',
'The energy that is dealt with in physics can range from sub-atomic particles to galaxies.',
'The energy can take the form of gravity, motion, light, electricity, radiation and many others.',
' study of matter and energy and how they interact with each other.',
'The fastest land animal in the world is the Cheetah, clocking a max speed of around 113 km per hour (70 mph).',
 '1921 Nobel Prize in Physics was won by Albert Einstein for his work in the field of theoretical physics.',
'Uranus is the only planet in our solar system that rolls on its side like a barrel, while Venus is the only planet that spins in the opposite direction to Earth.',
'A scientist who studies physics is known as a physicist.',
'A magnifying glass uses the properties of a convex shaped lens to magnify an image, making it easier to see.',
'Water can work against gravity, moving up narrow tubes in a process called capillary action',
'When traveling at 80 kilometres per hour (50 miles per hour), cars use around half of their fuel just to overcome wind resistance.',
'Sound travels at a speed of around 767 miles per hour (1,230 kilometres per hour).',
'Light from the Earth takes just 1.255 seconds to reach the Moon.',
 'Energy from food is usually measured in joules or calories.',
'Electric eels can stun both predators and prey with electric shocks of around 500 volts.',
'Because of differences in gravity, a 200 pound person would only weigh 76 pounds on Mars.'


]
function newQuote(){
    var randomNumber=Math.floor(Math.random()*(quote.length));
    document.getElementById('quoteDisp').innerHTML=quote[randomNumber];

}

