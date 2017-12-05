import os

def decrypt(file_name):
    path = os.path.abspath(file_name)
    my_file = open(path,'r')
    for lines in my_file:
        actual_line = my_file.readline()    
        a = actual_line.split() 
        print('\n')
        for x in a:
            print(end = " ")
            for y in x:
                print (chr(ord(y) -1) ,end = "")
            
decrypt("encoded_lines.txt")
