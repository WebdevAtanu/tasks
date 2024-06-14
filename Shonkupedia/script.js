let inventions = {
	"Miracurall": "A drug that cures any ailment, the name is a short form of Miracle Cure for All Ailments.",
	"Annihillin": "A pistol capable of annihilating (vanishing or vaporizing) anything that is living.",
	"Shankoplane": "A small hovercraft created using anti-gravity technology, capable of vertical take-off and landing. It uses Turboline as a fuel and has an impeccable mileage.",
	"Shankovite": "The anti-gravity alloy by which Shankoplane was made.",
	"Shankoplast": "Wonderful plastic.",
	"Shankolone": "A variation of Shankoplast.",
	"Omniscope": "A combination of telescope, microscope and X-ray-scope which looks like and can be worn as spectacles.",
	"Air_conditioning_pill": "A capsule to be kept in shirt pocket, that keeps the body temperature normal in extremes of climate.",
	"Somnolin": "A sleeping pill that will work in any condition.",
	"Evolutin": "A drug that makes people evolve 10 thousand years in 5 minutes.",
	"Compudium": "Short for Computerized Medium, a device to contact departed souls. Designed by Shonku along with Wilhelm Crole and Rudolf Haine.",
	"Compu": "It's a computer brain with 10 crore delicate circuits in it.",
	"RememBrain": "A device that makes people remember the things they forgot.",
	"Bidhushekhar": "A mechanical man (robot) with AI built with very cheap materials, programmed to answer any question asked to it.",
	"Linguagraph": "A device that translates any earth language to any other. The translation capability is supposed to include animal languages, and works on cats, plants, ants and even viruses too.",
	"Intellectron": "A device to measure intelligence.",
	"Ornithon": "A device to educate birds. Professor Shonku was able to educate a crow named Corvus using this device.",
	"Snuff_gun": "A gun that causes snuffing for thirty-three hours.",
	"Nightmare_pill": "Causes sleep and make the taker have terrible nightmares.",
	"Fish_pill": "Space food for cats.",
	"Rocket": "A rocket for space adventures.",
	"Botica_indica": "A pill made from sap of Banyan tree to ward off need of food and water for 24 hours.",
	"Special_room_freshner": "A room freshner made up of 36 different flower essence.",
	"Invisibility_drug": "A drug to make living things invisible for at least 10 hours.",
	"Carbothin_Fabric": "A fabric which is non-conductor of electricity and saves from electrical shocks.",
	"Tiranium_phosphate": "A very strong and dangerous acid.",
	"Annihilin_acid": "The most powerful and dangerous acid invented by Shonku. This acid was used in his Annihilin pistol.",
	"Neo_Specetroscope": "A device to contact departed souls. Almost similar to Compudium.",
	"Luminimax": "A small ball to give the light of 200-watt power when ignited.",
	"Oximore_powder": "Powder to help intake of Oxygen at higher altitudes.",
	"CameRapid": "Instant color photographs after snap.",
	"NerVigour": "A tonic to the steady nervous system.",
	"X_and_anti_X": "Drug to change the personality of a human from Dr Jekyl to Mr Hyde. The same drug was invented by Dr Danieli.",
	"Time_machine": "Attempted to build.",
	"Electric_pistol": "A pistol to fire 400 volts electricity.",
	"Cerebrellant": "Medicine to improve brain function.",
	"Marjarin": "Medicine for increasing life span of cats.",
	"Anesthium": "Tranquilizer gun, jet spraying semi-liquid paralytic agent",
	"TrishNashok": "A thirst quencher pill.",

	"Microsonograph": "Machine to hear subsonic sounds and speeches.",
	"Robu": "I capable robot which gains sentience."
}


