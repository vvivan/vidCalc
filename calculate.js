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
    
	noOfDiscs = videoMemTotalGB / discLength;
    noOfDiscsFull = Math.floor(noOfDiscs);
    restOfVideo = videoMemTotalGB - noOfDiscsFull * discLength;
    
    
//	document.getElementById("progresbar").style.display = "none";
	
	document.getElementById("report").innerHTML = "Disc length: " + discLength + " GB <br> Video Memory: " + videoMemory + " Mbps<br>Video time: " + videoTimeline + " min<br>Video time: " + videoTimelineSec + " sec<br>Video mem: " + videoMemTotalGB.toFixed(2) + " GB<br>Your video occupies " + mediaPercent.toFixed(2) + " % of the selected media <br>No of Discs: " + noOfDiscs.toFixed(2) + "<br>No of whole Discs: " + noOfDiscsFull + "<br>Rest of video: " + restOfVideo.toFixed(2) + " GB";
	
	
	createProgressBar(noOfDiscsFull);
	
	// prikaz progress bara
	/*document.getElementById("progresbar").style.display = "block"; 
	
	document.getElementById("progress").style.width = mediaPercent + "%";
	document.getElementById("label").style.textAlign = "center";
	document.getElementById("label").innerHTML = mediaPercent.toFixed(2) + "%";*/
	

	function createProgressBar(noDiscs){
		/////////////////////////////////
        //
		//kreiranje progressbara u JS
		//
		/////////////////////////////////
		
		if (document.getElementById("progressBox")) {
			var parCheck = document.getElementById("placeholder");
			var chCheck = document.getElementById("progressBox");
			parCheck.removeChild(chCheck);
		}
        var fullProgressBox[];
        var fullProgressBar[];
        var fullProgress[];
        var fullLabel[];
        
        var i;
        for (i=0; i < noDiscs; i++){
            
        /////////////////////////////////
        //
        //kreiranje progressbara u JS
        //
        /////////////////////////////////
        fullProgressBox[i] = document.createElement("div");
        fullProgressBox[i].setAttribute("class", "fullProgressBox";	document.getElementById("placeholder").appendChild(fullProgressBox[i]);

        fullProgressBar[i] = document.createElement("div");
        fullProgressBar[i].setAttribute("class", "fullProgresBar");	fullProgressBox[i].appendChild(fullprogressBar[i]);

        fullProgress[i] = document.createElement("div");
        fullProgress[i].setAttribute("class", "fullProgress");
        fullProgressBar[i].appendChild(fullProgress[i]);

        fullLabel[i] = document.createElement("div");
        fullLabel[i].setAttribute("class", "fullLabel");	
        fullProgress[i].appendChild(fullLabel[i]);

        var element = document.getElementById("placeholder");
        var child = document.getElementById("footer");
        element.insertBefore(progressBox,child);
            /////////////////////////////////
           
            
        }
        
         

        /*/////////////////////////////////
        //
        //kreiranje progressbara u JS
        //
        /////////////////////////////////
        var progressBox = document.createElement("div");
        progressBox.setAttribute("id", "progressBox");	document.getElementById("placeholder").appendChild(progressBox);

        var progressBar = document.createElement("div");
        progressBar.setAttribute("id", "progresbar");	document.getElementById("progressBox").appendChild(progressBar);

        var progress = document.createElement("div");
        progress.setAttribute("id", "progress");	document.getElementById("progresbar").appendChild(progress);

        var label = document.createElement("div");
        label.setAttribute("id", "label");	document.getElementById("progress").appendChild(label);

        var element = document.getElementById("placeholder");
        var child = document.getElementById("footer");
        element.insertBefore(progressBox,child);
        /////////////////////////////////
        
        document.getElementById("progresbar").style.display = "block"; 
	
        document.getElementById("progress").style.width = mediaPercent + "%";
        document.getElementById("label").style.textAlign = "center";
        document.getElementById("label").innerHTML = mediaPercent.toFixed(2) + "%";*/
        /* document.getElementById("progresbar").style.display = "block"; 
	
        document.getElementById("progress").style.width = "100%";
        document.getElementById("label").style.textAlign = "center";
        document.getElementById("label").innerHTML = "100%";*/
        
	}
	
}