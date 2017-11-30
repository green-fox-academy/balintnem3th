inpu = input('Please type in the expression:').split(" ")

operation = inpu[0]
number1 = inpu[1]
number2  = inpu[2]

result = 0
print(operation)    
print(number1)
print(number2)

if operation == '*':
    result = int(number1) * int(number2)
if operation == '/':
    result = int(number1) / int(number2)
if operation == '+':
    result = int(number1) + int(number2)
if operation == '-':
    result = int(number1) - int(number2)
if operation == '%':
    result = int(number1) % int(number2)



print(result)