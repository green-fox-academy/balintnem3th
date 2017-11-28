ag = [3, 4, 5, 6, 7]

def doubling (list):
    for x in range(len(list)):
        list[x]*=2
    return list
        

doubling(ag)
print(ag)