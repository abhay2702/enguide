var quote=[
    
    'A pure element can take many forms.',
 'The surface of Mars is red because of the presence of iron oxide.',
'Helium can be frozen only through pressure; not by cooling.',
' Wasp stings are alkaline whereas bee stings are acidic.',
'The Amazon rainforest produces approximately 20% of the oxygen in the atmosphere.',
 'Hydrofluoric acid is so corrosive that it can dissolve glass.',
'Hot water freezes quicker than cold water.',
'Bones, teeth, and pearl will dissolve in vinegar because it contains weak acetic acid.',
'The most abundant element on the Earth is Oxygen.',
'The most abundant element in the universe is hydrogen.',
'J is the only letter that doesn’t appear on the periodic table.',
'Carbon comes in many forms like graphite, diamond, etc.',
'The chemical elements are organized in order of their increasing atomic numbers.',
'Gold and copper are the only two metals devoid of having a silvery appearance.',
'Your tooth enamel is the hardest chemical substance in your body.',
'There is about 250 g of table salt (NaCl) in an average adult human body.',
'Many radioactive elements do glow in the dark.',
'If you add a handful of salt in a glass of water, the level of water would actually go down.',
'Fire spreads uphill quicker than downhill. That is because temperature considerably affects the rate of combustion.',
'Unlike many other substances, water expands during freezing. An ice cube takes up almost 9% more volume than the water used to make it.',
'Bromine and mercury are the only elements that can stay liquid at room temperature.',
'Hydrogen is the first element in the periodic table. It is highly inflammable.',
'Ununoctium is the heaviest metal found so far.',
'DNA doesn’t catch fire..',
'Helium is lighter than air. Hence, it floats.',
'Alfred Nobel invented dynamite in 1866.',
'A lightning strike may sometimes reach a staggering temperature of 30,000 degrees Celsius (i.e., 54,000 degrees Fahrenheit)..',
'More than 78% of human brain consists of water.',
'The lighter was invented way before the match.',
'The softest known substance known to humankind is talc.',
'Tabletop volcanoes (ones found commonly in school exhibitions and projects) can be created using ammonium dichromate.',
'The solid form of carbon dioxide is known as the dry ice.',
'Sound travels 4.3 times faster in comparison to air. It doesn’t travel through the vacuum at all.',
'Stale eggs will float in water. Fresh eggs will sink.',
'If you expose a glass of water to space, it won’t freeze; rather it will boil. The water vapor would, however, turn into ice soon afterward.',
'When you freeze seawater or saltwater, you get freshwater ice.',
 'Goldfish eyes perceive the visible spectrum, infrared, as well as the ultraviolet light.',
'Lobster blood is colorless until it’s exposed to air. The blood then appears to be blue.',
'Graphene (AKA the miracle metal) is the best conductor of electricity and heat.',
'Dynamite contains peanuts as a part of its ingredient.',
'Gallium has a melting point of 29.76 degrees centigrade and can melt on the palm of your hand..',
'Lemons have more sugar than strawberries.',
'Fish scales are commonly used as an integral part of lipstick ingredients.',
'Chalk is made of trillions of microscopic skeleton fossils of plankton.',
 'Blue is the color of liquid oxygen.',
'Yes, it is possible to die from drinking too much water.',
'You cannot taste anything without saliva.'


]
function newQuote(){
    var randomNumber=Math.floor(Math.random()*(quote.length));
    document.getElementById('quoteDisp').innerHTML=quote[randomNumber];

}

