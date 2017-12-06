def josephus(number):
    
    ppl_list = [True]*number
    print(len(ppl_list))
    for index in range(len(ppl_list)):
        if index % 2 == 1:
            ppl_list[index] = False
    print(ppl_list)
    


josephus(41) 