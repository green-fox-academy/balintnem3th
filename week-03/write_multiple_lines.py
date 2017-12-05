import os

def write_multiple_line(input_path,input_word,number):
    word = input_word + '\n'
    path = os.path.abspath(input_path)
    my_file = open(path, "w")
    for i in range(number):
        my_file.writelines(word)

write_multiple_line("05.txt","alma",2)

