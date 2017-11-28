abc = ["first", "second", "third"]
a = [1,2]
b=['a','b','c','d','e']
#abc[0],abc[2] = abc[2],abc[0]
#print(abc)

def swap_first_third(list):
    if len(list)<=2:
        print("not enough elements")
    else:
        list[0],list[2]=list[2],list[0]
        print(list)

swap_first_third(abc)
swap_first_third(a)
swap_first_third(b)