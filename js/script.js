// Define the structure of the story using a linked list
class Page {
    constructor(texts = [], nextPage = null) {
        this.texts = texts; // Array of text for each div
        this.nextPage = nextPage;
    }
}

class DecisionPage {
    constructor(pageTexts = [], nextPages = []) {
        this.pageTexts = pageTexts; // Array of choices text
        this.nextPages = nextPages; // Array of next pages corresponding to each choice
    }
}

const pages = [
    // 0. Introduction -> Clothes Soaked
    new Page([
        "You wake up on a cold, storm-battered beach. The salty air stings your skin, and debris from a shipwreck surrounds you.",
        "You don't remember how you got here, but you know one thing—you must survive.",
    ]),
    // 1. Clothes Soaked -> Beach Decision
    new Page([
        "Your clothes are soaked, and the roar of waves crashes behind you.",
        "What will you do first?"
    ]),

    // 2. Beach Decision -> 3 choices
    new DecisionPage([
        "Search the wreckage for supplies.", // 3. Searching the Wreckage
        "Explore the dense forest ahead.", // 4. Exploring the Forest
        "Walk along the beach." // 6. Walking Along the Beach
    ]),

    // 3. Searching the Wreckage -> 2. Beach Decision
    new Page([
        "You scour the debris. The shattered remains of a ship lie scattered across the shore.",
        "Amidst the wreckage, you find a length of rope, a rusty dagger, and a torn piece of a map. These items could prove useful on your journey.",
    ]),
    // ITEM: Rope, Dagger, Map

    // 4. Exploring the Forest -> Not Alone
    new Page([
        "You step into the dense forest. The trees loom overhead, and the underbrush rustles with hidden creatures.",
        "A faint sound catches your attention from the right — a low, guttural growl."
    ]),
    // 5. Not Alone -> Sound Decision 
    new Page([
        "Suddenly, you're aware that you are not alone.", ""
    ]),

    // 6. Walking Along the Beach -> 2. Beach Decision
    new Page([
        "You walk along the shoreline, keeping the forest to your right and the endless ocean to your left.",
        "After walking for a few minutes, you sense that all that lies ahead is... more beach. What will you do?"
    ]),

    // 7. Sound Decision -> 3 choices
    new DecisionPage([
        "Investigate the growling sound.", // 8. Investigate the Growl
        "Sneak away and avoid the danger.", // 10. Sneak Behind the Bear
        "Charge into the forest, ready to fight." // 11. Charge into the Forest
    ]),

    // 8. Investigate the Growl -> Bear Encounter Decision
    new Page([
        "You carefully approach the source of the sound. A bear, larger than any you've seen, stands over a fallen human body.",
        "The bear growls deeply, sensing your presence. What will you do?"
    ]),

    // 9. Bear Encounter Decision -> 3 choices
    new DecisionPage([
        "Fight the bear head-on.", // 12. Fight the Bear
        "Try to sneak up on the bear from behind.", // 10. Sneak Behind the Bear
        "Flee deeper into the forest." // 15. Flee Deeper into the Forest
    ]),

    // 10. Sneak Behind the Bear -> Fight the Bear
    new Page([
        "You attempt to sneak behind the bear, but a sharp snap of a branch gives you away!",
        "The bear turns and charges. You barely have time to react!"
    ]),

    // 11. Charge into the Forest -> Fight the Bear
    new Page([
        "You charge at the sound, ready to face whatever danger lies ahead.",
        "As you push through the underbrush, you come face to face with a massive bear!"
    ]),

    // 12. Fight the Bear -> Bear Final Decision
    new Page([
        "The bear's massive paw swipes at you, knocking you to the ground. You struggle to your feet, but the bear is relentless.",
        "You must make a choice: fight back or run for your life."
    ]),

    // 13. Bear Final Decision -> 2 choices
    new DecisionPage([
        "Fight the bear with all your might.", // 14. Die in the Bear Encounter
        "Run for your life." // 15. Flee Deeper into the Forest
    ]),

    // 14. Die in the Bear Encounter -> GAME OVER
    new Page([
        "You fight with all your strength, but the bear is too powerful. With a final roar, it strikes you down, and darkness envelops you.",
        "Your journey ends here."
    ]),

    // 15. Flee Deeper into the Forest -> Cliff Decision
    new Page([
        "You dash through the trees, the bear hot on your heels. The ground beneath you slopes sharply, leading to a sheer cliff.",
        "Ahead, you have two choices: leap down the cliff, or fight the bear at the edge."
    ]),

    // 16. Cliff Decision
    new DecisionPage([
        // SHOULD BE: 17. Climbing Down the Cliff / 18. Jumping Down the Cliff
        "Leap down the cliff.", // 17. Climbing Down the Cliff
        "Try to push the bear off the cliff." // 85. Fight Bear at Edge
    ]),

    // 17. Climbing Down the Cliff (Rope) -> Cave Exploration Decision
    new Page([
        "You throw your rope around a sturdy rock and begin your descent down the steep cliff. It's a dangerous climb, but you manage to make it halfway.",
        "Below you, the entrance to a dark cave beckons. Will you explore it?"
    ]),

    // 18. Jumping Down the Cliff (No Rope) -> Battered and Bruised
    new Page([
        "You attempt to climb down the cliff, but without a rope, the sheer drop proves too treacherous.",
        "You fall, crashing through branches and rocks, until you hit the forest floor with a bone-jarring thud."
    ]),
    // 19. Battered and Bruised -> GAME OVER
    new Page([
        "You lie there, battered and bruised. Your vision blurs, and the world fades to black.",
        "Your journey ends here."
    ]),

    // 20. Cave Exploration Decision -> 2 choices
    new DecisionPage([
        "Enter the cave.", // 29. Enter the Cave
        "Continue down the cliff to the forest floor." // 21. Continue Down the Cliff
    ]),

    // 21. Continue Down the Cliff -> Flickering Lights
    new Page([
        "You step into the dense forest. The air grows colder, and the trees seem to whisper with every gust of wind.",
        "The deeper you go, the more the forest feels alive, with rustling leaves and strange sounds surrounding you.",
    ]),
    // 22. Flickering Lights -> Follow Lights Decision
    new Page([
        "As you walk, you notice strange flickering lights in the distance. They seem to dance and beckon you deeper into the forest.",
        "What will you do?"
    ]),

    // 23. Follow Lights Decision -> 2 choices
    new DecisionPage([
        "Follow the strange flickering lights in the distance.", // 24. Follow the Strange Lights
        "Continue deeper into the thick of the forest." // 31. Deeper into the Forest
    ]),

    // 24. Follow the Strange Lights -> Beckoning
    new Page([
        "You cautiously follow the flickering lights. They lead you through a narrow trail that winds between massive, twisted trees.",
        "Soon, you arrive at a small glade where a group of figures stands silently. They seem to be ghostly beings of lost children, their big eyes glowing in the dark.",
    ]),
    // 25. Beckoning -> Ghostly Figures Decision
    new Page([
        "The ghostly figures beckon you closer, their eyes filled with a strange mixture of sadness and hope.",
        "What will you do?"
    ]),

    // 26. Ghostly Figures Decision -> 2 choices
    new DecisionPage([
        "Approach the ghostly figures.", // 27. Approach Ghostly Figures
        "Flee back the way you came." // 31. Deeper into the Forest
    ]),

    // 27. Approach Ghostly Figures -> Follow Ghosts Decision
    new Page([
        "\"We know why you're here,\" the ghostly figures whisper. \"You want to find your brother, don't you?\"",
        "\"Come! We'll show you the way!\" says the youngest one. \"But you have to trust us.\" says the taller one."
    ]),

    // 28. Follow Ghosts Decision -> 2 choices
    new DecisionPage([
        "Follow the ghostly figures and enter the cave.", // 29. Enter the Cave
        "Refuse their offer and continue your journey alone." // 30. Decline Ghostly Figures
    ]),

    // 29. Enter the Cave -> Enter the Dwaren City
    new Page([
        "You follow the ghostly figures into the cave. The darkness swallows you, and the path ahead grows narrow and treacherous.",
        "The ghosts vanish as you descend deeper, leaving you alone in the cave's depths.",
    ]),
    // MET: Ghostly Figures

    // 30. Decline Ghostly Figures -> River Decision
    new Page([
        "Deciding that the figures cannot be trusted, you turn and flee back into the forest. The ghostly figures do not follow, but the eerie feeling lingers as you go deeper into the woods.",
        "After some time, you come across a river. The water is swift, and on the other side, you see a wooden raft moored at the bank."
    ]),

    // 31. Deeper into the Forest -> River Decision
    new Page([
        "You ignore the lights and push further into the heart of the forest. The trees grow denser, their branches forming a canopy so thick that only faint beams of light filter through.",
        "You begin to feel lost, but soon you hear the sound of rushing water. You push through the undergrowth to find a river cutting through the forest."
    ]),

    // 32. River Decision -> 2 choices
    new DecisionPage([
        "Follow the river downstream.", // 33. Fall into the River
        "Head back into the forest." // 39. Continue Journey in the Forest
    ]),

    // 33. Fall into the River -> Spot Harbor Town
    new Page([
        "Your foot slips, and you plunge into the icy water. The river sweeps you downstream with terrifying speed, the currents pulling you further from the forest.",
        "After what feels like hours, you are thrown onto a riverbank, drenched and exhausted.",
    ]),
    // 34. Spot Harbor Town -> Investigate Harbor Town Decision
    new Page([
        "After brushing yourself off, you spot a small harbor town in the distance. Sailboats are moored along the docks, and the sea stretches out beyond them.",
        "The town seems peaceful, but the forest behind you is dark and foreboding."
    ]),

    // 35. Investigate Harbor Town Decision -> 2 choices
    new DecisionPage([
        "Investigate the harbor town.", // 36. Investigating the Harbor Town
        "Find your way back to the forest." // 39. Continue Journey in the Forest
    ]),

    // 36. Investigating the Harbor Town -> Sailor Decision
    new Page([
        "You walk into the harbor town, feeling the eyes of the locals on you. It's a small, quiet place, but the air is thick with the scent of salt and the sound of waves crashing against the shore.",
        "A grizzled sailor approaches you, offering passage on his ship in exchange for help on the journey. He promises that the ship will take you to lands far beyond this forest."
    ]),

    // 37. Sailor Decision -> 2 choices
    new DecisionPage([
        "Sail with the sailor to new lands.", // 38. Sailing to Another Land
        "Stay in the forest and continue your journey." // 39. Continue Journey in the Forest
    ]),

    // 38. Sailing to Another Land -> JOURNEY STARTS
    new Page([
        "You accept the sailor's offer, and soon you're aboard the ship, sailing out into the open sea.",
        "The wind fills the sails, and the distant lands of the forest fade behind you. You are filled with hope and excitement for the adventures to come."
    ]),

    // 39. Continue Journey in the Forest -> Last Chance to Enter Cave Decision
    new Page([
        "You decide to stay in the forest and continue your journey. The sailor watches you walk away, shaking his head in quiet disbelief.",
        "As you walk deeper into the forest, you end up once again at the riverbank. The ghostly figures are nowhere to be seen, but the cave entrance beckons."
    ]),

    // 40. Last Chance to Enter Cave Decision -> 2 choices
    new DecisionPage([
        "Enter the dark cave.", // 42. Enter the Dwaren City
        "Head back into the forest." // 41. Lost in Forest
    ]),

    // 41. Lost in Forest -> GAME OVER
    new Page([
        "You venture into the forest one last time, where the trees whisper and the air shimmers with magic.",
        "Strange, twisting paths lie ahead, and without guidance, you could become hopelessly lost. Your journey ends here."
    ]),

    // 42. Enter the Dwaren City -> Meeting Dwarf
    new Page([
        "You step into the cave, and to your surprise, the darkness gives way to the flickering light of torches.",
        "The deeper you go, the more you realize this is no ordinary cave. You stumble into an underground city, bustling with gnomes and dwarves.",
    ]),

    // 43. Meeting Dwarf -> Introduce to Dwarf Decision
    new Page([
        "A dwarf busy staring into a map bumps into you, nearly knocking you over. \"Dear Moradin! Watch where you're going!\" he grumbles.",
        "He pauses for a moment. \"You're not from around here, are you?\" he asks, his eyes narrowing. \"What brings you to the Dwarven City?\""
    ]),

    // 44. Introduce to Dwarf Decision -> 3 choices
    new DecisionPage([
        "Introduce yourself as Nazareth, heir of the Josefis throne.", // 45. Introduce as Heir
        "Introduce yourself as Nazareth, fire adept.", // 46. Introduce as Fire Adept
        "Introduce yourself as Jane Smith, a wandering traveler." // 47. Keep Identity a Secret
    ]),

    // 45. Introduce as Heir -> Dwarves' Guild Decision
    new Page([
        "\"Ha! An heir? If ya say so,\" the dwarf says, his eyes twinkling with amusement.",
        "\"Name's Johnathan. We could use someone of your... talents. The Iron Shield Guild could use a hand. What do ya say?\""
    ]),

    // 46. Introduce as Fire Adept -> Dwarves' Guild Decision
    new Page([
        "\"A fire adept, eh? We don't see many of your kind around here,\" the dwarf says, eyeing you with interest.",
        "\"Name's Johnathan. We could use someone of your... talents. The Iron Shield Guild could use a hand. What do ya say?\""
    ]),

    // 47. Keep Identity a Secret -> Dwarves' Guild Decision
    new Page([
        "The leader of the Iron Shield Guild greets you warmly. \"A traveler, eh? You've arrived at an opportune time.\"",
        "\"Name's Johnathan. We have a job for someone of your skills. A rival faction, the Dwarven Mercenaries, are planning an attack. Will you help us disrupt them?\""
    ]),

    // 48. Dwarves' Guild Decision -> 2 choices
    new DecisionPage([
        "Agree to help the Iron Shield Guild.", // 49. Join the Iron Shield
        "Decline the offer and explore the city." // 50. Don't Join the Iron Shield
    ]),

    // 49. Join the Iron Shield -> City Loop
    new Page([
        "You agree to help the Iron Shield Guild. \"We're expecting an attack tomorrow night,\" the leader says. \"Be ready.\"",
        "He offers you a place to stay and a chance to prove yourself in the coming battle. In the meantime, you can explore the city and prepare for the fight.",
    ]),
    // EVENT: Joined Iron Shield Guild

    // 50. Don't Join the Iron Shield -> City Loop
    new Page([
        "You decline the offer, and the guild leader nods. \"Your choice,\" he says. \"But be warned — the Dwarven Mercenaries are not to be trifled with.\"",
        "He continues on his path towards the cave entrance. You decide to explore the city and see what else it has to offer."
    ]),

    // 51. City Loop -> 4 choices
    new DecisionPage([
        "Explore the Town Square.", // 52. Town Square
        "Visit the Market District.", // 58. Market District Nighttime
        "Head to the Industrial Quarter.", // 83. Industrial Quarter
        "Return to the Guild Hall." // 54. Guild Hall
    ]),

    // 52. Town Square -> Leaving Town Square
    new Page([
        "You explore the Town Square, where musicians play lively tunes on their lutes and children play in the streets.",
        "Lanterns hang from the buildings, casting a warm glow over the cobblestone streets."
    ]),
    // 53. Leaving Town Square -> City Loop
    new Page([
        "After taking some time to enjoy the sights and sounds of the Town Square, you decide to explore more of the city.", ""
    ]),

    // 54. Guild Hall -> Join Guild Decision
    new Page([
        "You return to the Guild Hall, where the Iron Shield Guild leader is waiting for you.",
        "\"Changed 'yer mind, have ya? Well, we could use someone with your skills. What do ya say?\""
    ]),

    // 55. Join Guild Decision -> 2 choices
    new DecisionPage([
        "Join the Iron Shield Guild.", // 56. Join Guild
        "Decline the offer and explore the city." // 57. Refuse Guild Again
    ]),

    // 56. Join Guild -> City Loop
    new Page([
        "You agree to join the Iron Shield Guild. The leader claps you on the back. \"Welcome to the team,\" he says. \"We'll need all the help we can get.\"",
        "\"We'll go over details in the morrow. For now, enjoy the city and get some rest.\""
    ]),
    // EVENT: Joined Iron Shield Guild

    // 57. Refuse Guild Again -> City Loop
    new Page([
        "You decline the offer once more, and the guild leader shrugs. \"Suit yerself,\" he says. \"But remember, we could use someone like you.\"",
        "You decide to explore the city and see what else it has to offer."
    ]),

    // 58. Market District Nighttime -> Market District Decision
    new Page([
        "You wander through the Market District and spot four stores in front of you:",
        "A weaponsmith's shop, a potion vendor, the Comeon Inn, and a mysterious hooded figure selling rare artifacts."
    ]),

    // 59. Market District Decision -> 4 choices
    new DecisionPage([
        "Visit the weaponsmith's shop.", // 60. Closed Weaponsmith Shop
        "Visit the potion vendor.", // 61. Closed Potion Vendor
        // SHOULD BE: 62. Comeon Inn Guild Joined / Comeon Inn Guild Not Joined
        "Visit the Comeon Inn.", // 64. Getting a room
        "Approach the hooded figure." // 69. Approach the Hooded Figure
    ]),

    // 60. Closed Weaponsmith Shop -> Market District Nighttime
    new Page([
        "The weaponsmith's shop is closed for the night. You'll have to come back tomorrow.",
        "You decide to explore the other stores in the Market District."
    ]),

    // 61. Closed Potion Vendor -> Market District Nighttime
    new Page([
        "The potion vendor has closed up for the night. You'll have to come back tomorrow.",
        "You decide to explore the other stores in the Market District."
    ]),

    // 62. Comeon Inn Guild Joined -> Getting a Room (Guild joined)
    new Page([
        "You enter the Comeon Inn, a lively tavern filled with laughter and music. You spot the bartender chatting with the guild leader.",
        "The guild leader waves you over. \"Harthor, this is Nazareth. They've agreed to help us against the Dwarven Mercenaries.\"",
    ]),

    // 63. Comeon Inn Guild Not Joined -> Getting a Room (Guild not joined)
    new Page([
        "You enter the Comeon Inn, a lively tavern filled with laughter and music. You spot the bartender chatting with the guild leader.",
        "The guild leader eyes you warily. \"You're not one of us, are you?\" he says. \"Leave us.\""
    ]),

    // 64. Getting a Room (Guild joined) -> Ending the Day
    new Page([
        "The bartender gives you a nod and hands you a key to your room. \"Get some rest,\" says Harthor. \"You'll need it for tomorrow's battle.\"",
        "You head upstairs to your room and settle in for the night. You start feeling tired from your long adventure.",
    ]),

    // 65. Ending the Day -> Ending the Day Decision
    new Page([
        "You can end your adventure here, or you can explore the city a little more.", ""
    ]),

    // 66. Ending the Day Decision -> 2 choices
    new DecisionPage([
        "Sleep and prepare for the battle.", // 67. Get some Sleep
        "Explore the city a little more." // 68. Get up from bed
    ]),

    // 67. Get some Sleep -> JOURNEY STARTS
    new Page([
        "You decide to get some rest and prepare for the battle ahead.",
        "As you close your eyes, you can't help but wonder what the next day will bring."
    ]),

    // 68. Get up from bed -> Market District Nighttime
    new Page([
        "You decide to explore the city a little more.",
        "You head back downstairs to the bar, and exit towards the Market District.",
    ]),

    // 69. Approach the Hooded Figure -> Heir of Josefis
    new Page([
        "You approach the hooded figure, who reveals a collection of rare artifacts.",
        "One item catches your eye — a dagger with a familiar engraving. It belonged to your brother, Sam.",
    ]),

    // 70. Heir of Josefis -> Buying Dagger Decision
    new Page([
        "\"Ah! You're the heir of Josefis, aren't you?\" the hooded figure says, his voice low and mysterious.",
        "\"Your brother's dagger is a clue. Follow it, and you may find what you seek. But I'll need something in exchange.\"",
    ]),

    // 71. Buying Dagger Decision -> 2 choices
    new DecisionPage([
        "Buy the dagger. (30 gold)", // 73. Buy the Dagger
        "Refuse the offer." // 72. Refuse the Offer
    ]),

    // 72. Refuse the Offer -> Market District Nighttime
    new Page([
        "You refuse the hooded figure's offer. The dagger fades back into the hooded figure's cloak.",
        "You decide to explore the city a little more."
    ]),

    // 73. Buy the Dagger -> Follow Dagger Decision
    new Page([
        "You decide to buy the dagger, handing over the gold coins to the hooded figure.",
        "As you take the dagger, it starts to shimmer and glow - beckoning you to follow its light."
    ]),

    // 74. Follow Dagger Decision -> 2 choices
    new DecisionPage([
        "Follow the dagger's light.", // 75. Follow the Dagger
        "Put it away and continue exploring." // 58. Market District Nighttime
    ]),

    // 75. Follow the Dagger -> Mercenary Camp
    new Page([
        "The dagger leads you out of the city and into the forest. You follow its light, which grows brighter with each step.",
        "Soon, you arrive at a clearing where a group of mercenaries have set up camp. Among them, you spot your brother, Sam."
    ]),

    // 76. Mercenary Camp -> Mercenary Camp Decision
    new Page([
        "\"Nazareth?\" he says, his eyes widening in surprise. \"What are you doing here?\"",
        "\"Doesn't matter. You're here now. We need someone with your skills to defeat the Iron Shield Guild tomorrow.\"",
    ]),

    // 77. Mercenary Camp Decision -> 2 choices
    new DecisionPage([
        "Convince your brother to return home with you.", // 78. Go Back Home
        "Join him and become a mercenary yourself." // 79. Become a Mercenary
    ]),

    // 78. Go Back Home -> JOURNEY STARTS
    new Page([
        "After a long and perilous journey, you and your brother make it back home, your bond stronger than ever.",
        "You've both learned much on this adventure, but the world is vast, and your journeys are far from over."
    ]),

    // 79. Become a Mercenary -> JOURNEY STARTS
    new Page([
        "You decide to stay with your brother in the mercenary camp. Together, you rise to prominence as a powerful force, leaving your past life behind.",
        "But at what cost? Your journey has taken you far from home, and the road ahead is fraught with danger and uncertainty."
    ]),

    // 80. JOURNEY STARTS -> GAME OVER
    new Page([
        "Your journey starts here.",
        ""
    ]),

    // 81. GAME OVER -> GAME OVER DECISION
    new Page([
        "You think about your choices and the path you've taken. You sense that you could have done things differently.",
        "You close your eyes, and bring yourself back to the beach, where you first woke up."
    ]),

    // 82. GAME OVER DECISION -> 2 choices
    new DecisionPage([
        "Start again from the beginning.", // 0. Introduction
        "Credits" // 87. Credits
    ]),

    // 83. Industrial Quarter -> Leaving the Industrial Quarter
    new Page([
        "You head to the Industrial Quarter, where the clang of hammers and the roar of furnaces fill the air.",
        "The dwarves here are hard at work, crafting weapons and armor for the coming battle."
    ]),
    // 84. Leaving the Industrial Quarter -> City Loop
    new Page([
        "As you try entering the Industrial Quarter, you're stopped by a guard. \"No outsiders allowed,\" he says gruffly.",
        "You decide to explore other parts of the city instead."
    ]),

    // 85. Fight Bear at Edge -> Walk Down cliff
    new Page([
        "You face the bear at the edge of the cliff, ready to fight for your life.",
        "It charges towards you, and in one swift motion, you dodge its charging attack and push it off the cliff."
    ]),
    // 86. Walk Down cliff -> Cave Exploration Decision
    new Page([
        "With the fluffy threat out of the way, you walk down the cliff, the path leading you deeper into the forest.",
        "Below you, the entrance to a dark cave beckons. Will you explore it?"
    ]),

    // 87. Credits -> GAME OVER
    new Page([
        "The story was written by Alan Alcocer-Iturriza with the help of Amandeep Kaur, based on an hour-long conversation about how to play D&D.",
        "The code was written by Alan Alcocer-Iturriza, Amandeep Kaur, and Shabnam Kaur. Thanks for playing!",
    ])
];

