import os

def decrypt(file_name):
    path = os.path.abspath(file_name)
    my_file = open(path,'r')
    for lines in my_file:
        actual_line = my_file.readline()    
        a = actual_line.split() 
        print('\n')
        for x in a:
            print(x[::2]+ ' ', end = "")
            
decrypt("duplicated_chars.txt")
