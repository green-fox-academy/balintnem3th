def factorial(number):
    factorial = 1
    if number == 1:
        factorial = 1
    else:
        for x in range(1,number+1):
            factorial *= x
    return factorial

print(factorial(0))
print(factorial(1))
print(factorial(2))
print(factorial(4))