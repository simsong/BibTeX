/* Function to display bibtex reference in a ACM-like way */
function bibpopup(content)
{
	var generator=window.open('','name','height=250,width=700');
	  
	generator.document.write('<html><head><title>R&eacute;f&eacute;rence Bibtex</title>');
	generator.document.write('</head><body>');
	generator.document.write('<pre>');
	generator.document.write(content);
	generator.document.write('</pre>');
	generator.document.write('</body></html>');
	generator.document.close();
}

/* Function to put "entry form"  into textarea edit */
function bibfilltextarea(content)
{
	var text = "<bibtex>\n";
	var oldvalue = document.editform.wpTextbox1.value; 
	text += content;
	text += "</bibtex>\n";
	document.editform.wpTextbox1.value= text;
}


/* Function to display abstract */
function abstractpopup(content)
{
	var generator=window.open('','name','height=450,width=700');
	generator.document.write('<html><head><title>Abstract</title>');
	generator.document.write('</head><body><p>');
	generator.document.write(content);
	generator.document.write('</p></body></html>');
	generator.document.close();
}
