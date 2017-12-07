
# Given base and n that are both 1 or more, compute recursively (no loops)
# the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

def power(base,n):
    if n == 1:
        return base
    else:
        return base* power(base,(n-1))

print(power(3,2))
print(power(4,3))
print(power(1,1))
print(power(2,10))

