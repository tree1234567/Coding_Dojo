import requests
print "The Original 151 Pokemon!"
count = 0
for num in range(1,152):
    URL = "http://pokeapi.co/api/v2/pokemon/"+str(num)+"/"
    r = requests.get(URL)
    jsonObj= r.json()
    count = count + 1
    print "Pokemon #", count, ": ",jsonObj["name"]
