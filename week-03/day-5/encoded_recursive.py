import os




def decrypt(file_name):
    path = os.path.abspath(file_name)
    my_file = open(path,'r')
    if os.stat("file").st_size == 0:
        return 0
        actual_line = my_file.readline()    
        a = actual_line.split() 
        print('\n')
    else:
        actual_line = my_file.readline()    
        a = actual_line.split() 
        for x in a:
            print(end = " ")
            for y in x:
                print (chr(ord(y) -1) ,end = "")
            
decrypt("encoded_lines.txt")