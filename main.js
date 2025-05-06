"use strict"


import fitImage from "./js_modules/fitImage.mjs"
import fitText from "./js_modules/fitText.mjs"
import HatDraw from "./js_modules/HatDraw.mjs"

const SETS = {
	"Sad, Sick, Tired": [
		"sets/sad_sick_tired.png"
	],
	"Snow White! Are you OK?": [
		"sets/snow_white_00.jpg",
		"sets/snow_white_01.jpg",
		"sets/snow_white_02.jpg",
		"sets/snow_white_03.jpg",
		"sets/snow_white_04.jpg",
		"sets/snow_white_05.jpg",
		"sets/snow_white_06.jpg",
		"sets/snow_white_07.jpg",
		"sets/snow_white_08.jpg",
		"sets/snow_white_09.jpg",
		"sets/snow_white_10.jpg"
	],
	"Rain, Rain, Go Away": [
		"sets/rain_go_away_01_rain_go_away.jpg",
		"sets/rain_go_away_02a_sun_go_away.jpg",
		"sets/rain_go_away_02b_sun_go_away.jpg",
		"sets/rain_go_away_02_sun_go_away.jpg",
		"sets/rain_go_away_03a_clouds_go_away.jpg",
		"sets/rain_go_away_03b_clouds_go_away.jpg",
		"sets/rain_go_away_03_clouds_go_away.jpg",
		"sets/rain_go_away_04a_omg_rain.jpg",
		"sets/rain_go_away_04b_omg_rain.jpg",
		"sets/rain_go_away_04_omg_rain.jpg",
		"sets/rain_go_away_05_i_know_rain.jpg"
	],
	"Hey You!  Let's Play.": [
		"sets/lets_play_01.png",
		"sets/lets_play_02.png",
		"sets/lets_play_03.png",
		"sets/lets_play_04.png",
		"sets/lets_play_05.png",
		"sets/lets_play_08.png",
		"sets/lets_play_09.png",
		"sets/lets_play_10.png",
		"sets/lets_play_11.png",
		"sets/lets_play_12.png",
		"sets/lets_play_13.png"
	]
}

let ulSets = document.getElementById("image_sets");
Object.entries(SETS).forEach(function (s) {
	console.log(s);
	let li = document.createElement("li");
	li.innerHTML = s[0];
	li.addEventListener("click", function (ev) {
		let set = SETS[ev.target.innerHTML];
		set.forEach(function (src) {
			console.log(src);
			let img = document.createElement("img");
			img.addEventListener("load", function () {
				canvas.style.display = "block";
				draw();
			});
			console.log(images);
			img.src = src;
			images.push(img);
			previews.push(img.cloneNode(true));
		});
	});
	ulSets.appendChild(li);
});

function fitMontage(context, imgsArray, x, y, w, h, padding=0) {
	var canvas = context.canvas;

	if ( typeof x === "undefined" ){
		x = 0;
	}
	if ( typeof y === "undefined" ){
		y = 0;
	}
	if ( typeof w === "undefined" ){
		w = canvas.width;
	}
	if ( typeof h === "undefined" ){
		h = canvas.height;
	}

	//number of rows and columns that yields the squarest tiles with the least waste
	var wastes = [];
	for (var i=1; i<=imgsArray.length; i++) {
		var tileSize = Math.min(h / i, w / Math.floor(imgsArray.length / i));
		//var tileSize = h / i * imgsArray.length < w ? h / i : w / imgsArray.length;
		wastes.push(w * h - Math.pow(tileSize, 2) * imgsArray.length);
	}
	console.log(wastes);
	var rows = wastes.indexOf(Math.min(...wastes)) + 1;
	var cols = Math.ceil(imgsArray.length / rows);

	var tileWidth = w / cols;
	var tileHeight = h / rows;

	imgsArray.forEach(function (element, index, array) {
		//fitImg(context, element, tileWidth * (index % cols) + x, tileHeight * Math.floor(index / cols) + y, tileWidth, tileHeight);
		fitImage(context, element, tileWidth * (index % cols + padding/100) + x, tileHeight * (Math.floor(index / cols) + padding/100) + y, tileWidth*(100 - 2*padding)/100, tileHeight*(100 - 2*padding)/100);
	})
}

