for x in range(100):
    if((((x+1) % 3) == 0) &((((x+1) % 5)) == 0)):
        print("FizzBuzz")
    elif(((x+1) % 3) == 0):
        print("Fizz")
    elif((((x+1) % 5)) == 0):
        print("Buzz")   
    else:print(str(x+1))