// Set up the linked list with choices
pages[0].nextPage = pages[1];
pages[1].nextPage = pages[2];
pages[2].nextPages = [pages[3], pages[4], pages[6]];
pages[3].nextPage = pages[2];
pages[4].nextPage = pages[5];
pages[5].nextPage = pages[7];
pages[6].nextPage = pages[2];
pages[7].nextPages = [pages[8], pages[10], pages[11]];
pages[8].nextPage = pages[9];
pages[9].nextPages = [pages[12], pages[10], pages[15]];
pages[10].nextPage = pages[12];
pages[11].nextPage = pages[12];
pages[12].nextPage = pages[13];
pages[13].nextPages = [pages[14], pages[15]];
pages[14].nextPage = pages[81];
pages[15].nextPage = pages[16];
pages[16].nextPages = [pages[17], pages[85]];
pages[17].nextPage = pages[20];
// pages[18].nextPage = pages[19];
// pages[19].nextPage = pages[81];
pages[20].nextPages = [pages[29], pages[21]];
pages[21].nextPage = pages[22];
pages[22].nextPage = pages[23];
pages[23].nextPages = [pages[24], pages[31]];
pages[24].nextPage = pages[25];
pages[25].nextPage = pages[26];
pages[26].nextPages = [pages[27], pages[31]];
pages[27].nextPage = pages[28];
pages[28].nextPages = [pages[29], pages[30]];
pages[29].nextPage = pages[42];
pages[30].nextPage = pages[32];
pages[31].nextPage = pages[32];
pages[32].nextPages = [pages[33], pages[39]];
pages[33].nextPage = pages[34];
pages[34].nextPage = pages[35];
pages[35].nextPages = [pages[36], pages[39]];
pages[36].nextPage = pages[37];
pages[37].nextPages = [pages[38], pages[39]];
pages[38].nextPage = pages[80];
pages[39].nextPage = pages[40];
pages[40].nextPages = [pages[42], pages[41]];
pages[41].nextPage = pages[81];
pages[42].nextPage = pages[43];
pages[43].nextPage = pages[44];
pages[44].nextPages = [pages[45], pages[46], pages[47]];
pages[45].nextPage = pages[48];
pages[46].nextPage = pages[48];
pages[47].nextPage = pages[48];
pages[48].nextPages = [pages[49], pages[50]];
pages[49].nextPage = pages[51];
pages[50].nextPage = pages[51];
pages[51].nextPages = [pages[52], pages[58], pages[83], pages[54]];
pages[52].nextPage = pages[53];
pages[53].nextPage = pages[51];
pages[54].nextPage = pages[55];
pages[55].nextPages = [pages[56], pages[57]];
pages[56].nextPage = pages[51];
pages[57].nextPage = pages[51];
pages[58].nextPage = pages[59];
pages[59].nextPages = [pages[60], pages[61], pages[64], pages[69]];
pages[60].nextPage = pages[58];
pages[61].nextPage = pages[58];
// pages[62].nextPage = pages[64];
// pages[63].nextPage = pages[64];
pages[64].nextPage = pages[65];
pages[65].nextPage = pages[66];
pages[66].nextPages = [pages[67], pages[68]];
pages[67].nextPage = pages[80];
pages[68].nextPage = pages[58];
pages[69].nextPage = pages[70];
pages[70].nextPage = pages[71];
pages[71].nextPages = [pages[73], pages[72]];
pages[72].nextPage = pages[58];
pages[73].nextPage = pages[74];
pages[74].nextPages = [pages[75], pages[58]];
pages[75].nextPage = pages[76];
pages[76].nextPage = pages[77];
pages[77].nextPages = [pages[78], pages[79]];
pages[78].nextPage = pages[80];
pages[79].nextPage = pages[80];
pages[80].nextPage = pages[81];
pages[81].nextPage = pages[82];
pages[82].nextPages = [pages[0], pages[87]];
pages[83].nextPage = pages[84];
pages[84].nextPage = pages[51];
pages[85].nextPage = pages[86];
pages[86].nextPage = pages[20];
pages[87].nextPage = pages[81];