function draw() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.fillStyle = "yellow";
	var image = images[current];
	if (typeof image !== "undefined") {
		if (!hide) {
			if (!isZoomed) {
				if (tile) {
					fitMontage(context, images, 0, 0, canvas.width, canvas.height, 2);
				} else {
					fitImage(context, previews[current]);
					fitText(context, (current + 1) + "/" + images.length, 0, 0, 100, 50);
				}
			} else {
				var sub = getSub();
				fitImage(
					context, image,
					//subX, subY, subW, subH,
					sub.x, sub.y, sub.w, sub.h,
					0, 0, canvas.width, canvas.height
				);
			}
		}
	}
}

function getSub() {
	var image = images[current];
	var ix, iy, iw, ih;
	var subX, subY, subW, subH;
	if (image.width/image.height > canvas.width/canvas.height) { //wide image
		ix = 0;
		iw = canvas.width;
		ih = iw/image.width*image.height;
		iy = (canvas.height - ih)/2;
	} else { //tall image
		iy = 0;
		ih = canvas.height;
		iw = ih/image.height*image.width;
		ix = (canvas.width - iw)/2;
	}
	subX = (targetX - ix)*image.width/iw - zoom*canvas.width*image.width/iw/2;
	subY = (targetY - iy)*image.height/ih - zoom*canvas.height*image.height/ih/2;
	subW = zoom * canvas.width*image.width/iw;
	subH = zoom * canvas.height*image.height/ih;
	return {"x": subX, "y": subY, "w": subW, "h": subH};
}

function touchHandler(ev) {
	ev.preventDefault();
	var image = images[current];
	if (typeof image !== "undefined") {
		if (ev.type === "touchstart") {
			console.log("touchstart");
			if (!isZoomed) {
				if (ev.touches.length === 1) {
					console.log("first touch");
					targetX = ev.touches[0].clientX; targetY = ev.touches[0].clientY;
					isZoomed = true;
					draw()
				}
			} else {
				var now = performance.now();
				if (lastTouchAtTime === null) {
					lastTouchAtTime = now;
					console.log(lastTouchAtTime);
				} else {
					if ((now - lastTouchAtTime) < 400) {
						console.log("zoom reset");
						isZoomed = false;
						draw();
					} else {
						lastTouchAtTime = now;
					}
				}
			}
		} else if (ev.type === "touchmove") {
			console.log("touchmove");
			if (ev.touches.length === 1) {
				console.log("drag");
				targetX = ev.touches[0].clientX; targetY = ev.touches[0].clientY;
				draw();
			}
		} else if (ev.type === "touchend") {
			console.log("touchend");
			if (ev.touches.length === 0) {
				console.log("no more fingers");
			}
		}
	}
}


function mousedownHandler(ev) {
	clearTimeout(myTimeout);
	canvas.removeEventListener("mousemove", mousemoveHandler);
	isZoomed = true;
	draw();
}

function mouseupHandler(ev) {
	isZoomed = false;
	canvas.style.cursor = "";
	canvas.addEventListener("mousemove", mousemoveHandler);
	draw();
}


function mousemoveHandler(ev) {
	clearTimeout(myTimeout);
	isZoomed = false;
	targetX = ev.clientX; targetY = ev.clientY;
	if (typeof images[current] !== "undefined") {
		draw();
		context.strokeRect(
			ev.clientX - canvas.width * zoom/2,
			ev.clientY - canvas.height * zoom/2,
			canvas.width * zoom,
			canvas.height * zoom
		);
	}
	myTimeout = setTimeout(function () {draw();}, 200);
}

function zoomLevelIncrease() {
	zoom += .04;
	if (zoom > 1) {
		zoom = 1
	}
}

function zoomLevelDecrease() {
	zoom -= .04;
	if (zoom < .01) {
		zoom = .01
	}
}

function wheelHandler(ev) {
	if (ev.deltaY > 0) {
		zoomLevelIncrease();
	}
	if (ev.deltaY < 0) {
		zoomLevelDecrease();
	}
	draw();
	context.strokeRect(
		ev.clientX - canvas.width * zoom/2,
		ev.clientY - canvas.height * zoom/2,
		canvas.width * zoom,
		canvas.height * zoom
	);
}

document.addEventListener('contextmenu', event => event.preventDefault());

