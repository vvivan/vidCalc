function calculateDisc() {
	var discLength = parseFloat( document.getElementById("videocalculator").elements["media"].value);
	var videoMemory = parseFloat( document.getElementById("videocalculator").elements["bps"].value);
	var videoTimeline = parseFloat( document.getElementById("videocalculator").elements["videolength"].value);
	
	var videoTimelineSec = videoTimeline * 60;
	var videoMemTotal = videoMemory * videoTimelineSec;
	var videoMemTotalGB = videoMemTotal / (8*1024);
	var mediaPercent = videoMemTotalGB / discLength * 100;
    
    var noOfDiscs;
    var noOfDiscsFull;
    var restOfVideo;
	var restOfVideoPercent;
    
	noOfDiscs = videoMemTotalGB / discLength;
    noOfDiscsFull = Math.floor(noOfDiscs);
    restOfVideo = videoMemTotalGB - noOfDiscsFull * discLength;
	restOfVideoPercent = restOfVideo / discLength * 100;
	
    if (document.getElementById("progressBox")) {
			var parCheck = document.getElementById("placeholder");
			var chCheck = document.getElementById("progressBox");
			parCheck.removeChild(chCheck); 
	}

	document.getElementById("report").innerHTML = "Disc: " + discLength + " GB <br> Video bitrate: " + videoMemory + " Mbps<br>Video time: " + videoTimeline + " min<br>Video time: " + videoTimelineSec + " sec<br>Video total mem: " + videoMemTotalGB.toFixed(2) + " GB<br>Your video occupies " + mediaPercent.toFixed(2) + " % of the selected media<br>No of full Discs: " + noOfDiscsFull + "<br>Rest of video: " + restOfVideo.toFixed(2) + " GB";
	
	/////////////////////////////////
	//
	//kreiranje progressbara u JS
	//
	/////////////////////////////////
    
	var progressBox = document.createElement("div");
	progressBox.id = "progressBox";
	progressBox.innerHTML = '<h3>Disc report</h3>';
	document.getElementById("placeholder").appendChild(progressBox);
	
	//board = document.getElementById('elementi');
	board = document.getElementById('progressBox');
    fragment = document.createDocumentFragment();
	
    for (var i = 0; i < noOfDiscsFull; ++i) {
       	
		div = document.createElement('div');
        div.className = 'fullPBar';
		
		div2 = document.createElement('div');
		div2.className = 'fullProgress';
		div.appendChild(div2);
	
		div3 = document.createElement('div');
		div3.className = 'fullLabel';
		div3.innerHTML = '100%';
		div3.style.textAlign = 'center';
		div2.appendChild(div3);
		
        fragment.appendChild(div);
    
        }
	
	var progressBar = document.createElement("div");
	progressBar.setAttribute("id", "progresbar");	

	var progress = document.createElement("div");
	progress.id = "progress";
	progress.style.width = restOfVideoPercent + "%";
	progressBar.appendChild(progress);
	
	var label = document.createElement("div");
	label.id = "label";
	label.innerHTML = restOfVideoPercent.toFixed(2) + "%";
	label.style.textAlign = 'center';
	progress.appendChild(label);
   
	fragment.appendChild(progressBar);
	
	board.appendChild(fragment); // ubrizgavanje DocumentFragmenta u postojeci elemenat
	
	var element = document.getElementById("placeholder");
	var child = document.getElementById("footer");
	element.insertBefore(progressBox,child);
	/////////////////////////////////*/
}