let adventures = {
	"Byomjatrir_Diary": "The first story in the series is about the Professor's journey to Mars on a rocket of his own manufacture, with Bidhusekhar, a robot, Prahlad, his man-servant and Newton the cat for company. After a fearful encounter with the Martians, they flee from Mars, and land on planet Tafa, populated by large black ants who welcome Shonku as one of their own.",


	"Khoka": "A child hurts his head, thereby acquiring extraordinary ability of omniscience, by speaking in multiple languages, and reciting lines of Shakespeare. He is brought under Shonku's care, in a desperate attempt by the parents to bring the child back to normal. Finally, he cures himself by a concoction of his own creation, including dangerous chemicals, some of which are Shonku's inventions.",


	"Har": "Professor Shonku meets a fakir who has this ability to re-animate a living thing from its bones. Shonku tries to investigate, and to do so, he records the spell using his recorder, which enrages the fakir and causes him to curse Shonku. Later in his life, Shonku along with an assistant discovers the remains of a dinosaur in a cave. The curse starts to take effect and the dinosaur comes back to life.",


	"Golok_Rahasya": "Shonku gets hold of a mysterious sphere which changes its color spontaneously and emanates various sounds. In fact, the sphere is a planet from another solar system and it has brought extraterrestrial life along.",


	"Swapnadwip": "The Professor is haunted by a repeating dream where he along, with his friends, are stranded on a beautiful exotic island without any inhabitants. His friends also experience the same dream. It is as if the mysterious island is beckoning great scientists of the world to it. The plants seep people's intelligence and attracts their attention using dreams.",


	"Ek_Shringo_Abhijan": "Shonku goes to Tibet, to find out about a Unicorn which is reported to be seen there. In the adventure, Shonku discovers a place where everybody's dreams come true, a Utopia.",


	"Mahakasher_doot": "Shonku tries to prove that human civilization has prospered thanks to the help of some alien civilisation that comes to Earth every 5000 years and teaches them something extraordinary. What are they going to reveal this time?",


	"El_Dorado": "Nokurbabu has the ability to make others see what he is thinking. He and Shonku are caught in a chain of events that lead them to the deep jungles of South America where El Dorado has always eluded discovery.",


	"UFO": "Several sightings of UFOs makes headlines worldwide. However, this news is outdone by the news of the demolition of some of the greatest monuments of mankind. The Eiffel Tower and the Angkor Wat are destroyed, and the aliens are blamed. Nokurbabu joins Shonku and other scientists who discover that the UFO has its base in the Gobi desert. They find the UFO and go aboard. They are captured immediately, not by the aliens, but by a mad scientist who is the present owner of the UFO and who is in fact the destroyer of the monuments, driven because he was denied his due honour in the scientific community. His next target is the Taj Mahal.",


	"Swarnaparnee": "This is the story of a young Shonku and the invention of his Miracurall and the time when he visited Germany on the eve of World War II. A fascinating story about how Shonku went on to meet Hermann Göring and finally evaded the Nazis."

};



