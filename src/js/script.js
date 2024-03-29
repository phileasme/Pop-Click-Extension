/**
* ©Copyrights, all rights reserved.
* @author: Phileas Hocquard 
* Injected script 
**/

/** Closes the Dialog **/
function closingBtnCollector() {
	document.getElementById('TheDialogBox').style.display = 'none';
	dialogBoxVisible = !dialogBoxVisible;
}

var dialogBoxVisible = false;
var btnaboxElements = document.getElementById('ButtonCollection');
var fortyEightPlusTen = []

if (btnaboxElements) {
	btnaboxElements = btnaboxElements.childNodes;
	fortyEightPlusTen = Array.apply(null, {length: btnaboxElements.length+1}).map(Number.call, function(x) { return x + 48; });
}

/**  Monitores Keyboard import for Dialog Open/Close State **/
var doubleShift = false;
function KeyPress(e) {
	var input = document.getElementById('AwesompleteInputfield');
  var evtobj = window.event? event : e
      //TODO Allow different evtobj.altKey or ctrl etc in menu switch..
      if (evtobj.keyCode == 80 && evtobj.altKey) {
      	document.getElementById('TheDialogBox').style.display = (dialogBoxVisible ) ?  'none' : '';
      	dialogBoxVisible = !dialogBoxVisible;
      }
      if(dialogBoxVisible && evtobj.keyCode == 16) {
      	if(input != document.activeElement) {
      		input.focus();
      		input.select();
      	}
       if(doubleShift){     
          closingBtnCollector();
          doubleShift = false;
       } else {
          doubleShift = true;
       }
      }else if(dialogBoxVisible ){
        doubleShift = false;
      }
      //Escape key
      if(evtobj.keyCode == 27 && dialogBoxVisible) {
      	closingBtnCollector();
      }
      if(fortyEightPlusTen.includes(evtobj.keyCode) && dialogBoxVisible && btnaboxElements && input != document.activeElement) {
      	document.getElementById("DialogBoxAnchor"+(evtobj.keyCode-48)).click();
      } 

    }		

    document.onkeydown = KeyPress;
