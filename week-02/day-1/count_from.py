number1 = input("First number")
number2 = input("Second number")

if number2 <= number1:
    print("The second number should be bigger")
else:
    for i in range(int(number1), int(number2)):
        print(str(i))   
