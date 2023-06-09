// set the dimensions and margins of the graph
var margin = { top: 10, right: 10, bottom: 10, left: 10 },
	width = 505 - margin.left - margin.right,
	height = 535 - margin.top - margin.bottom;

var ingredientArray = [];

function csvToArray(str, delimiter = ",") {
	// slice from start of text to the first \n index
	// use split to create an array from string by delimiter
	const headers = str.slice(0, str.indexOf("\n")).split(delimiter);

	// slice from \n index + 1 to the end of the text
	// use split to create an array of each csv value row
	const rows = str.slice(str.indexOf("\n") + 1).split("\n");

	// Map the rows
	// split values from each row into an array
	// use headers.reduce to create an object
	// object properties derived from headers:values
	// the object passed as an element of the array
	const arr = rows.map(function (row) {
		const values = row.split(delimiter);
		const el = headers.reduce(function (object, header, index) {
			object[header] = values[index];
			return object;
		}, {});
		return el;
	});
	// return the array
	return arr;
};

function sortArrayByProperty(arrayToSort) {
	const objectSortedByIngredient = arrayToSort.reduce(function (objectByIngredient, objectToReduce) {
		if (objectToReduce.ingredient === "") {
			return objectByIngredient;

		};
		
		objectToReduce.ingredient.split(" ").forEach(function (recipe) {
			if (!Array.isArray(objectByIngredient[recipe])) {
				objectByIngredient[recipe] = [{
					name: "Origin",
					parent: "",
					value: "",
					ingredient: ""
				}];
				objectByIngredient[recipe].push(objectToReduce);
			} else {
				objectByIngredient[recipe].push(objectToReduce);
			}
		});
		
		return objectByIngredient;
	}, {})

	return objectSortedByIngredient;
};

function getIngredientArray(arrayToReduce) {
	const ingredientCount = {};
	arrayToReduce.forEach(function (objectToReduce) {
		if (objectToReduce.ingredient === "") {
			return;	
		}
		objectToReduce.ingredient.split(" ").forEach(function (recipe) {
			if(recipe === "List") { return; }
			if (!ingredientCount[recipe]) {
				ingredientCount[recipe] = {};
				ingredientCount[recipe].value = 7;
				ingredientCount[recipe].name = recipe;
				ingredientCount[recipe].parent = "Origin";
				ingredientCount[recipe].href = "285609155383144226_38193-h-0.htm.xhtml#treemap" + recipe.toLowerCase();
				ingredientCount[recipe].class = "pginternal";


			} else {
				ingredientCount[recipe].value += 1;
			}
		});
	});

	let ingredients = [{
		name: "Origin",
		parent: "",
		value: "",
		ingredient: ""
	}];

	for (const property in ingredientCount) { 
		ingredients.push(ingredientCount[property]);
	};

	return ingredients;
}

// takes the id of the element it needs to insert the treemap into
function addTreemap(treemap_data, element_id) {
	if (treemap_data.length === 0) {
		return;
	}
	// stratify the data: reformatting for d3.js
	var root = d3
		.stratify()
		.id(function (d) {
			return d.name;
		}) // Name of the entity (column name is name in csv)
		.parentId(function (d) {
			return d.parent;
		})(
			// Name of the parent (column name is parent in csv)
			treemap_data
		);

	root.sum(function (d) {
		return +d.value;
	}); // Compute the numeric value for each entity

	// Then d3.treemap computes the position of each element of the hierarchy
	// The coordinates are added to the root object above
	let treemapLayout = d3.treemap().size([width, height]).padding(4);
	treemapLayout.tile(d3.treemapSquarify.ratio(1.3));
	treemapLayout(root);

	var treemap_header = element_id.split("_")[1] 
	if (treemap_header === "return") {
		treemap_header = "Table of Contents";
	}
	d3.select(element_id)
		.insert("h2", "a")
		.text(treemap_header);
	
	var svg = d3
		.select(element_id)
		.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
	
	var treemap =
		svg.append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	
	var rects = treemap.selectAll("rect")
		.data(root.leaves())
		.enter()
		.append("a")
		.attr("href", function (d) {
			return d.data.href;
		})
		.attr("class", function (d) {
			return d.data.class
		})
	
	rects
		.append("rect")
		.attr("x", function (d) {
			return d.x0;
		})
		.attr("y", function (d) {
			return d.y0;
		})
		.attr("width", function (d) {
			return d.x1 - d.x0;
		})
		.attr("height", function (d) {
			return d.y1 - d.y0;
		})
		.style("stroke", "black")
		.style("fill", function (d) {
			return "white";
		})
	
	treemap.selectAll("text")
		.data(root.leaves())
		.enter()
		.append("text")
		.attr("x", function (d) {
			return d.x0 + 5;
		}) // +5 to adjust position (more right)
		.attr("y", function (d) {
			return d.y0 + 20;
		}) // +20 to adjust position (lower)
		.attr("width", function (d) {
			return d.x1 - d.x0;
		})
		.attr("class", "wrapme")
		.attr("text-anchor", "start")
		.text(function (d) {
			return d.data.name;
		})
		.attr("font-size", "15px")
		.attr("fill", "black");
}

function wrap(text) {
    text.each(function() {
        var text = d3.select(this);
        var words = text.text().split(/\s+/).reverse();
        var lineHeight = 20;
        var width = parseFloat(text.attr('width'));
        var y = parseFloat(text.attr('y'));
        var x = text.attr('x');
        var anchor = text.attr('text-anchor');
    
        var tspan = text.text(null).append('tspan').attr('x', x).attr('y', y).attr('text-anchor', anchor);
        var lineNumber = 0;
        var line = [];
        var word = words.pop();

        while (word) {
            line.push(word);
            tspan.text(line.join(' '));
            if (tspan.node().getComputedTextLength() > width - 10) {
                lineNumber += 1;
                line.pop();
                tspan.text(line.join(' '));
                line = [word];
                tspan = text.append('tspan').attr('x', x).attr('y', y + lineNumber * lineHeight).attr('anchor', anchor).text(word);
            }
            word = words.pop();
        }
    });
}

var data = csvToArray(file2, ",");
var ingredientArray = getIngredientArray(data);
data = sortArrayByProperty(data);

// wait 2 seconds before running the rest of the code
// due to d3 for some reason loading later than the rest of the code causing error
setTimeout(function () { 

	// sort it into an object by ingredient
	addTreemap(ingredientArray, "#treemap_return")

	for (const property in data) {
		if (property === "List") { continue; }
		addTreemap(data[property], "#treemap_" + property);
	}
	// wrap text of all elements with class wrapme 
	d3.selectAll(".wrapme").call(wrap);

}, 2000);


