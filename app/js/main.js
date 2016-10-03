var app = angular.module('app', ['ui.router'])

app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('home', {
				controller: 'myCtrl',
				url: '/home',
				templateUrl: 'views/home.html'
			})
			.state('search', {
				controller: 'myCtrl',
				url: '/search',
				templateUrl: 'views/search.html'
			})
			.state('characterImg', {
			  controller: 'myCtrl',
			  url: '/img',
			  templateUrl: 'views/characterImg.html'
			})
			$urlRouterProvider.otherwise('home');
	}
])


app.controller('myCtrl',['$scope', '$rootScope', '$http', '$q', '$timeout', '$state', function ($scope, $rootScope, $http, $q, $timeout, $state) {


 var defer = $q.defer();

	$(function() {
	var totalChar = [

	"3-D Man", "A-Bomb (HAS)", "A.I.M.", "Aaron Stack", "Abomination (Emil Blonsky)",  "Absorbing Man", "Abyss", "Abyss (Age of Apocalypse)", "Adam Destine", "Adam Warlock", "Aegis (Trey Rollins)", "Agent Brand", "Agent X (Nijo)", "Agent Zero", "Agents of Atlas", "Aginar", "Air-Walker (Gabriel Lan)", "Ajak", "Ajaxis", "Akemi", "Alain", "Albert Cleary", "Albion", "Alex Power", "Alex Wilder", "Alexa Mendez", "Alexander Pierce", "Alice", "Alicia Masters", "Alpha Flight", "Alvin Maker", "Amadeus Cho", "Amanda Sefton", "Amazoness", "American Eagle (Jason Strongbow)", "Amiko", "Amora", "Amphibian (Earth-712)", "Amun", "Ancient One", "Angel (Thomas Halloway)", "Angel (Warren Worthington III)", "Angela (Aldrif Odinsdottir)", "Anita Blake", "Anne Marie Hoag", "Annihilus", "Anole", "Ant-Man (Eric O'Grady)", "Ant-Man (Scott Lang)", "Anthem", "Apocalypse", "Aqueduct", "Arachne", "Araٌa", "Arcade", "Arcana", "Archangel", "Arclight", "Ares", "Argent", "Armadillo", "Armor (Hisako Ichiki)", "Armory", "Arnim Zola", "Arsenic", "Artiee", "Asgardian", "Askew-Tronics", "Asylum", "Atlas (Team)", "Aurora", "Avalanche", "Avengers",  "Azazel (Mutant)", "Banshee", "Banshee (Theresa Rourke)", "Baron Strucker", "Baron Zemo (Heinrich Zemo)", "Baroness S'Bak", "Barracuda", "Bart Rozum", "Bastion", "Batroc the Leaper", "Battering Ram", "Beak", "Beast",  "Becatron", "Bedlam", "Beef", "Beetle (Abner Jenkins)", "Ben Grimm",
	"Ben Parker", "Ben Reilly", "Ben Urich", "Bengal", "Beta-Ray Bill", "Betty Brant", "Betty Ross", "Beyonder", "Bi-Beast", "Big Bertha", "Big Wheel", "Bill Hollister", "Bishop",  "Black Bird", "Black Bolt", "Black Cat",  "Black Crow", "Black Knight (Sir Percy of Scandia)", "Black Panther",  "Black Queen", "Black Tarantula", "Black Tom", "Black Widow",   "Blackheart", "Blacklash", "Blackout", "Blade", "Blastaar", "Blazing Skull", "Blindfold", "Blink", "Blizzard", "Blob", "Blockbuster", "Blok", "Bloke", "Blonde Phantom", "Bloodaxe", "Bloodscream", "Bloodstorm", "Bloodstrike", "Blue Blade", "Blue Marvel", "Blue Shield", "Blur", "Bob, Agent of Hydra", "Boom Boom", "Boomer", "Boomerang", "Box", "Bride of Nine Spiders (Immortal Weapons)", "Bromley", "Brood", "Brother Voodoo", "Brotherhood of Evil Mutants",  "Bruce Banner", "Brute", "Bucky", "Bug", "Bulldozer", "Bullseye", "Bushwacker", "Butterfly", "Cable",   "Calamity", "Caliban", "Callisto", "Callisto (Age of Apocalypse)", "Calypso", "Cammi", "Cannonball", "Cap'n Oz", "Captain America",  "Captain Britain",  "Captain Cross", "Captain Flint", "Captain Marvel (Carol Danvers)", "Captain Marvel (Genis-Vell)", "Captain Marvel (Mar-Vell)", "Captain Marvel (Monica Rambeau)",
	"Captain Marvel (Phyla-Vell)", "Captain Midlands", "Captain Stacy", "Captain Universe", "Cardiac", "Caretaker", "Cargill", "Carlie Cooper", "Carmella Unuscione", "Carnage", "Carol Danvers", "Carol Hines", "Cassandra Nova", "Catseye", "Cecilia Reyes", "Celestials", "Centennial", "Centurions", "Cerebro", "Cerise", "Ch'od", "Chamber", "Chameleon", "Champions", "Changeling", "Charles Xavier", "Charlie Campion", "Chase Stein", "Chat", "Chimera", "Chores MacGillicudy", "Christian Walker", "Chronomancer", "ClanDestine", "Clea",  "Clint Barton", "Cloak", "Cloud 9", "Cobalt Man", "Colleen Wing", "Colonel America", "Colossus", "Confederates of the Curious", "Constrictor", "Contessa (Vera Vidal)", "Controller", "Cornelius", "Corsair", "Cosmo (dog)", "Cottonmouth", "Count Nefaria", "Countess", "Crimson Crusader", "Crimson Dynamo", "Crimson King", "Crossbones", "Crule", "Crusher Hogan","Crystal", "Cuckoo", "Curt Conners", "Cuthbert", "Cyber", "Cyclops",   "Cypher", "D'Ken Neramani", "Dagger", "Daily Bugle", "Daimon Hellstrom", "Daken", "Dakota North", "Damage Control", "Dani Moonstar", "Danny Rand", "Daredevil",  "Dargo Ktor", "Dark Avengers", "Dark Beast", "Dark Phoenix", "Dark X-Men", "Darkhawk", "Darkstar", "Darwin", "Dazzler", "Deacon Frost", "Dead Girl", "Deadpool",
	"Death", "Deathbird", "Deathcry", "Deathlok",  "Debra Whitman", "Debrii", "Deena Pilgrim", "Defenders", "Demogoblin", "Destiny", "Detective Soap", "Deviants", "Devil Dinosaur (Devil Dinosaur)", "Devil Dinosaur (HAS)", "Devos", "Dexter Bennett", "Diablo", "Diamondback (Rachel Leighton)", "Dinah Soar", "Dirk Anger", "Doc Samson", "Doctor Doom",  "Doctor Faustus", "Doctor Octopus",  "Doctor Spectrum", "Doctor Strange", "Dog Brother #1", "Domino", "Donald Blake", "Doomsday Man", "Doop", "Doorman", "Dorian Gray", "Dormammu",  "Dracula", "Dragon Lord", "Dragon Man", "Drax", "Dreadnoughts", "Dreaming Celestial", "Druig", "Dum Dum Dugan", "Dust", "Earthquake", "Echo", "Eddie Brock", "Eddie Lau", "Edward 'Ted' Forrester", "Edwin Jarvis", "Ego", "Electro",  "Elektra", "Elements of Doom", "Elite", "Elixir", "Elloe Kaifi", "Elsa Bloodstone", "Emma Frost", "Empath", "Emplate", "Enchantress (Amora)", "Enchantress (Sylvie Lushton)", "Ender Wiggin", "Energizer", "Epoch", "Erik the Red", "Eternals", "Eternity", "Excalibur", "Exiles", "Exodus", "Expediter", "Ezekiel", "Ezekiel Stane", "Fabian Cortez", "Falcon", "Fallen One", "Famine", "Fantastic Four", "Fantastick Four", "Fantomex", "Fat Cobra", "Felicia Hardy", "Fenris", "Feral", "Fin Fang Foom", "Firebird", "Firebrand", "Firedrake",
	"Firelord", "Firestar", "Fixer (Paul Norbert Ebersol)", "Flatman", "Flying Dutchman", "Foggy Nelson", "Force Works", "Forearm", "Forge", "Forgotten One", "Frank Castle", "Frankenstein's Monster", "Franklin Richards", "Franklin Storm", "Freak", "Frightful Four", "Frog Thor", "Frog-Man", "Gabe Jones", "Galactus", "Galia", "Gambit", "Gamma Corps", "Gamora",  "Gargoyle", "Gargoyle (Yuri Topolov)", "Garia", "Garrison Kane", "Gateway", "Gauntlet (Joseph Green)", "Geiger", "Gene Sailors", "Generation X", "Genesis", "Genis-Vell", "Gertrude Yorkes", "Ghost Rider (Daniel Ketch)", "Ghost Rider (Johnny Blaze)",  "Giant Girl", "Giant Man", "Giant-dok",  "Gideon", "Git Hoskins", "Gladiator (Kallark)", "Gladiator (Melvin Potter)", "Glenn Talbot", "Glorian", "Goblin Queen", "Golden Guardian", "Goliath (Bill Foster)", "Gorgon", "Gorilla Man", "Grandmaster", "Gravity", "Great Lakes Avengers", "Green Goblin (Barry Norman Osborn)", "Green Goblin (Harry Osborn)",  "Gressill", "Grey Gargoyle", "Greymalkin", "Grim Reaper", "Groot", "Guardian", "Guardians of the Galaxy", "Guardsmen", "Gunslinger", "GW Bridge", "Gwen Stacy",  "H.A.M.M.E.R.", "H.E.R.B.I.E.", "Hairball", "Half-Life (Tony Masterson)", "Hammerhead",  "Hank Pym", "Hannibal King", "Happy Hogan", "Hardball", "Harley Davidson Cooper", "Harpoon", "Harrier", "Harry Heck", "Harry Osborn", "Hate-Monger (Adolf Hitler)", "Havok", "Hawkeye", "Hawkeye (Kate Bishop)", "Hedge Knight",
	"Hellcat (Patsy Walker)", "Hellfire Club",  "Hellion", "Hellions (Squad)", "Hemingway", "Henry Peter Gyrich", "Hepzibah", "Hercules", "Heroes For Hire", "Hex", "High Evolutionary", "Hindsight Lad", "Hiroim", "Hitman", "Hitomi Sakuma", "Hobgoblin (Jason Macendale)", "Hobgoblin (Robin Borne)", "Hobgoblin (Roderick Kingsley)", "Holocaust (Age of Apocalypse)", "Holy", "Hope Summers", "Howard Saint", "Howard The Duck", "Hulk",  "Hulk-dok",  "Hulkling", "Human Cannonball", "Human Fly (Richard Deacon)", "Human Robot", "Human Torch", "Human Torch (Jim Hammond)",  "Humbug", "Husk", "Hussar", "Hydra", "Hydro-Man", "Hyperion (Earth-712)", "Hypno-Hustler", "Iceman", "Ikaris", "Illuminati", "Ilyana Rasputin", "Imp", "Imperfects", "Imperial Guard", "Impossible Man", "In-Betweener", "Inertia", "Infant Terrible", "Inhumans", "Ink", "Invaders", "Invisible Woman",  "Iron Cross Army", "Iron Fist (Danny Rand)", "Iron Lad", "Iron Man", "Iron Monger", "Iron Patriot", "Ironclad", "J. Jonah Jameson", "Jack Flag", "Jack Murdock", "Jack O' Lantern", "Jack Power", "Jackal", "Jackpot", "James Buchanan Barnes", "James Howlett", "Jamie Braddock", "Jane Foster", "Janus, the Nega-Man", "Jasper Sitwell", "Jazinda", "Jean Grey",
	 "Jennifer Smith", "Jeryn Hogarth", "Jessica Drew", "Jessica Jones", "Jetstream", "Jigsaw", "Jimmy Woo", "Joan the Mouse", "Jocasta", "John Farson", "John Jameson", "John Porter", "John Wraith", "Johnny Blaze", "Johnny Storm", "Joseph", "Joshua Kane", "Josiah X", "Joystick", "Jubilee", "Jubilee (Age of Apocalypse)", "Juggernaut", "Jule Carpenter", "Julian Keller", "Junta", "Justice", "Justin Hammer", "Ka-Zar", "Kabuki", "Kang", "Karen O'Malley", "Karen Page", "Karma", "Karnak", "Karolina Dean ", "Kat Farrell", "Kate Bishop", "Katie Power", "Ken Ellis", "Khan", "Kid Colt", "Killer Shrike", "Killmonger", "Killraven", "King Bedlam", "King Cobra", "Kingpin", "Kinsey Walden", "Kitty Pryde", "Kitty Pryde (X-Men: Battle of the Atom)", "Klaw", "Komodo (Melati Kusuma)", "Korath", "Korg", "Korvac", "Kraven the Hunter", "Kree", "Krista Starr", "Kronos", "Kulan Gath", "Kylun", "La Nuit", "Lady Bullseye", "Lady Deathstrike", "Lady Mastermind", "Lady Ursula", "Lady Vermin", "Lake", "Landau", "Lava-Man", "Layla Miller", "Leader", "Leech", "Legion", "Lei Kung, The Thunderer", "Lenny Balinger", "Leo (Zodiac)", "Leopardon", "Leper Queen", "Lester", "Lethal Legion", "Lieutenant Marcus Stone", "Lifeguard", "Lightning Lords of Nepal", "Lightspeed", "Lila Cheney", "Lilandra", "Lilith", "Lily Hollister", "Lionheart", "Living Lightning", "Living Mummy", "Living Tribunal", "Liz Osborn", "Lizard",  "Loa", "Lockheed", "Lockjaw",
	 "Logan", "Loki","Loners", "Longshot", "Lord Hawal", "Lord Tyger", "Lords of Avalon", "Lorna Dane", "Luckman", "Lucky Pierre", "Lucy in the Sky", "Luke Cage", "Luminals", "Lyja", "M (Monet St. Croix)", "M.O.D.A.M.", "M.O.D.O.G.", "M.O.D.O.K.", "Ma Gnuci", "Mac Gargan", "Mach IV", "Machine Man", "Mad Thinker", "Madame Hydra", "Madame Masque", "Madame Web (Julia Carpenter)", "Maddog", "Madelyne Pryor", "Madripoor", "Madrox", "Maelstrom", "Maestro", "Magdalene", "Maggott", "Magik (Amanda Sefton)", "Magik (Illyana Rasputin)", "Maginty", "Magma (Amara Aquilla)", "Magneto",  "Magus (Adam Warlock)", "Magus (Technarch)", "Major Mapleleaf", "Makkari", "Malcolm Colcord", "Malice (Earth-161)", "Man-Thing", "Man-Wolf", "Mandarin", "Mandrill", "Mandroid", "Manta", "Mantis", "Marauders", "Marcus Van Sciver", "Maria Hill", "Mariko Yashida", "Marrow", "Marten Broadcloak", "Martin Li", "Marvel Apes", "Marvel Boy", "Marvex", "Mary Jane Watson", "Mary Jane Watson (House of M)",  "Masked Marvel (Unrevealed)", "Masque", "Master Chief", "Master Mold", "Mastermind", "Masters of Evil", "Mathemanic", "Matsu'o Tsurayaba", "Matthew Murdock", "Mattie Franklin", "Mauler", "Maverick (Chris Bradley)", "Maverick (Christoph Nord)", "Maximus", "May Parker", "Medusa", "Meggan", "Meltdown", "Menace", "Mentallo", "Mentor", "Mephisto", "Mephistopheles", "Mercury", "Mesmero", "Metal Master", "Meteorite",
	 "MI: 13", "Micro/Macro", "Microbe", "Microchip", "Micromax", "Midnight (Earth-811)", "Miek", "Mikhail Rasputin", "Millenium Guard", "Millie the Model", "Mimic", "Mindworm", "Miracleman", "Miss America", "Mister Fear", "Mister Sinister",  "Misty Knight", "Mockingbird", "Moira MacTaggert",  "Mojo", "Mole Man", "Molecule Man", "Molly Hayes", "Molly Von Richtofen", "Molten Man", "Mongoose", "Mongu (Unrevealed)", "Monster Badoon", "Moon Knight", "Moondragon", "Moonstone", "Morbius", "Mordo", "Morg", "Morgan Stark", "Morlocks", "Morlun", "Morph", "Mother Askani", "Mr. Bumpo", "Mr. Fantastic",  "Mr. Fish", "Mr. Fixit", "Mr. Hyde", "Mr. Immortal", "Mr. Meugniot", "Mr. Negative", "Mr. Payback", "Mr. X", "Ms. Marvel (Kamala Khan)", "MS2", "Mulholland Black", "Multiple Man", "MVP", "Mysterio", "Mysterio (Daniel Berkhart)", "Mysterio (Francis Klum)", "Mystique",  "Namor", "Namora", "Namorita", "Naoko", "Natasha Romanoff", "Nebula", "Nehzno", "Nekra", "Nemesis", "Network", "New Goblin", "New Mutants", "New Warriors", "New X-Men", "Newton Destine", "Next Avengers", "Nextwave", "Nick Fury",  "Nico Minoru", "Nicolaos", "Night Nurse (Earth-9997)", "Night Thrasher", "Nightcrawler",  "Nighthawk", "Nightmare", "Nightshade", "Nine-Fold Daughters of Xao", "Nitro", "Nocturne",
	 "Nomad", "Nomad (Rikki Barnes)", "Nomad (Steve Rogers)", "Norman Osborn", "Norrin Radd", "Northstar", "Nova", "Nuke", "Obadiah Stane", "Odin", "Ogun", "Old Lace", "Omega Flight", "Omega Red", "Omega Sentinel", "Omega the Unknown", "Onslaught", "Oracle", "Ord", "Orphan", "Orphan-Maker", "Otto Octavius", "Outlaw Kid", "Overlord", "Owl", "Ozymandias", "Paibok", "Paladin", "Pandemic", "Paper Doll", "Patch", "Patriot", "Payback", "Penance (Robert Baldwin)", "Pepper Potts", "Pestilence", "Pet Avengers", "Pete Wisdom", "Peter Parker", "Peter Quill", "Phalanx", "Phantom Reporter", "Phil Sheldon", "Photon", "Phyla-Vell", "Piledriver", "Pip", "Pixie", "Plazm", "Polaris", "Post", "Power Man (USM)", "Power Pack", "Praxagora", "Preak", "Pretty Boy", "Pride", "Prima", "Prince of Orphans", "Princess Powerful", "Prism", "Prodigy", "Proemial Gods", "Professor Monster", "Professor X", "Proteus", "Proudstar", "Prowler", "Prowler (Rick Lawson)", "Psycho-Man", "Psylocke", "PsyNapse", "Puck", "Puck (Zuzha Yu)", "Puff Adder", "pug", "Puma", "Punisher", "Puppet Master", "Purifiers", "Purple Man", "Pyro", "Quasar (Phyla-Vell)", "Quasar (Wendell Vaughn)", "Quasimodo", "Queen Noir", "Quentin Quire", "Quicksilver", "Rachel Grey",
	 "Radioactive Man", "Rafael Vega", "Rage", "Raider", "Randall", "Randall Flagg", "Random", "Rattler", "Ravenous", "Rawhide Kid", "Raza", "Reaper", "Reavers",  "Red 9", "Red Ghost", "Red Hulk",  "Red She-Hulk", "Red Shift", "Red Skull", "Red Skull (Albert Malik)", "Red Wolf", "Redwing", "Reptil", "Retro Girl", "Revanche", "Rhino", "Rhodey", "Richard Fisk", "Rick Jones",  "Ricochet", "Rictor", "Riptide", "Risque", "Robbie Robertson", "Robert Baldwin ", "Robin Chapel", "Rocket Raccoon",  "Rocket Racer", "Rockslide", "Rogue", "Roland Deschain", "Romulus", "Ronan", "Roughhouse", "Roulette", "Roxanne Simpson", "Rumiko Fujikawa", "Runaways", "Russian", "S.H.I.E.L.D.", "Sabra", "Sabretooth",  "Sage",  "Sally Floyd", "Salo", "Sandman", "Santa Claus", "Saracen (Muzzafar Lambert)", "Sasquatch (Walter Langkowski)", "Satana", "Sauron", "Scalphunter", "Scarecrow (Ebenezer Laughton)", "Scarlet Spider (Ben Reilly)", "Scarlet Spider (Kaine)", "Scarlet Witch", "Scorpion (Carmilla Black)",  "Scourge", "Scrambler", "Scream (Donna Diego)", "Screwball", "Sebastian Shaw", "Secret Warriors", "Selene", "Senator Kelly", "Sentinel", "Sentinels", "Sentry (Robert Reynolds)", "Ser Duncan", "Serpent Society", "Sersi", "Shadow King",
	 "Shadowcat", "Shadu the Shady", "Shalla-bal", "Shaman", "Shane Yamada-Jones", "Shang-Chi", "Shanna the She-Devil", "Shape", "Shard", "Sharon Carter", "Sharon Ventura", "Shatterstar",  "She-Hulk (Jennifer Walters)", "She-Hulk (Lyra)",  "Shen", "Sheva Callister", "Shi'Ar", "Shinko Yamashiro", "Shinobi Shaw", "Shiva", "Shiver Man", "Shocker (Herman Schultz)", "Shockwave", "Shooting Star", "Shotgun", "Shriek", "Sif", "Silhouette", "Silk Fever", "Silver Centurion", "Silver Fox", "Silver Sable", "Silver Samurai", "Silver Surfer", "Silverclaw", "Silvermane", "Sin", "Sinister Six", "Sir Ram", "Sister Grimm", "Skaar", "Skin", "Skreet", "Skrulls", "Skullbuster (Cylla Markham)", "Slapstick", "Slayback", "Sleeper", "Sleepwalker", "Slipstream", "Slyde", "Smasher (Vril Rokk)", "Smiling Tiger", "Snowbird", "Solo (James Bourne)", "Songbird", "Sons of the Tiger", "Spacker Dave", "Spectrum", "Speed", "Speed Demon", "Speedball (Robert Baldwin)", "Spencer Smythe", "Sphinx (Anath-Na Mut)", "Spider-dok", "Spider-Girl (Anya Corazon)", "Spider-Girl (May Parker)", "Spider-Man", "Spider-Man (Miles Morales)",  "Spider-Man (Takuya Yamashiro)", "Spider-Woman (Charlotte Witter)", "Spider-Woman (Jessica Drew)", "Spider-Woman (Mattie Franklin)", "Spiral (Rita Wayword)", "Spirit", "Spitfire", "Spot", "Sprite", "Spyke",
	 "Squadron Sinister", "Squadron Supreme (Earth-712)", "Squirrel Girl", "Stacy X", "Star Brand", "Star-Lord (Peter Quill)", "Starbolt", "Stardust", "Starfox", "Starhawk (Stakar Ogord)", "Starjammers", "Stark Industries", "Stature", "Steel Serpent (Davos)", "Stellaris", "Stepford Cuckoos", "Stephanie de la Spiroza", "Stephen Strange", "Steve Rogers", "Stick", "Stilt-Man (Wibur Day)", "Stingray (Walter Newell)", "Stone Men", "Storm", "Stranger", "Strong Guy", "Stryfe", "Sub-Mariner", "Sue Storm", "Sugar Man", "Sumo", "Sunfire", "Sunset Bain", "Sunspot", "Super Hero Squad", "Super-Adaptoid", "Super-Skrull", "Supernaut", "Supreme Intelligence", "Surge", "Susan Delgado", "Swarm", "Sway", "Switch", "Swordsman", "Swordsman (Jaques Duquesne)", "Sym", "Synch", "T'Challa", "Tag", "Talisman (Elizabeth Twoyoungmen)", "Talkback (Chase Stein)", "Talon (Fraternity of Raptors)", "Talos", "Tana Nile", "Tarantula (Luis Alvarez)", "Tarot", "Taskmaster", "Tattoo", "Ted Forrester", "Tempest", "Tenebrous", "Terrax", "Terror", "Texas Twister", "Thaddeus Ross", "Thanos", "The 198", "The Anarchist", "The Call", "The Captain", "The Enforcers", "The Executioner", "The Fallen", "The Fury", "The Hand", "The Hood", "The Howling Commandos", "The Hunter", "The Initiative", "The Leader (HAS)", "The Liberteens", "The Liberty Legion", "The Order", "The Phantom", "The Professor", "The Renegades", "The Santerians", "The Shiver Man", "The Spike", "The Stranger", "The Twelve", "The Watchers",
	 "Thena", "Thing", "Thor", "Thor (Goddess of Thunder)", "Thor Girl", "Thunderball", "Thunderbird (John Proudstar)", "Thunderbird (Neal Shaara)", "Thunderbolt (Bill Carver)", "Thunderbolt Ross", "Thunderbolts", "Thundra", "Tiger Shark", "Tiger's Beautiful Daughter", "Tigra (Greer Nelson)", "Timeslip", "Tinkerer", "Titania", "Titanium Man (Topolov)", "Toad", "Toad Men", "Tomas", "Tombstone", "Tomorrow Man", "Tony Stark", "Toro (Thomas Raymond)", "Toxin", "Toxin (Eddie Brock)", "Trauma", "Triathlon", "Trish Tilby", "Triton", "True Believers", "Turbo", "Tusk", "Two-Gun Kid", "Tyger Tiger", "Typhoid Mary", "Tyrannus", "U-Foes", "U-Go Girl", "U.S. Agent", "Uatu The Watcher", "Ulik", "Ultimatum", "Ultimo", "Ultra-Adaptoid", "Ultragirl (Earth-93060)", "Ultron", "Umar", "Unicorn", "Union Jack (Brian Falsworth)", "Union Jack (Joseph Chapman)", "Union Jack (Montgomery Falsworth)", "Unus", "Valeria Richards", "Valkyrie (Samantha Parrington)", "Vampiro", "Vance Astro", "Vapor", "Vargas", "Vector", "Veda", "Vengeance (Michael Badilino)", "Venom (Flash Thompson)", "Venus Dee Milo", "Vermin (Edward Whelan)", "Vertigo (Savage Land Mutate)", "Victor Mancha", "Victor Von Doom", "Vin Gonzales", "Vindicator", "Violations", "Viper", "Virginia Dare", "Vision", "Vivisector", "Vulcan (Gabriel Summers)", "Vulture (Adrian Toomes)", "Vulture (Blackie Drago)", "Wallflower",
	 "Wallop", "Wallow", "War (Abraham Kieros)", "War Machine (Parnell Jacobs)", "Warbird", "Warbound", "Warhawk (Mitchell Tanner)", "Warlock (Janie Chin)", "Warpath", "Warren Worthington III", "Warstar", "Wasp", "Weapon Omega", "Weapon X", "Wendell Rand", "Wendell Vaughn", "Wendigo", "Werewolf By Night", "Whiplash (Mark Scarlotti)", "Whirlwind", "Whistler", "White Queen (Adrienne Frost)", "White Tiger (Angela Del Toro)", "Whizzer (Stanley Stewart)", "Wiccan", "Wild Child", "Wild Pack", "Wildside", "William Stryker", "Wilson Fisk", "Wind Dancer", "Winter Soldier", "Wither", "Wolf Cub", "Wolfpack", "Wolfsbane", "Wolver-dok", "Wolverine", "Wonder Man", "Wong", "Wraith", "Wrecker", "Wrecking Crew", "X-23", "X-51", "X-Babies", "X-Cutioner", "X-Factor", "X-Factor Investigations", "X-Force", "X-Man", "X-Men", "X-Ray (James Darnell)", "X-Statix", "X.S.E.", "Xavin", "Xorn (Kuan-Yin Xorn)", "Yellow Claw", "Yellowjacket (Rita DeMara)", "Young Avengers", "Young X-Men", "Zaladane", "Zaran", "Zarda", "Zarek", "Zeigeist", "Zemo", "Zodiak", "Zombie (Simon Garth)", "Zuras", "Zzzax"
	]
		$('#firstInput').autocomplete({
			source: totalChar,
			minLength: 4
		});

	});



	var newNumber;
	var heroOneComic;
	$scope.heroOneComics = window.heroOneComic;
  var heroOneEvent =[];
  var heroTwoEvent = [];
	var heroOneCharacters= [];
	$scope.endDate;
$('.containProgress').hide();

var firstImg = '';
	$scope.secondImages = window.uniqueNames;
	var heroOneReturn= '';
	$scope.heroTwoComic= [];
	$scope.heroOneReturn;
  var containEvents = [
    heroOneEvent, heroTwoEvent
  ]
	var comicOneDate = [];

	$scope.heroOne = window.heroOne;
	var heroStories= [];

$scope.clear = function(){
		$('.containApp').css('height', '100vh');
		$rootScope.packery = null;
	$scope.heroOne = '';
	$('#watcher').html('Watcher Watch');
	$('.btn').show();
$('.containProgress').hide();
$('.containSearch').show();
}
  var apiKey = '64f1f5a1ab896a13dd9c6b4009b0817e';

  	$scope.clickMe = function() {

            var heroOne = $('#firstInput').val()
						$http({
						    url: 'http://gateway.marvel.com:80/v1/public/characters?name=' + heroOne +'&limit=100&apikey='+apiKey,
						    method: "GET"
						}).then(function(response) {
							$scope.firstCall = response.data.data;
							window.heroOne = {
							id: $scope.firstCall.results[0].id,
							name: $scope.firstCall.results[0].name,
							img: $scope.firstCall.results[0].thumbnail.path + '/detail.jpg',
						description: $scope.firstCall.results[0].description,
					comics: $scope.firstCall.results[0].comics.available}

							  $.each($scope.firstCall.results[0].events.items, function(i, item){
								 heroOneEvent.push(item.name)
							 })
							 defer.resolve(response);
						}).then(function(response){
								$scope.heroOne = window.heroOne;
								$('#watcher').html($scope.heroOne.name);
											defer.resolve(response);
							})
						.then(function(response){
							$state.go('characterImg');
							defer.resolve(response);
							})
  }

$scope.secondClick = function(){


	$scope.heroOneReturn = window.heroOne;
	console.log($scope.heroOneReturn.comics)
	var endDate = $('#endDate').val();
	Date.prototype.yyyymmdd = function() {
		var mm = this.getMonth() + 1; // getMonth() is zero-based
		var dd = this.getDate();

		return [this.getFullYear(), !mm[1] && '0', mm, !dd[1] && '0', dd].join(''); // padding
	};

	var date = new Date();

		var startDate = $('#startDate').val();
		if (endDate<=startDate){
				alert('please enter a start date that is before the end date')
		}
		else if(endDate> 	date.yyyymmdd()){
			alert('The latest date that you can enter is today.')
		}


		else{
			$('.btn').hide();
			$('.containSearch').hide();
			$('.containProgress').show();
			$('#startDateProgress').append(startDate);
			$('#endDateProgress').append(endDate);
			alert(endDate)
			$http({
					url: 'http://gateway.marvel.com:80/v1/public/characters/'+$scope.heroOneReturn.id +'/comics?orderBy=onsaleDate&dateRange='+startDate+'%2C'+endDate+'&limit=35&apikey='+apiKey,
					method: "GET"
			}).then(function(response) {
				$scope.secondImages =[];
				$scope.imageTitles= [];
					$scope.firstComic = response.data.data;
					if($scope.firstComic.results[0].name != 'undefined' || $scope.firstComic.count ==0){
				    window.heroOneComics = {
				        name: $scope.firstComic.results[0].name,
				        img: $scope.firstComic.results[0].thumbnail.path + '/detail.jpg',
				        name: $scope.firstComic.results[0].name,
				        id:$scope.firstComic.results[0].id
				    }
						for (var j = 0; j<$scope.firstComic.count; j++){
							$scope.secondImages.push($scope.firstComic.results[j].thumbnail.path + '/detail.jpg')
						}
						var uniqueNames = [];
						$.each($scope.secondImages, function(i, el){
    			if($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
						});
							window.uniqueNames = uniqueNames;
					defer.resolve(response);
				}
				else{
					alert("sorry, we couldn't find this hero. Please click the home button or expand your date range and try again.")
					$('.btn').show();
				}
				}).then(function(response){
				$http({
					url: 'http://gateway.marvel.com:80/v1/public/characters/' + $scope.heroOneReturn.id +
						'/stories?apikey='+apiKey,
						method: "GET"
				}).then(function(response){
					$scope.OneCharacter = response.data.data;
						$.each($scope.OneCharacter.results[0].events.items, function(i, item){
		          heroOneCharacters.push(item.name)
		        })
						console.log('coulnd\'t that hero.')

					}).then(function(response){
				if($scope.heroOneReturn.id == null){
					console.log('yeah')
				}
				else{


					$('#panelThree').css('background-image', 'url("' + $scope.heroTwoComic.img + '")');
					if($scope.heroOneReturn.description.length< 1){
						$('#heroOneDescription').html('it doesn\'t look like that this character has a description in Marvel\'s API...')
					}
					else{

					}
					$('#heroOneName').html($scope.heroOneReturn.name);
					for(var j = 0; j<heroOneEvent.length; j ++){

					$('#eventList').append('<li id = "'+heroOneEvent[j]+'"> '+heroOneEvent[j]+'</li>');
					}
										$state.go('search');


											$('.containApp').css('height', '100%');
										if(window.heroOne.description == ''){
											window.heroOne.description = "There is no description on marvel's API for this character. "
										}


										$scope.heroOne = window.heroOne;
									defer.resolve(response);
				}
			}).then(function(response){

			$(function () {
 var width = $(window).width();
 var height = $(window).height();
 console.log(width);
 window.resizeBy(100, 100)
 console.log($(window).width());
console.log('this resize worked')
});


defer.resolve(response);
			})
			})

}
}


}]);

app.directive('dannyPackery', ['$rootScope', '$timeout', function($rootScope, $timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
					var testThis = $(".wrapper > div").length
            console.log('Running dannyPackery linking function!');
            if($rootScope.packery === undefined || $rootScope.packery === null){
                console.log('making packery!');
                $rootScope.packery = new Packery(element[0].parentElement, {itemSelector: '.item', gutter: 2.5 });
                $rootScope.packery.bindResize();
                $rootScope.packery.appended(element[0]);
                $rootScope.packery.items.splice(1,1); // hack to fix a bug where the first element was added twice in two different positions
            }
            else{
                $rootScope.packery.appended(element[0]);
  					}
				$('.wrapper').imagesLoaded( function(){
							$rootScope.packery.layout();
					})
			}
    };
}]);
