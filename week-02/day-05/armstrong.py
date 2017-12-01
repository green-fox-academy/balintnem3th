def is_armstrong_number(number):

    length = len(str(number))
    container = []
    armstrong = False
    arm_number=0

    for x in str(number):
        container.append(x)

    for x in container:
        arm_number+=(int(x))**length

    if arm_number == number:
        armstrong = True
        print("The " + str(number) + ' is armstrong number')


is_armstrong_number(666)
is_armstrong_number(371)
is_armstrong_number(1634)