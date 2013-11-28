RELEASE=0.9.2
FILES=ChangeLogs.txt Makefile README.txt bibstyle.php bibtex.css bibtex.js bibtex.php

release:
	/bin/rm -rf /tmp/Bibtex
	mkdir /tmp/Bibtex
	cp $(FILES) /tmp/Bibtex
	(cd /tmp;tar cfz Bibtex.tar.gz Bibtex)
	(cd /tmp;zip Bibtex.zip Bibtex/*)
	scp /tmp/Bibtex.tar.gz /tmp/Bibtex.zip www.simson.net:simson.net/src/