function dropHandler(ev) {
	console.log('File(s) dropped');

	// Prevent default behavior (Prevent file from being opened)
	ev.preventDefault();

	if (ev.dataTransfer.items) {
		// Use DataTransferItemList interface to access the file(s)
		for (var i = 0; i < ev.dataTransfer.items.length; i++) {
			// If dropped items aren't files, reject them
			if (ev.dataTransfer.items[i].kind === 'file') {
				var file = ev.dataTransfer.items[i].getAsFile();
				console.log(file);
				if (!file.type.startsWith('image/')){ continue }

				const img = document.createElement("img");
				img.classList.add("obj");
				img.file = file;
				img.onload = function () {
					loaded += 1;
					if (loaded == images.length) {
						previews = images.map(function (o) {
							var PVSIZE = 800;
							var preview = document.createElement("canvas");
							if (o.width > o.height) {
								preview.width = PVSIZE;
								preview.height = PVSIZE/o.width*o.height;
							} else {
								preview.height = PVSIZE;
								preview.width = PVSIZE/o.height*o.width;
							}
							var pvContext = preview.getContext("2d");
							fitImage(pvContext, o);
							return preview;
						});
						console.log(previews);
					}
				};
				images.push(img);
				let indexes = [];
				for (let i=0;i<images.length;i++) {
					indexes.push(i);
				}
				hd = new HatDraw(indexes);
				const reader = new FileReader();
				reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
				reader.readAsDataURL(file);
			}
		}
	} else {
		// Use DataTransfer interface to access the file(s)
		for (var i = 0; i < ev.dataTransfer.files.length; i++) {
			console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
		}
	}
}

function dragOverHandler(ev) {
	// Prevent default behavior (Prevent file from being opened)
	ev.preventDefault();
}

function handleFiles(files) {
	for (let i = 0; i < files.length; i++) {
		const file = files[i];

		if (!file.type.startsWith('image/')){ continue }

		const img = document.createElement("img");
		img.classList.add("obj");
		img.file = file;
		preview.appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.

		const reader = new FileReader();
		reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
		reader.readAsDataURL(file);
	}
}

var canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var context = canvas.getContext("2d");
var images = [];
var previews = [];
var loaded = 0;
var current = 0;
var targetX = 0, targetY = 0;
var zoom = .14;
var isZoomed = false;
var hide = false;
var tile = false;
var lastTouchAtTime = null;
var myTimeout = null;
var hd;


window.addEventListener("resize", function () {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	draw();
});
canvas.addEventListener("drop", dropHandler);
canvas.addEventListener("dragover", dragOverHandler);
canvas.addEventListener("mousedown", mousedownHandler);
canvas.addEventListener("mouseup", mouseupHandler);
canvas.addEventListener("mousemove", mousemoveHandler);
canvas.addEventListener("wheel", wheelHandler);
canvas.addEventListener("touchstart", touchHandler);
canvas.addEventListener("touchmove", touchHandler);
canvas.addEventListener("touchend", touchHandler);

window.addEventListener("keydown", function (ev) {
	let key = ev.key;
	console.log(key);
	if (key === "ArrowRight") {
		current = (current + 1) % images.length;
		draw();
	} else if (key === "ArrowLeft") {
		current = (current - 1 + images.length) % images.length;
		draw();
	} else if (key === "ArrowUp") {
		zoomLevelDecrease();
		draw();
		context.strokeRect(
			canvas.width/2-canvas.width/2*zoom,
			canvas.height/2-canvas.height/2*zoom,
			canvas.width * zoom,
			canvas.height * zoom
		);
	} else if (key === "ArrowDown") {
		zoomLevelIncrease();
		draw();
		context.strokeRect(
			canvas.width/2-canvas.width/2*zoom,
			canvas.height/2-canvas.height/2*zoom,
			canvas.width * zoom,
			canvas.height * zoom
		);
	} else if (key === "s") {
		//shuffle
		console.log("shuffle");
		var newOrder = [];
		var newPreviews = [];
		for (var i=0;i<=current;i++) {
			newOrder.push(images.shift());
			newPreviews.push(previews.shift());
		}
		while (images.length > 0) {
			var index = Math.floor(Math.random()*images.length);
			newOrder.push(images.splice(index, 1)[0]);
			newPreviews.push(previews.splice(index, 1)[0]);
		}
		console.log(newOrder);
		images = newOrder;
		previews = newPreviews;
		draw();
	//} else if (key === "r") {
	//	//current = Math.floor(Math.random() * images.length);
	//	current = hd.drawOne();
	//	draw();
	} else if (key === "w") {
		console.log("wizard");
		var wizard = document.createElement("img");
		wizard.onload = function () {
			images.push(wizard);
			previews.push(wizard);
			loaded += 1;
			draw();
		};
		wizard.src = "wizard.png";
		console.log(wizard);
	} else if (key === "h") {
		hide = !hide;
		draw();
	} else if (key === "t") {
		tile = !tile;
		draw();
	}
});
