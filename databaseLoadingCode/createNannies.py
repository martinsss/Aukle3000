import urllib2
from random import randint

OPEN_BRACKET = "{"
CLOSED_BRACKET = "}"

f = open("desc.txt", 'r')
o = open("insertionCommands.txt", 'w')
names = open("names.txt", 'a')
description = f.read()[:-1]

o.write("db.collection('users').insertMany([")

for i in range(300):
	address = "r{}".format(randint(1,30))
	response = urllib2.urlopen('http://uza.lt/vardai/')
	html = response.read()
	start = html.find("<div class=\"moteriskas\">") + 24 + 4
	end = html.find("</div>", start) - 2
	name = html[start:end]
	names.write("{}\n".format(name))
	o.write("{} nameAndSurname: \"{}\", address: \"{}\", description: \"{}\" {},".format(OPEN_BRACKET, name, address, description, CLOSED_BRACKET))
o.write("]);")