// Location pages
const beachPages = [pages[0], pages[1], pages[2], pages[3], pages[6]];
const forestPages = [pages[4], pages[5], pages[7], pages[11], pages[15], pages[16], pages[18], pages[19], pages[21], pages[22], pages[23], pages[24], pages[25], pages[26], pages[27], pages[28], pages[30], pages[31], pages[39], pages[41], pages[86]];
const bearPages = [pages[8], pages[9], pages[10], pages[12], pages[13], pages[14], pages[82], pages[85]];
const riverPages = [pages[32], pages[33]];
const harborPages = [pages[34], pages[35], pages[36], pages[37], pages[38]];
const cavePages = [pages[17], pages[20], pages[29], pages[40], pages[83]];
const townPages = [pages[42], pages[43], pages[44], pages[45], pages[46], pages[47], pages[48], pages[49], pages[50], pages[51], pages[52], pages[53], pages[54], pages[55], pages[56], pages[57], pages[58], pages[59], pages[60], pages[61], pages[62], pages[63], pages[64], pages[65], pages[66], pages[67], pages[68], pages[69], pages[70], pages[71], pages[72], pages[73], pages[74], pages[75], pages[84]];
const mercenaryPages = [pages[76], pages[77], pages[78], pages[79]];
const gameOverPages = [pages[80], pages[81], pages[87]];

