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


let valuesList = document.querySelectorAll('.dropdown-list'),
	 valuesListItems = document.getElementsByClassName('dropdown-list__item'),
	 valueToConvert = document.querySelectorAll('.current-value');


/*values animation*/
let elements = document.querySelectorAll(".value-item");
let activeClasses = ["value-active", "basic__shadow"];

let toggleActiveElement = element => {
   element.addEventListener("click", () => {
      elements.forEach(n => n.classList.remove(...activeClasses));
      element.classList.add(...activeClasses);
		for (key in mass) {
			let massValues = mass[key];
			let massValuesName = massValues.name;
			
			for (let j = 0; j < valuesListItems.length; j++) {
				valuesListItems[j].remove();
				console.log(1);
			}
		};

		for (let i = 0; i < valuesList.length; i++) {
			valuesList[i].insertAdjacentHTML('afterbegin', (`<li class="converter-box__list-item dropdown-list__item">${distance.cm.name}</li>`));
		}
   });
};

elements.forEach(v => toggleActiveElement(v));

/*oninput TEST*/
let inputs = document.querySelectorAll('.converter-box__input'),
	inputInitial = inputs[0],
	inputFinal = inputs[1];

inputInitial.oninput = function() {
	inputFinal.value = inputInitial.value * 2;
}

inputFinal.oninput = function() {
	inputInitial.value = inputFinal.value / 2;
}

/*values changing*/
for (key in mass) {
	let massValues = mass[key];
	let massValuesName = massValues.name;
	
	for (let i = 0; i < valuesList.length; i++) {
		valuesList[i].insertAdjacentHTML('afterbegin', (`<li class="converter-box__list-item dropdown-list__item">${massValuesName}</li>`));
	}
};

function changingValues(btn, element) {
	for (key in btn) {
		let btnValues = btn[key];
		let btnValuesName = massValues.name;
		
		for (let i = 0; i < valuesList.length; i++) {
			valuesList[i].insertAdjacentHTML('afterbegin', (`<li class="converter-box__list-item dropdown-list__item">${massValuesName}</li>`));
		}
	};
};

/* for (key in distance) {
	let distValues = distance[key];
	let distValuesName = distValues.name;
	
	for (let i = 0; i < valuesList.length; i++) {
		valuesList[i].insertAdjacentHTML('afterbegin', (`<li class="converter-box__list-item dropdown-list__item">${distValuesName}</li>`));
	}
};
 */

/* for (let i = 0; i < valuesList.length; i++) {
	valuesList[i].insertAdjacentHTML('afterbegin', (`<li class="converter-box__list-idropdown-list__item">${submainValues.name}</li>`));
} */


/*hiding dropdown*/
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
			let text = currentItem.textContent
			currentValue.textContent = text
			currentList.classList.add('hidden');
		});
	};
};