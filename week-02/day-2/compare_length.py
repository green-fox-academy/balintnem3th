p1 = [1, 2, 3]
p2 = [4, 5]

q1 = [1, 2]
q2 = [4, 5,6,7,8]

y1 = [['a','b','c','d']]
y2 = ['a','b','c','d','e','f','g']

def comp_print(list1,list2):
    if len(list2)>len(list1):
        for x in list2:
            print(x)


comp_print(p1,p2)

comp_print(q1,q2)

comp_print(y1,y2)