let currentPage = pages[0];
let currentBackgroundImg = '';
let selectedChoiceIndex = 0;  

const bookContainer = document.getElementById('book');
const nextPageBtn = document.getElementById('next-page-btn'); // "Next Page" button
const choiceBtn = document.getElementById('choice-btn'); // "Make Choice" button
const bookBackground = document.querySelector('.book-background'); // Background image

function generateChoiceBoxes(numChoices) {
    bookContainer.innerHTML = '';

    bookContainer.className = 'book';
    if (numChoices === 2) {
        bookContainer.classList.add('grid-2');
    } else if (numChoices === 3) {
        bookContainer.classList.add('grid-3');
    } else if (numChoices === 4) {
        bookContainer.classList.add('grid-4');
    }

    for (let i = 0; i < numChoices; i++) {
        const div = document.createElement('div');
        div.classList.add('choice-box');
        div.id = `choice-${i + 1}`;
        bookContainer.appendChild(div);
    }
}

function displayPage(page) {
    resetHighlights();

    if (page instanceof Page) {
        // Check if the page has less than or equal to 2 texts
        if (page.texts.length <= 2) {
            // Display content side by side
            bookContainer.innerHTML = '';
            const leftDiv = document.createElement('div');
            const rightDiv = document.createElement('div');
            leftDiv.className = 'content-left';
            rightDiv.className = 'content-right';
            leftDiv.innerText = page.texts[0];
            rightDiv.innerText = page.texts[1] || ''; // Fallback to empty string
            bookContainer.appendChild(leftDiv);
            bookContainer.appendChild(rightDiv);

            // Show "Next Page" button and disable "Make Choice" button
            nextPageBtn.style.display = 'block';
            choiceBtn.style.display = 'block';
            choiceBtn.disabled = true; // Disable the "Make Choice" button
        } else {
            // Generate choice boxes if the page has more than 2 texts
            generateChoiceBoxes(2);  
            document.getElementById('choice-1').innerText = page.texts[0];
            document.getElementById('choice-2').innerText = page.texts[1];

            // Show "Make Choice" button and hide "Next Page" button
            nextPageBtn.style.display = 'none';
            choiceBtn.style.display = 'block';
            choiceBtn.disabled = false; // Enable the "Make Choice" button
        }
    } else if (page instanceof DecisionPage) {
        const numChoices = page.pageTexts.length;
        generateChoiceBoxes(numChoices);  

        page.pageTexts.forEach((text, index) => {
            document.getElementById(`choice-${index + 1}`).innerText = text;
        });

        highlightDecisionState(numChoices);
    }
    // Change background if location changes
    changeBackground(page);
}

