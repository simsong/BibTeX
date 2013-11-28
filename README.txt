This file is describing the bibtex mediawiki extension.
In itself it has several features :
- Direct parsing of a bibtex entry placed between <bibtex> and </bibtex>
  markups,
- ACM-like popup style to quickly copy-paste a bibtex reference,
- A limited but usefull emacs-like help mecanism to edit bibtex entries,
- A div popup demo (not IE compliant nor XHTML transitionnal).

The remaining file is organized as follows :
=========================================================================
1. Install/Files
2. Setup and configuration 
3. Use and online help mecanisms
4. How do I use this extension with mediawiki (hint : templates)
5. Credits and people who provided help 
=========================================================================

1. Install/Files
================

Just unpack the extension archive into the extensions directory of your
mediawiki root.
	tar -xvzf BibTex.tar.gz
If you want to use this extensions, edit the file LocalSettings.php located at
the root of your mediawiki and write down the line :
	require_once( "extensions/BibTex/bibtex.php");
Nice ! Your bibtex extension is working.

Several files are unpacked :
- bibtex.php : the main extension file,
- bibtex.css : containing css hacks for the divpopup demo,
- bibtex.js  : a javascript file containing a few functions,
- bibstyle.php : a file containing all the configuration variables of the
  extension.


2. Setup and configuration
==========================

Edit your bibstyle.php file. 
There are several things you can customize in it, starting with the language
you want to use (in this package it is french - don't worry, there are rough
translations in english).

Some of the other useful variables to know are :
$wbib_usejavascript which enables/disables javascript use in this extension,
$wbib_allowdivpopup which enables/disables the divpopup demo,
$wbib_allowbibpopup which enbales/disables the ACM-like popup,
$wbib_medianamespace giving the namespace of uploaded pdf or ps files on your
mediawiki

There are also two special variables :
$wbib_pdficon and $wbib_psicon : you should give for them the name of an image
file you uploaded on your mediawiki server. It allows to change these icons
later without having to use something else than a web browser. So do not
forget to put an image.


3. Use and online help mecanism
===============================

If you want to put a bibtex reference into the page you're editing, just put
it between <bibtex> and </bibtex> markups.

Personnally, I don't know every bibtex entry exact spelling nor the required
fields of them. So I implemented a help mecanism.
If in your edit you put only whitespaces between your bibtex markups and click
on the preview button, you will have a contextual help giving the names of
the entries you can enter. If javascript is enabled (default) you can click on
the entry type to display it in the edit textarea.

!!! Be careful ! It also delete everything else. this feature is useful if you
!!! only intent to put a single bibtex reference in the page.

If you put just a @type between your bibtex markups (where type is article,
book, etc ...), you will have the corresponding help related to this entry
type with the same javascript mecanism.

Once your entry is edited, you can save it. If you had specified the following
fields, some behavior will be added :
- the field pdf : you can put in it a pdf file uploaded in your mediawiki
  server (just the name without namespace - see bibstyle.php ). A link to this
  pdf will be automatically made using the icon you specified.
- the same mecanism applies for postscript files and the bibtex field named
  'ps'.
- the field url allows you to put an external reference to the article.

On the bottom of the reference, you have a 'bibtex' link.
If divpopup is enabled, then a div will appear with quite the same information
when you put the mouse over the link.
If bibpopup is enabled, then if you click on the link, an ACM-like popup will
appear containing the rawtext of the bibtex entry.


4. How do I use this extension with mediawiki
=============================================

Well, I admit I use it with templates. The aim is to put one reference per
page and then make links to it. It then allows to write the bibtex reference
once and to use it many times. Then I use these references using three
different templates :

4.1 Template:Bibtex

Here is its code :
<span id="{{{1}}}"> {{Bibtex/{{{1}}} }} </span>

As you can see, I use a id for my bibtex reference. 
Here they are on separate pages like this :
Template:Bibtex/Id 
The id is also used in the span markup to make references in a page.

4.2 Template:ref

Here is its code :
[{{SERVER}}{{localurl:{{PAGENAME}}}}#{{{1}}}]

It looks like an external link with numbers in brackets.
The aim is to make a reference in the text of the page using this model and
then put references at the bottom of the page using the template
Template:Bibtex

4.3 Template:refa

Here is its code :
[[Template:Bibtex/{{{1}}} | [{{{1}}}]]]

You can put it in your text. The link will go to the template page in which
your refernced your bibtex entry. According to the kind of key you generated,
you can have an apalike style in your written text.

Well, this is not the only way to use the bibtex extension but keep in mind
the extension was developped with this kind of scheme underneath.
It may be more appropriate to create a specific namespace called Bibtex and then
modify templates accordingly.

5. Credits and people who provided help
=======================================
I wish to thank :
- Vincent Le Ligeour for its divpopup demo,
- Aurélien Hazan as a beta tester of this extension,
- Kinh Tieu for developping and distributing the bibtex class without restriction.
  It was a great help.
- Louis-Philippe Morency who informed me about the status of the bibtex class
  developped by Kinh Tieu.


  Jean-Yves Didier -- Thu, Jul 27, 2006  

