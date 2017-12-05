
def divide_by_ten():
    try:
        input_number = int(input("Give a number:"))
        print(10/input_number)
    except ZeroDivisionError:
        print("Fail")
   

divide_by_ten()