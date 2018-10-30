a = 10
b = 10
d = 3

for i in range(a):
	row = ''
	for j in range(b):
		if i < d  or j < d or a - d  <= i or b - d <= j:
			s = '*   '
		else:
			s = '-   '
		row = row + s
	print(row)