function func1() {
	let selectedValue = document.getElementById("invent").value;
	let num;
	switch (selectedValue) {
		case "Miracurall":
			document.getElementById("inventpara").innerHTML = inventions.Miracurall;
			break;
		case "Annihillin":
			document.getElementById("inventpara").innerHTML = inventions.Annihillin;
			break;
		case "Shankoplane":
			document.getElementById("inventpara").innerHTML = inventions.Shankoplane;
			break;
		case "Shankovite":
			document.getElementById("inventpara").innerHTML = inventions.Shankovite;
			break;
		case "Shankoplast":
			document.getElementById("inventpara").innerHTML = inventions.Shankoplast;
			break;
		case "Shankolone":
			document.getElementById("inventpara").innerHTML = inventions.Shankolone;
			break;

		case "Omniscope":
			document.getElementById("inventpara").innerHTML = inventions.Omniscope;
			break;

		case "Air - conditioning pill":
			document.getElementById("inventpara").innerHTML = inventions.Air_conditioning_pill;
			break;

		case "Somnolin":
			document.getElementById("inventpara").innerHTML = inventions.Somnolin;
			break;
		case "Evolutin":
			document.getElementById("inventpara").innerHTML = inventions.Evolutin;
			break;
		case "Compudium":
			document.getElementById("inventpara").innerHTML = inventions.Compudium;
			break;
		case "Compu":
			document.getElementById("inventpara").innerHTML = inventions.Compu;
			break;
		case "RememBrain":
			document.getElementById("inventpara").innerHTML = inventions.RememBrain;
			break;
		case "Bidhushekhar":
			document.getElementById("inventpara").innerHTML = inventions.Bidhushekhar;
			break;
		case "Linguagraph":
			document.getElementById("inventpara").innerHTML = inventions.Linguagraph;
			break;

		case "Intellectron":
			document.getElementById("inventpara").innerHTML = inventions.Intellectron;
			break;
		case "Ornithon":
			document.getElementById("inventpara").innerHTML = inventions.Ornithon;
			break;
		case "Snuff gun":
			document.getElementById("inventpara").innerHTML = inventions.Snuff_gun;
			break;
		case "Nightmare pill":
			document.getElementById("inventpara").innerHTML = inventions.Nightmare_pill;
			break;
		case "Fish pill":
			document.getElementById("inventpara").innerHTML = inventions.Fish_pill;
			break;
		case "Rocket":
			document.getElementById("inventpara").innerHTML = inventions.Rocket;
			break;
		case "Botica indica":
			document.getElementById("inventpara").innerHTML = inventions.Botica_indica;
			break;
		case "Special room - freshner":
			document.getElementById("inventpara").innerHTML = inventions.Special_room_freshner;
			break;
		case "Invisibility drug":
			document.getElementById("inventpara").innerHTML = inventions.Invisibility_drug;
			break;
		case "Carbothin Fabric":
			document.getElementById("inventpara").innerHTML = inventions.Carbothin_Fabric;
			break;

		case "Tiranium phosphate":
			document.getElementById("inventpara").innerHTML = inventions.Tiranium_phosphate;
			break;
		case "Annihilin acid":
			document.getElementById("inventpara").innerHTML = inventions.Annihilin_acid;
			break;
		case "Neo - Specetroscope":
			document.getElementById("inventpara").innerHTML = inventions.Neo_Specetroscope;
			break;
		case "Luminimax":
			document.getElementById("inventpara").innerHTML = inventions.Luminimax;
			break;
		case "Oximore powder":
			document.getElementById("inventpara").innerHTML = inventions.Oximore_powder;
			break;
		case "CameRapid":
			document.getElementById("inventpara").innerHTML = inventions.CameRapid;
			break;
		case "NerVigour":
			document.getElementById("inventpara").innerHTML = inventions.NerVigour;
			break;
		case "X and anti - X":
			document.getElementById("inventpara").innerHTML = inventions.X_and_anti_X;
			break;

		case "Time machine":
			document.getElementById("inventpara").innerHTML = inventions.Time_machine;
			break;

		case "Electric pistol":
			document.getElementById("inventpara").innerHTML = inventions.Electric_pistol;
			break;

		case "Cerebrellant":
			document.getElementById("inventpara").innerHTML = inventions.Cerebrellant;
			break;

		case "Marjarin":
			document.getElementById("inventpara").innerHTML = inventions.Marjarin;
			break;
		case "Anesthium":
			document.getElementById("inventpara").innerHTML = inventions.Anesthium;
			break;
		case "TrishNashok":
			document.getElementById("inventpara").innerHTML = inventions.TrishNashok;
			break;
		case "Microsonograph":
			document.getElementById("inventpara").innerHTML = inventions.Microsonograph;
			break;
		case "Robu":
			document.getElementById("inventpara").innerHTML = inventions.Robu;
			break;

	}
}

function myfunc() {
	let selectedValue2 = document.getElementById("adventure").value;
	switch (selectedValue2) {
		case "Byomjatrir Diary":
			document.getElementById("adventurepara").innerHTML = adventures.Byomjatrir_Diary;
			break;

		case "khoka":
			document.getElementById("adventurepara").innerHTML = adventures.Khoka;
			break;

		case "har":
			document.getElementById("adventurepara").innerHTML = adventures.Har;
			break;
		case "Golok Rahasya":
			document.getElementById("adventurepara").innerHTML = adventures.Golok_Rahasya;
			break;

		case "Swapnadwip":
			document.getElementById("adventurepara").innerHTML = adventures.Swapnadwip;
			break;
		case "Ek Shringo Abhijan":
			document.getElementById("adventurepara").innerHTML = adventures.Ek_Shringo_Abhijan;
			break;

		case "Mahakasher doot":
			document.getElementById("adventurepara").innerHTML = adventures.Mahakasher_doot;
			break;
		case "Nakurbabu o El Dorado":
			document.getElementById("adventurepara").innerHTML = adventures.El_Dorado;
			break;

		case "Professor Shonku o UFO":
			document.getElementById("adventurepara").innerHTML = adventures.UFO;
			break;

		case "Swarnaparnee":
			document.getElementById("adventurepara").innerHTML = adventures.Swarnaparnee;
			break;

	}
};