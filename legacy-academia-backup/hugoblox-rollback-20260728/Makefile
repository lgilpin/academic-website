startServer:
	hugo server

compileSite:
	hugo

# don't use athena
copyToAthena:
	hugo; scp -r public/* lgilpin@athena.dialup.mit.edu:/afs/athena.mit.edu/user/r/a/lgilpin/www/

copyToCSAIL:
	hugo; scp -r public/* lgilpin@login.csail.mit.edu:/afs/csail.mit.edu/u/l/lgilpin/public_html

copyToCSAILFromSesame:
	hugo; sudo cp -r public/* /afs/csail.mit.edu/u/r/lgilpin/public_html

syncPdfs:
	cp ../presentations/overview/pres.pdf content/talk/martinos2019

addPub:
	hugo new --kind publication publication/dkt

addProj:
	hugo new  --kind project project/disease-progression

addTalk:
	hugo new  --kind talk talk/martinos2019
