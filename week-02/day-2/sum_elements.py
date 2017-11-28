r = [54, 23, 66, 12]
abc=['a','b','c','d']

def sum_second_third(list):
    if len(list)>=3:
        total = list[1]+ list[2]
        print(total)
    else:
        print("The list doesnt have 3 elements")

sum_second_third(r)

sum_second_third(abc)