function changeBackground(page) {
    if (beachPages.includes(page)) {
        setBackground('images/bgBeach.jpg');
    } else if (forestPages.includes(page) || bearPages.includes(page)) {
        setBackground('images/bgForest.jpg');
    } else if (cavePages.includes(page)) {
        setBackground('images/bgCave.jpg');
    } else if (townPages.includes(page)) {
        // setBackground('images/bgTown.jpg');
        setBackground('images/bgCave.jpg');
    } else if (harborPages.includes(page)) {
        setBackground('images/bgDock.jpg');
    } else if (riverPages.includes(page) || mercenaryPages.includes(page)) {
        setBackground('images/bgRiver.jpg');
    } else if (gameOverPages.includes(page)) {
        setBackground('images/bgWood.jpg');
    }
}

function highlightDecisionState(numChoices) {
    choiceBtn.classList.add('highlight'); 
    highlightChoice(1); 
}

function resetHighlights() {
    choiceBtn.classList.remove('highlight');
    document.querySelectorAll('.choice-box').forEach(box => {
        box.classList.remove('highlight');
    });
    selectedChoiceIndex = 0;  
}

function highlightChoice(choiceIndex) {
    document.querySelectorAll('.choice-box').forEach(box => {
        box.classList.remove('highlight');
    });
    document.getElementById(`choice-${choiceIndex}`).classList.add('highlight');
    choiceBtn.disabled = false; // Enable "Make Choice" button after a selection
}

