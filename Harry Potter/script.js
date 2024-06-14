let data = {
	"A": ["Aberto - Opens locked doors.",
		"Accio - Summons objects.",
		"Aguamenti - Summons water.",
		"Alohomora - Unlocks objects.",
		"Anapneo - Clears someone's airway.",
		"Aparecium - Reveals secret, written messages.",
		"Apparate - A non-verbal transportation spell that allows a witch or wizard to instantly travel on the spot and appear at another location (Disapparate is the opposite).",
		"Ascendio - Propels someone into the air.",
		"Avada Kedavra - Also known as The Killing Curse, the most evil spell in the Wizarding World.",
		"Avis - Conjures a small flock of birds."
	],

	"B": [
		"Bat-Bogey Hex - Turns the target's boogers into bats.",
		"Bombardo - Creates an explosion.",
		"Brackium Emendo - Heals broken bones."
	],


	"C": [
		"Capacious Extremis - Known as the Extension Charm, its a complicated spell that can greatly expand or extend the capacity of an object or space without affecting it externally.",
		"Confundo - Known as the Confundus Charm, it causes confusion of the target.",
		"Conjunctivitis Curse - Affects the eyes and sight of a target.",
		"Crinus Muto - Changes hair color and style.",
		"Crucio - One of three Unforgivable Curses, it causes unbearable pain in the target."
	],
	"D": ["Diffindo - Used to precisely cut an object.",
		"Disillusionment Charm - Causes the target to take on the appearance of its surroundings.",
		"Disapparate - A non-verbal transportation spell that allows a witch or wizard to instantly travel on the spot and leave for another location (Apparate is the opposite)."
	],
	"E": ["Engorgio - Causes rapid growth in the targeted object.",
		"Episkey - Heals minor injuries.",
		"Expecto patronum - The Patronus Charm is a powerful projection of hope and happiness that drives away Dementors.",
		"Erecto - Allows a witch or wizard to build a structure, like a tent.",
		"Evanesco - Vanishes objects.",
		"Expelliarmus - Forces an opponent to drop whatever is in their possession."
	],
	"F": ["Ferula - A healing charm that conjures wraps and bandages for wounds.",
		"Fidelius Charm - A complex charm that conceals a secret into the soul of a chosen Secret Keeper.",
		"Fiendfyre Curse - Conjures destructive, enormous enchanted flames.",
		"Finite Incantatem - A general counter-spell that's used to reverse or counter already cast charms.",
		"Furnunculus Curse - A jinx that causes a breakout of boils or pimples."
	],
	"G": ["Geminio - Duplicates objects.",
		"Glisseo - Transforms a staircase into a slide."
	],
	"H": ["Homenum Revelio - Reveals the presence of another person.",
		"Homonculus Charm - Detects anyone's true identity and location on a piece of parchment."
	],
	"I": ["Immobulus - Immobilizes living targets.",
		"Impedimenta - A temporary jinx that slows the movement of the target.",
		"Incarcerous - Conjures ropes.",
		"Imperio - One of the three Unforgivable Curses, it places the target under the complete control of the caster.",
		"Impervius - Makes an object waterproof.",
		"Incendio - Conjures flames."
	],
	"J": ["No Spells"],
	"K": ["No Spells"],
	"L": ["Langlock - Causes the target's tongue to stick to the roof of their mouth.",
		"Legilimens - Invading or navigating another's mind.",
		"Levicorpus - Levitates the target by their ankle.",
		"Locomotor Mortis - The Leg-Locker curse bounds the target's legs.",
		"Lumos - Illuminates the caster's wand."
	],
	"M": ["Morsmordre - Conjures and projects Lord Voldemort's Dark Mark.",
		"Mucus Ad Nauseam - Inflicts an extreme runny nose or cold.",
		"Muffliato - Creates a buzzing sound in the target's ears to prevent eavesdropping"
	],
	"N": ["Nox - Reverses the lumos charm, extinguishing a wand's light."],
	"O": ["Obliviate - Erases the target's memory.",
		"Obscuro - Conjures a blindfold.",
		"Oculus Reparo - Repairs eyeglasses.",
		"Oppugno - Directs an object or person to attack a victim"
	],
	"P": ["Petrificus Totalus - Temporarily freezes or petrifies the body of the target.",
		"Periculum - Conjures flares/red sparks.",
		"Piertotum Locomotor - Incantation used to bring to life inanimate objects and artifacts.",
		"Protean Charm - Links objects together for better communication.",
		"Protego - Casts an invisible shield around the caster, protecting against spells and objects (except for The Killing Curse)"
	],
	"Q": ["No Spells"],
	"R": ["Reducto - Reduces the target to pieces.",
		"Reducio - Shrinks an enlarged object to its regular size.",
		"Renneverate - Awakens or revives the target.",
		"Reparifors - Heals magical ailments like poisoning or paralysis.",
		"Reparo - Fixes broken objects.",
		"Rictusempra - A charm that disarms an opponent by tickling them.",
		"Riddikulus - Used to defeat a Boggart, the charm allows the scary creature to assume a comedic form, disarming it."
	],
	"S": ["Scourgify - Cleans objects.",
		"Sectumsempra - Inflicts severe lacerations and haemorrhaging on the target.",
		"Serpensortia - Conjures a live snake.",
		"Silencio - Silences the target.",
		"Sonorus - Amplifies the witch or wizard's voice.",
		"Spongify - Softens the target.",
		"Stupefy - The Stunning spell freezes objects and renders living targets unconscious."
	],
	"T": ["Tarantallegra - Aimed at the legs, causes uncontrollable dancing movement."],
	"U": ["Unbreakable Vow - A magically binding contract that results in the death of whoever breaks it."],
	"V": ["No Spells"],
	"W": ["No Spells"],
	"X": ["No Spells"],
	"Y": ["No Spells"],
	"Z": ["No Spells"]



};



