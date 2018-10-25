import random


print ("_"*20,"Restaurant 'At  Python's'","_"*20)
print ("Please, type a list of the you favorite dishes ( comma separated ).")


dishes_string = input ("What would you like ?")

#dishes_list = []

dishes_list = dishes_string.split(',')


for w in dishes_list:
	r = str(random.randint(0, 60))
	t = 62-len(w)-len(r)
	print(w, '*' * t, r, 'min')
	









