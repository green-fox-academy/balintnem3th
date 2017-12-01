def anagram(arg1,arg2):
   
    anagram = False
    para1 = list(arg1)
    para2 = list(arg2)
    sorted_para1 = sorted(para1,key=str.lower)
    sorted_para2 = sorted(para2,key=str.lower)

    if sorted_para1 == sorted_para2:
        anagram = True
            
    print(anagram)


        

        
anagram('efghjkl','lkjgfe')
anagram('poiuztr','rtzuiop')


