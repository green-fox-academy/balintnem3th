# Check if the list contains "7" if it contains print "Hoorray" otherwise print "Noooooo"

numbers = [1, 2, 3, 4, 5, 6, 8]
numbers1 = [1, 2, 3, 7, 5, 6, 8]
numbers2 = [1, 2, 3, 4, 5, 7, 8]

def check_7(list):
    van = False
    for x in list:
        #print(x)
        if x == 7:
            van = True
    if van == False:
        print("Noooooo")
    else:
        print("Hoorray")

check_7(numbers)
check_7(numbers1)
check_7(numbers2)
    
