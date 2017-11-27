magic_number = 8
quess = 0

while (quess != magic_number):
    quess = int(input("Take a quess"))
    if(quess < magic_number):
        print("Too low")
    else:
        print("Too high")

print("Your quess was correct:)")

