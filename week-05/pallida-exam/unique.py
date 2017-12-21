# Create a function called `unique_characters` that takes a string as parameter
# and returns a list with the unique letters of the given string
# Create basic unit tests for it with at least 3 different test cases
# Should print out:
# ["n", "g", "r", "m"]
def unique_characters(input_string):
    unique_list=[]
    for letter in input_string:
        if input_string.count(letter)>1:
            pass
        else:
            unique_list.append(letter)
    return unique_list

