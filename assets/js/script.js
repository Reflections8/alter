let valuesList = document.querySelectorAll('.dropdown-list'),
	 valuesListItems = document.getElementsByClassName('dropdown-list__item'),
	 valueToConvert = document.querySelectorAll('.current-value'),
	 mainValueBlock = document.querySelector('.values');

/*values animation*/
let activeClasses = ["value-active", "basic__shadow"];

	
let inputs = document.querySelectorAll('.converter-box__input'),
	inputInitial = inputs[0],
	inputFinal = inputs[1];


Object.entries(categories).forEach(([ name, item ]) => {
	let elements = document.getElementsByClassName("value-item");
	const el = document.createElement('div'); // value button wrapper
	el.classList.add('value-item', 'basic__btn');
	el.insertAdjacentHTML('beforeend', `
	  <p class="value-item__title">${item.title}</p>
		 <img src="assets/img/values/${name}.svg" alt="" class="svg-icon value-item__img">
	`);
	item.element = el;
	el.addEventListener('click', () => changeValue(name, item));
	//по этому name можно вытащить categories[name]
	mainValueBlock.appendChild(el);
	function changeValue(name, item) {
		for (let i = 0; i < valueToConvert.length; i++) {
			/* const valuesArray = [];
			for (key in item.data) {
				valuesArray.push(item.data[key].name);
			}
			valueToConvert[0].textContent = valuesArray[0];
			valueToConvert[1].textContent = valuesArray[valueToConvert.length - 1]; */
		};
		
		for (let i = 0; i < elements.length; i++) {
			elements[i].classList.remove(...activeClasses);
		}
		el.classList.add(...activeClasses);

		while (valuesListItems.length != 0) {
			i = 0;
			valuesListItems[i].remove();
			i++;
		};;
		
		for (key in item.data) {
			currentValueName = item.data[key].name;
			currentValueStore = item.data[key].value;
			console.log(key + ' it\'s key');
			for (let i = 0; i < valuesList.length; i++) {
				valuesList[i].insertAdjacentHTML('afterbegin', (`<li class="converter-box__list-item dropdown-list__item">${currentValueName}</li>`));
				valueToConvert[0].textContent = currentValueName;
				valueToConvert[1].textContent = currentValueName;
			};

			for (let i = 0; i < valuesList.length; i++) {
				const currentValue = valueToConvert[i];
				const currentList = valuesList[i];
				const currentListItems = currentList.children;
			
				currentValue.addEventListener('mouseenter', function() {
					currentList.classList.remove('hidden');
				});
			
				currentValue.addEventListener('mouseleave', function() {
					currentList.classList.add('hidden');
				});
				
				currentList.addEventListener('mouseenter', function() {
					currentList.classList.remove('hidden');
				});
			
				currentList.addEventListener('mouseleave', function() {
					currentList.classList.add('hidden');
				});
			
				for (let j = 0; j < currentListItems.length; j++) {
					const currentItem = currentListItems[j]
			
					currentItem.addEventListener('click', (e) => {
						let text = currentItem.textContent;
						currentValue.textContent = text;
						currentList.classList.add('hidden');
					});
				};
			};	//dropdown menu animation
		}; //"for in" on clicked type of value
		let converter = document.querySelector('.converter');
		converter.onclick = function(event) {
			let target = event.target;
			if (target.tagName != "LI" || target.classList.contains('current-value')) {
				return
			} else {
				currentValueStore = target.innerHTML;
				console.log(currentValueStore);
				console.log(categories.mass.data);
			}
		};

	}; //event listener => change value function
}); //global object "categories", .entries method

//event delegation
/* let selectedValue;
mainValueBlock.onclick = function(event) {
	let target = event.target;
	let valueDiv = event.target.closest('div');
	if (!valueDiv) return;
	if (!mainValueBlock.contains(valueDiv)) return;
	if (target.classList.contains('values')) return; */
	/* highlight(valueDiv); */
	/* changeValue(valueDiv); */
/* }; */

	//highlight current value button
/* 	function highlight(valueBlock) {
		selectedValue = valueBlock;
		for (let i = 0; i < elements.length; i++) {
			elements[i].classList.remove(...activeClasses);
		}
		selectedValue.classList.add(...activeClasses);
	} */

/*svg to inline-svg*/
$("img.svg-icon").each(function () {
	let $img = $(this);
	let imgClass = $img.attr("class");
	let imgURL = $img.attr("src");
	$.get(imgURL, function (data) {
		 let $svg = $(data).find("svg");
		 if (typeof imgClass !== "undefined") {
			  $svg = $svg.attr("class", imgClass + " replaced-svg");
}
		$svg = $svg.removeAttr("xmlns:a");
		if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
			$svg.attr("viewBox", "0 0 " + $svg.attr("height") + " " + $svg.attr("width"))
		}
		$img.replaceWith($svg);
	}, "xml");
});



let quoteDiv = document.getElementsByClassName('header__quote'),
	 quoteTimer = setInterval(() => changeQuote(), 5000);

function changeQuote() {
	let randomQuote = Math.trunc(Math.random() * 100);
	if (randomQuote > quotes.length - 1) {
		return
	} else {
		quoteDiv[0].textContent = quotes[randomQuote];
		quoteDiv[1].textContent = quotes[randomQuote];
	}
}

