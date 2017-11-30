userInput = int(input("Number:"))


if userInput > 0:              # Prevents the computation of negative numbers
    for i in range(userInput):
        for s in range (userInput - i) :    # s is equivalent to to spaces
            print(" ", end="")
        for j in range((i * 2) - 1):
            print("*", end="")
        print()
    for i in range(userInput, 0, -1):
        for s in range (userInput - i) :
            print(" ", end="")
        for j in range((i * 2) - 1):
            print("*", end="")
        print()