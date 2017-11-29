# Check if list contains all of the following elements: 4,8,12,16
# Create a function that accepts list_of_numbers as an input
# it should return "True" if it contains all, otherwise "False"

list_of_numbers = [2, 4, 6, 8, 10, 12, 14, 16]
list_of_numbers1 = [2, 4,  8, 10, 12, 14, 16]
list_of_numbers2 = [2, 4, 6,  10, 12, 14, 16]
list_of_numbers3 = [1,1,1,1,11,2, 4, 6, 8, 10, 12, 14, 16]
def checker(list):
    negy = False
    nyolc = False
    tizenketto = False
    tizenhat = False
    for x in list:
        if x == 4:
            negy = True
        if x == 8:
            nyolc = True
        if x == 12:
            tizenketto = True
        if x == 16:
            tizenhat= True
    if negy and nyolc and tizenhat and tizenketto == True:
        #print("jo")
        return True
    else:
        #print("nem jo")
        return False

checker(list_of_numbers)
checker(list_of_numbers1)
checker(list_of_numbers2)
checker(list_of_numbers3)