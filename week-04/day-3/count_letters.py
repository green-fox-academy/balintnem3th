def count_letters(input_string):
    
    letter_dictionary = {}

    for x in input_string:
        if x in letter_dictionary :
            letter_dictionary[x]+=1
        else:
            letter_dictionary[x] =1

    return letter_dictionary


    

