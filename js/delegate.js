let $document = $(document);

$document.ready(function() {

	let NATOPhonetic = {
		$input : $('#stringInput'),
		$submit : $('button'),
		$output : $('#output ul'),
		stringInput : "",
		letterArray : [],
		library : {
			legend : { char : "A", name : "Name", faa : "Phonetic FAA", icao : "Phonetic ICAO", morse : "Morse", phonetic : "Phonetic International" },
			a : {
				char 	: "A",
				name	: "Alpha",
				faa		: "Al Fah"
			},
			b : {
				char 	: "B",
				name	: "Bravo",
				faa		: "Brah Voh"
			},
			c : {
				char 	: "C",
				name	: "Charlie",
				faa		: "Char Lee"
			},
			d : {
				char 	: "D",
				name	: "Delta",
				faa		: "Dell Tah"
			},
			e : {
				char 	: "E",
				name	: "Echo",
				faa		: "Eck Oh"
			},
			f : {
				char 	: "F",
				name	: "Foxtrot",
				faa		: "Foks Trot"
			},
			g : {
				char 	: "G",
				name	: "Golf",
				faa		: "Golf"
			},
			h : {
				char 	: "H",
				name	: "Hotel",
				faa		: "Hoh Tell",
				icao 	: "Ho Tell"
			},
			i : {
				char 	: "I",
				name	: "India",
				faa		: "In Dee Ah"
			},
			j : {
				char 	: "J",
				name	: "Juliett",
				faa		: "Jew Lee Ett"
			},
			k : {
				char 	: "K",
				name	: "Kilo",
				faa		: "Key Loh"
			},
			l : {
				char 	: "L",
				name	: "Lima",
				faa		: "Lee Mah"
			},
			m : {
				char 	: "M",
				name	: "Mike",
				faa		: "Mike"
			},
			n : {
				char 	: "N",
				name	: "November",
				faa		: "No Vem Ber"
			},
			o : {
				char 	: "O",
				name	: "Oscar",
				faa		: "Oss Car"
			},
			p : {
				char 	: "P",
				name	: "Papa",
				faa		: "Pah Pah"
			},
			q : {
				char 	: "Q",
				name	: "Quebec",
				faa		: "Keh Beck"
			},
			r : {
				char 	: "R",
				name	: "Romeo",
				faa		: "Row Me Oh"
			},
			s : {
				char 	: "S",
				name	: "Sierra",
				faa		: "See Air Ah",
				icao 	: "See Air Rah"
			},
			t : {
				char 	: "T",
				name	: "Tango",
				faa		: "Tang Go"
			},
			u : {
				char 	: "U",
				name	: "Uniform",
				faa		: "You Nee Form"
			},
			v : {
				char 	: "V",
				name	: "Victor",
				faa		: "Vik Tah"
			},
			w : {
				char 	: "W",
				name	: "Whiskey",
				faa		: "Wiss Key"
			},
			x : {
				char 	: "X",
				name	: "X Ray",
				faa		: "Exks Ray"
			},
			y : {
				char 	: "Y",
				name	: "Yankee",
				faa		: "Yang Key"
			},
			z : {
				char 	: "Z",
				name	: "Zulu",
				faa		: "Zoo Loo"
			},
			0 : {
				char 	: "0",
				name	: "Zero",
				faa		: "Zee Row"
			},
			1 : {
				char 	: "1",
				name	: "One",
				faa		: "Wun"
			},
			2 : {
				char 	: "2",
				name	: "Two",
				faa		: "Too"
			},
			3 : {
				char 	: "3",
				name	: "Three",
				faa		: "Tree"
			},
			4 : {
				char 	: "4",
				name	: "Four",
				faa		: "Fow Er"
			},
			5 : {
				char 	: "5",
				name	: "Five",
				faa		: "Fife"
			},
			6 : {
				char 	: "6",
				name	: "Six",
				faa		: "Six"
			},
			7 : {
				char 	: "7",
				name	: "Seven",
				faa		: "Sev En"
			},
			8 : {
				char 	: "8",
				name	: "Eight",
				faa		: "Ait"
			},
			9 : {
				char 	: "9",
				name	: "Niner",
				faa		: "Nine Er"
			}
		},
		onInputChange : function() {
			if (NATOPhonetic.stringInput !== NATOPhonetic.$input.val()) {
				NATOPhonetic.stringInput = NATOPhonetic.$input.val();
				NATOPhonetic.letterArray = [];
				NATOPhonetic.prepareLetters();
				NATOPhonetic.changeList();
			}
		},
		prepareLetters : function() {	
			for (var i = NATOPhonetic.stringInput.length - 1; i >= 0; i--) {
				let phonetic = NATOPhonetic.getLetterValue(NATOPhonetic.stringInput[i]);
				if (phonetic) {
					NATOPhonetic.letterArray.unshift(phonetic);
				}
			}
		},
		getLetterValue : function(needle) {
			return NATOPhonetic.library[needle.toLowerCase()];
		},
		changeList : function() {
			NATOPhonetic.$output[0].innerHTML = "";
			NATOPhonetic.letterArray.forEach(function(value) {
				let $li = $('<li></li>');
					$li.appendTo(NATOPhonetic.$output);

				$('<div></div>', {
						text	: value.char,
						class	: "letter"
					}).appendTo($li);

				NATOPhonetic.generateTooltip($li, value);
			});
		},
		generateTooltip : function($li, value) {
			let $tooltip = $('<div></div>', { class : "tooltip" });
				$tooltip.appendTo($li);

			if (value.name) { $('<p></p>', { class : "name", text : value.name }).appendTo($tooltip); }
			if (value.faa) { $('<p></p>', { class : "faa", text : value.faa }).appendTo($tooltip); }
		}
	};


	NATOPhonetic.$input.on('keyup', NATOPhonetic.onInputChange);
	NATOPhonetic.$submit.on('click', NATOPhonetic.onInputChange);

});