let keys = document.getElementsByClassName("key");
let x = "",
	i, j;

for (i = 0; i < keys.length; i++) {
	keys[i].addEventListener('click', function func() {

		let val = this.innerHTML;



		if (val == "A") {
			document.getElementById("pid").innerHTML = "";
			for (j = 0; j < data.A.length; j++) {
				document.getElementById("pid").innerHTML += data.A[j] + "<br> <br>";
			}

		} else if (val == "B") {
			document.getElementById("pid").innerHTML = "";
			for (j = 0; j < data.B.length; j++) {
				document.getElementById("pid").innerHTML += data.B[j] + "<br> <br>";
			}
		} else if (val == "C") {
			document.getElementById("pid").innerHTML = "";
			for (j = 0; j < data.C.length; j++) {
				document.getElementById("pid").innerHTML += data.C[j] + "<br> <br>";
			}
		} else if (val == "D") {
			document.getElementById("pid").innerHTML = "";
			for (j = 0; j < data.D.length; j++) {
				document.getElementById("pid").innerHTML += data.D[j] + "<br> <br>";
			}
		} else if (val == "E") {
			document.getElementById("pid").innerHTML = "";
			for (j = 0; j < data.E.length; j++) {
				document.getElementById("pid").innerHTML += data.E[j] + "<br> <br>";
			}
		} else if (val == "F") {
			document.getElementById("pid").innerHTML = "";
			for (j = 0; j < data.B.length; j++) {
				document.getElementById("pid").innerHTML += data.F[j] + "<br> <br>";
			}
		} else if (val == "G") {
			document.getElementById("pid").innerHTML = "";
			for (j = 0; j < data.G.length; j++) {
				document.getElementById("pid").innerHTML += data.G[j] + "<br> <br>";
			}
		} else if (val == "H") {
			document.getElementById("pid").innerHTML = "";
			for (j = 0; j < data.H.length; j++) {
				document.getElementById("pid").innerHTML += data.H[j] + "<br> <br>";
			}
		} else if (val == "I") {
			document.getElementById("pid").innerHTML = "";
			for (j = 0; j < data.B.length; j++) {
				document.getElementById("pid").innerHTML += data.I[j] + "<br> <br>";
			}
		} else if (val == "J") {
			document.getElementById("pid").innerHTML = "";
			for (j = 0; j < data.J.length; j++) {
				document.getElementById("pid").innerHTML += data.J[j] + "<br> <br>";
			}
		} else if (val == "K") {
			document.getElementById("pid").innerHTML = "";
			for (j = 0; j < data.K.length; j++) {
				document.getElementById("pid").innerHTML += data.K[j] + "<br> <br>";
			}
		} else if (val == "L") {
			document.getElementById("pid").innerHTML = "";
			for (j = 0; j < data.L.length; j++) {
				document.getElementById("pid").innerHTML += data.L[j] + "<br> <br>";
			}
		} else if (val == "M") {
			document.getElementById("pid").innerHTML = "";
			for (j = 0; j < data.M.length; j++) {
				document.getElementById("pid").innerHTML += data.M[j] + "<br> <br>";
			}
		} else if (val == "N") {
			document.getElementById("pid").innerHTML = "";
			for (j = 0; j < data.N.length; j++) {
				document.getElementById("pid").innerHTML += data.N[j] + "<br> <br>";
			}
		} else if (val == "O") {
			document.getElementById("pid").innerHTML = "";
			for (j = 0; j < data.O.length; j++) {
				document.getElementById("pid").innerHTML += data.O[j] + "<br> <br>";
			}
		} else if (val == "P") {
			document.getElementById("pid").innerHTML = "";
			for (j = 0; j < data.P.length; j++) {
				document.getElementById("pid").innerHTML += data.P[j] + "<br> <br>";
			}
		} else if (val == "Q") {
			document.getElementById("pid").innerHTML = "";
			for (j = 0; j < data.Q.length; j++) {
				document.getElementById("pid").innerHTML += data.Q[j] + "<br> <br>";
			}
		} else if (val == "R") {
			document.getElementById("pid").innerHTML = "";
			for (j = 0; j < data.R.length; j++) {
				document.getElementById("pid").innerHTML += data.R[j] + "<br> <br>";
			}
		} else if (val == "S") {
			document.getElementById("pid").innerHTML = "";
			for (j = 0; j < data.S.length; j++) {
				document.getElementById("pid").innerHTML += data.S[j] + "<br> <br>";
			}
		} else if (val == "T") {
			document.getElementById("pid").innerHTML = "";
			for (j = 0; j < data.T.length; j++) {
				document.getElementById("pid").innerHTML += data.T[j] + "<br> <br>";
			}
		} else if (val == "U") {
			document.getElementById("pid").innerHTML = "";
			for (j = 0; j < data.U.length; j++) {
				document.getElementById("pid").innerHTML += data.U[j] + "<br> <br>";
			}
		} else if (val == "V") {
			document.getElementById("pid").innerHTML = "";
			for (j = 0; j < data.V.length; j++) {
				document.getElementById("pid").innerHTML += data.V[j] + "<br> <br>";
			}
		} else if (val == "W") {
			document.getElementById("pid").innerHTML = "";
			for (j = 0; j < data.W.length; j++) {
				document.getElementById("pid").innerHTML += data.W[j] + "<br> <br>";
			}
		} else if (val == "X") {
			document.getElementById("pid").innerHTML = "";
			for (j = 0; j < data.X.length; j++) {
				document.getElementById("pid").innerHTML += data.X[j] + "<br> <br>";
			}
		} else if (val == "Y") {
			document.getElementById("pid").innerHTML = "";
			for (j = 0; j < data.Y.length; j++) {
				document.getElementById("pid").innerHTML += data.Y[j] + "<br> <br>";
			}
		} else if (val == "Z") {
			document.getElementById("pid").innerHTML = "";
			for (j = 0; j < data.Z.length; j++) {
				document.getElementById("pid").innerHTML += data.Z[j] + "<br> <br>";
			}
		} else if (val == "Clear") {
			document.getElementById("pid").innerHTML = "";
		} else {

		};


	});
};