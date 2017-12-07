# Given a non-negative int n, return the sum of its digits recursively (no loops). 
# Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
# divide (/) by 10 removes the rightmost digit (126 // 10 is 12).

def sum_digit(n):
    if n  <10:
        return n 
    else:
        return (n % 10) + sum_digit (n//10)


a = sum_digit(125)
b = sum_digit(666)
c = sum_digit(100001)
d = sum_digit(0)


print(a)
print(b)
print(c)
print(d)