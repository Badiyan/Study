import random

print ("Restaurant 'At  Python's'".center(70,'_'))
print ("Please,type a list of the you favorite dishes (comma separated):")

dishes_string = input('What would you like? ')

def time():
	return random.randint(0,60)

#frozenset([print(dishes_string.split(',').str().ljust(65,'*'),time(),'min')])	
#(str(set(str(dishes_string.split(',')))).ljust(65,'*'),time(),'min')
#print((set([dishes_string for dishes in dishes_string.split(',')]))

for dishes in set(dishes_string.split(',')): print(dishes.ljust(65,'*'),time(),'min')

