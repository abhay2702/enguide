var quote=[
    
' One bolt of lightning can contain up to 3 million volts – that’s enough to power more than 200,000 homes.',
'Lightning is Mother Nature’s static electricity.',
'The largest ever hailstone weighed over 1kg and fell in Bangladesh in 1986.',
'Every second around 100 lightning bolts strike the Earth.',
'Birds won’t get electrocuted if they sit on one power line. But if they touch two lines simultaneously, the bird will essentially become a circuit as the electricity from one line flows through it to the other line, resulting in electrocution.',
'Electricity gets an “A” for agility, traveling at more than 186,000 miles per second – the speed of light – and even jumping from one object to the next to reach its final destination somewhere in the ground.',
'The human heart is the body’s electrical system, thanks to a special group of cells that generate electricity and cause the heart to beat.',
'Electricity is present in our bodies – our nerve cells use it to pass signals to our muscles.',
'Electricity travels in closed loops called “circuits.” It must have a complete path before the electrons can move. If a circuit is open, electrons can’t flow.',
'The first central power plant in the U.S. was Pearl Station, in Manhattan. It was built in 1882 and served 85 customers.',
'The average U.S. home uses 11,000 kWh of electricity every year.',
'The world’s biggest light bulb is located in Edison, New Jersey. It’s 14 feet tall, weighs eight tons, and sits on top of the Thomas Edison Memorial Tower.',
'Static electricity occurs when the electrons from one object jump to another object.',
'Iceland is the country that uses the most electricity annually. Their consumption is about 23% more than the U.S.',
'In the 1880’s, there was a “war of currents” between Nikola Tesla and Thomas Edison. Tesla helped invent AC current and Edison helped invent DC current, and both wanted their currents to be popularized. AC won the battle because it’s safer and can be used over longer distances.',
' Electricity is sometimes used as electroconvulsive therapy (ECT), where patients are given electrically induced seizures in order to treat psychiatric illnesses.',
'Electricity can be created using water, wind, the sun, and even animal waste.',
'Before electricity was a way of life, ancient Egyptians were aware that lightning and shocks from electric fish were very powerful. They used to refer to these fish as the “Thunderers of the Nile.”',
'Electricity travels at the speed of light, which is 186,000 miles per second.',
'Someone took the trouble to calculate this, and we’re going to take their word for it: you would need about 648 AA batteries to power a human being for a day (based on 1 calorie = 4.2 Joules)!',
'Electricity was introduced to Ethiopia in 1896 after Emperor Menelik II ordered two newly invented electric chairs as a form of humane capital punishment and realised they were useless in his country without electricity.',
'In Albertville, France , they make electricity from cheese! Since whey isn’t needed to make Beaufort cheese, bacteria is added to the whey, turning it into biogas. This gas is then fed through an engine which heats water to generate electricity..',
'Ore trains in Sweden traveling down to the coast generate five times the amount of electricity they use, powering nearby towns and the return trip for other trains',
'The word “electrocute” is a combination of the words electro and execute, meaning you were killed by electricity. So, if you don’t die, you were not electrocuted, only shocked.',
'You may have watched a gecko climb what looks to be a smooth surface. This ability is due in part to the electrostatic forces on the gecko’s toe pads. The difference in charge between its feet and the surface help it “stick” to the wall.',
'The electric eel (a type of knifefish) can deliver a shock of up to 600 volts, for hunting or self-defence.',
'Echidnas and platypuses use the electrical impulses emitted by their prey to find food. A platypus’ bill is covered in nearly 40,000 electricity sensors – or electroreceptors – arranged in a series of stripes.',
'In some species of fish native to the Amazon River, certain muscle cells have evolved over millions of years into cells called electrocytes, which they use for echolocation, that is to detect obstacles and other animals in the dark.',
'Electricity causes muscle cells in your heart to contract, essentially making it beat. Electrocardiogram (ECG) machines measure the electricity going through the heart.',
'As an example of how much more efficient modern appliances are, a fridge from the mid-80s, 30 years ago, used four times as much electricity as a modern one (about 1400 kWh a year compared to 350 kWh).',
'Appliances also use electricity when they’re switched off. The average desktop computer idles at 80 watts, while the average laptop idles at 20 watts. A Sony PlayStation 3 uses about 200 watts, both when it’s active and when it’s idle.',
'A typical microwave oven consumes more electricity powering its digital clock than it does heating food',
'LED light bulbs use about one-sixth of the electricity that conventional bulbs do, cost about a quarter as much to use, and last about 40 times longer.',
'The first four common domestic items to be powered by electricity were the sewing machine, fan, kettle and toaster.',
'According to the Global Energy Statistical Yearbook, global electricity production for 2015 approached 25,000 terawatt hours (1 terawatt = 1 trillion watts).',
'A bolt of lightning can measure up to three million (3,000,000) volts (and lasts less than one second).',
'The average taser emits 50,000 volts.',
'A spark of static electricity can measure up to 3,000 volts.',
'Electricity travels at the speed of light, about 300,000 kilometres per second.',
'The first successful electric car was built in 1891 by American inventor William Morrison.',
'Thomas Edison built the first power plant, and in 1882 his Pearl Street Power Station in New York sent electricity to 85 buildings.',
'The first street in the world to be lit by electric light bulbs was Mosley Street, Newcastle upon Tyne, in 1879.',
'Australia’s first recorded use of electricity was to light Sydney’s General Post Office in 1878.',
'The basic principles of electricity generation were discovered during the 1820s and early 1830s by the British scientist Michael Faraday.'


]
function newQuote(){
    var randomNumber=Math.floor(Math.random()*(quote.length));
    document.getElementById('quoteDisp').innerHTML=quote[randomNumber];

}

