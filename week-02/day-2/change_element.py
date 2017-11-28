r = [1, 2, 3, 8, 5, 6]

def switch_third_to_four(list):
    if len(list)>=4:
        list[3] = 4 
        print(list)
        return list

switch_third_to_four(r)