let clickTimeout = null;
const DOUBLE_CLICK_DELAY = 300; 

choiceBtn.addEventListener('click', () => {
    if (currentPage instanceof DecisionPage) {
        if (clickTimeout !== null) {
            clearTimeout(clickTimeout);
            clickTimeout = null;
            makeChoice(selectedChoiceIndex);  
        } else {
            clickTimeout = setTimeout(() => {
                clickTimeout = null;
                const numChoices = currentPage.pageTexts.length;
                selectedChoiceIndex = (selectedChoiceIndex + 1) % numChoices;  
                highlightChoice(selectedChoiceIndex + 1);  
            }, DOUBLE_CLICK_DELAY);
        }
    }
});

nextPageBtn.addEventListener('click', () => {
    // Navigate to the next page when "Next Page" is clicked
    if (currentPage.nextPage) {
        currentPage = currentPage.nextPage;
        displayPage(currentPage);
    }
});

function setBackground(imageUrl) {
    bookBackground.src = imageUrl;
    currentBackgroundImg = imageUrl;
}


// Make the choice and move to the next page
function makeChoice(choiceIndex) {
    currentPage = currentPage.nextPages[choiceIndex];  // Move to the selected page
    displayPage(currentPage);
    resetHighlights();
}

// Display the initial page
displayPage(currentPage);