
def numb_adder(n):
    if n <=1 :
        return n
    else:
        return n + numb_adder(n-1)


a = numb_adder(5)
b = numb_adder(10)
c = numb_adder(1)
d = numb_adder(0)

print(str(a))
print(str(b))
print(str(c))
print(str(d))