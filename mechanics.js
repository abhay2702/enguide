var quote=[
   
'The best way to write that is not with words but with symbols.',
'Newtons second law of motion describes how net force, mass, and acceleration are related.',
'Space, in the mathematical sense, is isotropic.',
 'Pick preferred directions that make your life easy.',
 'Force is a vector quantity, which means that direction matters. ',
'The word net in the phrase net force means total, combined, or overall.',
'The change that matters is acceleration.',
'Dynamics implies change. Statics implies changelessness.',
'Statics is the study of forces without motion; or more formally, the branch of mechanics that deals with forces in the absence of changes in motion.',
'Informally, dynamics is the study of forces and motion.',
'Identify your Weak Points and Eliminate Them!',
'The weekly revision plan helps improve memory.',
'Make it a point that you pick a chapter from mechanics section and solve a few problems every weekend.',
'If you want to master mechanics, then you need to adopt a smart approach.',
'A great way to learn is through drawings or graphics. There are immense benefits of drawings as they can be essential to understand and study physics.',
' Give special attention to fluid mechanics. It uses all the concepts you have learned till now.',
'If the problem remains unsolved, then use force/torque equations. Pulley problems, ladder based questions, etc. are best solved by this method.',
'If there’s a rotating body, can you possibly use conservation of angular momentum for that particular problem?',
'Always think about conservation laws first. Can you use conservation of energy or momentum in the question? Examples of such situations may be the spring-mass system, projectile splitting into two parts, a bullet fired from a gun, etc.',
'On a Kinematics problem, ask yourself if it involves relative velocity? Use the definitions here.',
'Read the problem first and start asking questions to yourself.',
 'It would also be helpful to work on Conservations Laws (Energy, Momentum, and Angular Momentum) & Force and Torque Equations to get better clarity.',
'Acceleration is always in the direction of velocity. True or False? Answer in your mind. False',
'A ball is dropped? It means its initial velocity is zero, relative to the dropper.',
'What about ‘just begins to slide’? Static friction has reached its maximum value.',
'Do you what ‘maximum height’ means? It means velocity in the vertical direction is zero.',
'Identify and convert keywords into their meaning in physics',
'Rotation – Torque equation and Law of conservation of angular momentum.',
'Momentum – Law of conservation of momentum',
 'Work and Energy – Introduces Law of Conservation of Energy ( work-energy theorem )',
' Newton’s Laws – Introduces force equations',
'Kinematics – Introduces definitions and key terms.'


]
function newQuote(){
    var randomNumber=Math.floor(Math.random()*(quote.length));
    document.getElementById('quoteDisp').innerHTML=quote[randomNumber];

}

