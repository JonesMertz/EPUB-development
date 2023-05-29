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
}

function sortArrayByProperty(arrayToSort) {
	const objectSortedByIngredient = arrayToSort.reduce(function (objectByIngredient, objectToReduce) {
		if (objectToReduce.ingredient === "") {
			objectToReduce.ingredient = "Miscellaneous"
		};

		if (!Array.isArray(objectByIngredient[objectToReduce.ingredient])) {
			objectByIngredient[objectToReduce.ingredient] = [];
		} else {
			objectByIngredient[objectToReduce.ingredient].push(objectToReduce);
		}
		
		return objectByIngredient;
	}, {})

	return objectSortedByIngredient;
}

// set the dimensions and margins of the graph
var margin = { top: 10, right: 10, bottom: 10, left: 10 },
	width = 445 - margin.left - margin.right,
	height = 445 - margin.top - margin.bottom;

// takes the id of the element it needs to insert the treemap into
/* function addTreemap(treemap_data, element_id) {
	// stratify the data: reformatting for d3.js
	
	var treemap = d3
	.select(element_id)
	.append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	
	treemap.selectAll("rect")
	.data(root.leaves())
	.enter()
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
	});
	// .append("a").attr("href", "285609155383144226_38193-h-1.htm.xhtml#Cheese_Straws")
	// and to add the text labels
	treemap.selectAll("text")
		.data(root.leaves())
		.enter()
		.append("text")
		.attr("x", function (d) {
			return d.x0 + 10;
		}) // +10 to adjust position (more right)
		.attr("y", function (d) {
			return d.y0 + 20;
		}) // +20 to adjust position (lower)
		.text(function (d) {
			return d.data.name;
		})
		.attr("font-size", "15px")
		.attr("fill", "black");
} */

// append the svg object to the body of the page
var data = csvToArray(file, ",");

// sort it into an object by ingredient
//data = sortArrayByProperty(data);


var root = d3
	.stratify()
	.id(function (d) {
		return d.name;
	}) // Name of the entity (column name is name in csv)
	.parentId(function (d) {
		return d.parent;
	})(
	// Name of the parent (column name is parent in csv)
	data
);

root.sum(function (d) {
	return +d.value;
}); // Compute the numeric value for each entity

// Then d3.treemap computes the position of each element of the hierarchy
// The coordinates are added to the root object above
d3.treemap().size([width, height]).padding(4)(root);


for (const property in data) {
  //addTreemap(data[property], "#treemap_" + property);
}
//addTreemap(data, "#treemap1");

// Read data

// use this information to add rectangles:


