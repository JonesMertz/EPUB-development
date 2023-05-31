// set the dimensions and margins of the graph
var margin = { top: 10, right: 10, bottom: 10, left: 10 },
	width = 445 - margin.left - margin.right,
	height = 565 - margin.top - margin.bottom;

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
			objectToReduce.ingredient = "Miscellaneous";

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
		console.log(objectToReduce)
		objectToReduce.ingredient.split(" ").forEach(function (recipe) {
			if(recipe === "List") { return; }
			if (!ingredientCount[recipe]) {
				ingredientCount[recipe] = {};
				ingredientCount[recipe].value = 7;
				ingredientCount[recipe].name = recipe;
				ingredientCount[recipe].parent = "Origin";
				ingredientCount[recipe].href = "285609155383144226_38193-h-0.htm.xhtml#treemap_" + recipe;
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
	console.log(treemap_data)
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
	console.log(d3)
	let treemapLayout = d3.treemap().size([width, height]).padding(4);
	treemapLayout.tile(d3.treemapSquarify.ratio(1.1));
	treemapLayout(root);

	d3.select(element_id)
		.append("h2")
		.text(element_id.split("_")[1]);
	
	var svg = d3
	.select(element_id)
	.append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
		.attr("page-break-before", "always")
	
	/* svg
  .append('defs')
  .append('pattern')
    .attr('id', 'diagonalHatch')
    .attr('patternUnits', 'userSpaceOnUse')
    .attr('width', 4)
    .attr('height', 4)
  .append('path')
    .attr('d', 'M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2')
    .attr('stroke', '#000000')
    .attr('stroke-width', 1); */

/* svg.append("rect")
      .attr("x", 0)
      .attr("width", 100)
      .attr("height", 100)
      .style("fill", 'yellow');

svg.append("rect")
    .attr("x", 0)
    .attr("width", 100)
    .attr("height", 100)
    .attr('fill', 'url(#diagonalHatch)'); */
	
	var treemap =
	svg.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	
	/* var treemap = d3
	.select(element_id)
	.append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.attr("page-break-before", "always")
	.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")"); */
	
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
	rects.append("rect")
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
	/* .on("click", function () {
		addTreemap(ingredientArray, "#treemap")
 		d3.event.stopPropagation();
	}); */
	rects.append("rect")
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
    .attr('fill', 'url(#diagonalHatch)');
	// .append("a").attr("href", "285609155383144226_38193-h-1.htm.xhtml#Cheese_Straws")
	// and to add the text labels
	treemap.selectAll("text")
		.data(root.leaves())
		.enter()
		.append("text")
		.attr("x", function (d) {
			return d.x0 + 5;
		}) // +10 to adjust position (more right)
		.attr("y", function (d) {
			return d.y0 + 20;
		}) // +20 to adjust position (lower)
		.text(function (d) {
			return d.data.name;
		})
		.attr("font-size", "15px")
		.attr("fill", "black");
}

function addPatternToRows() {
	var table = d3.select("#table");
	console.log(table);
	var rows = table.selectAll("tr")
	console.log(rows);
	var cells = rows.selectAll("td")
	console.log(cells);

	d3.selectAll("rect").attr("fill", "url(#diagonalHatch)");
}

var data = csvToArray(file2, ",");
var ingredientArray = getIngredientArray(data);
data = sortArrayByProperty(data);
setTimeout(function () { 
	// append the svg object to the body of the page
	//var ingredientArray = getIngredientArray(data);

	// sort it into an object by ingredient
	console.log("IngredientArray:")
	console.log(ingredientArray)
	addTreemap(ingredientArray, "#treemap")


	console.log(data);
	for (const property in data) {
		if (property === "List") { continue; }
		d3.select("#table_of_contents").append("div").attr("id", "treemap_" + property);
		addTreemap(data[property], "#treemap_" + property);
	}

}, 2000);


//addTreemap(data, "#treemap1");

// Read data

// use this information to add rectangles:


