

function addRow(){
	var a = document.getElementsByTagName("input")[0].value;
	var b = document.getElementsByTagName("input")[1].value;
	var c = document.getElementsByTagName("input")[2].value;
	
    var tbody = document.getElementsByClassName("table1")[0].getElementsByTagName("TBODY")[0];
    var row = document.createElement("TR");
	row.className+="row1";
	row.addEventListener('click',deleteRow);
    var td1 = document.createElement("TD");
	var td2 = document.createElement("TD");
	td1.className+="td1"
	td2.className+="td1"
	var d = b*b - 4*a*c;
	if(a==0){
		
		document.getElementsByTagName("input")[0].value="";		
		document.getElementsByTagName("input")[0].placeholder = "Коэффициент = 0!";
	}
	else if (d>=0){
	var x1 = (-b + Math.sqrt(d))/2*a;
	var x2 = (-b - Math.sqrt(d))/2*a;
    td1.appendChild(document.createTextNode(x1));
    td2.appendChild (document.createTextNode(x2));
		
    row.appendChild(td1);
    row.appendChild(td2);
    tbody.appendChild(row);
	}	
	else {
	td1.appendChild(document.createTextNode('Корней нет'));
    td2.appendChild (document.createTextNode('Корней нет'));
	
    row.appendChild(td1);
    row.appendChild(td2);
    tbody.appendChild(row);
	}
	
	
  }
  
function deleteRow(){
	
	console.log(this);
	var parentElem = this.parentNode;
	parentElem.removeChild(this);
}


