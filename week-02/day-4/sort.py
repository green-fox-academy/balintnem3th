list1= [34, 12, 24, 9, 5]
#list1.sort()
#print(list1)
#print(list1[::-1])



def sort(input_list,descending):
    descend = descending

    for index in range(len(input_list)):

        minimum_index = index

        for index2 in range(index+1,len(input_list)):

            if list1[minimum_index] > list1[index2]:

                minimum_index = index2

        list1[index], list1[ minimum_index] = list1[ minimum_index], list1[index]
    
    if descend == True:
        list1.reverse()
    print(list1)

sort(list1,True)





