"use strict"

requirejs.config({
baseUrl: '../js',
paths: {
}
});

require(["fitImage", "fitText", "mousetrap.min", "fitMontage", "HatDraw"], function (fitImage, fitText, Mousetrap, fitMontage, HatDraw) {
	function draw() {
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.fillStyle = "yellow";
		var image = images[current];
		if (typeof image !== "undefined") {
			if (!hide) {
				if (!isZoomed) {
					if (tile) {
						fitMontage(context, images);
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

	function wheelHandler(ev) {
		zoom += .04 * Math.sign(ev.deltaY);
		if (zoom < .01) {
			zoom = .01
		}
		if (zoom > 1) {
			zoom = 1
		}
		console.log(zoom)
		if (isZoomed) {
			draw();
		} else {
			draw();
			context.strokeRect(
				ev.clientX - canvas.width * zoom/2,
				ev.clientY - canvas.height * zoom/2,
				canvas.width * zoom,
				canvas.height * zoom
			);
		}
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
	Mousetrap.bind("right", function () {
		current = (current + 1) % images.length;
		draw();
	});
	Mousetrap.bind("left", function () {
		current = (current - 1 + images.length) % images.length;
		draw();
	});
	Mousetrap.bind("s", function () {
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
	});
	Mousetrap.bind("r", function () {
		//current = Math.floor(Math.random() * images.length);
		current = hd.drawOne();
		draw();
	});
	Mousetrap.bind("w", function () {
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
	});
	Mousetrap.bind("h", function () {
		hide = !hide;
		draw();
	});
	Mousetrap.bind("t", function () {
		tile = !tile;
		draw();
	});



});
