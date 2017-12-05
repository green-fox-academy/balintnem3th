import os

def decrypt(file_name):
    path = os.path.abspath(file_name)
    my_file = open(path,'r')
    text_list = []
    for lines in my_file:
        actual_line = my_file.readline()
        a = actual_line.split(" ") 
        text_list.append(a)
    text_list.reverse()
    for elements in text_list:
        for i in elements:
            print(i+ ' ',end ="")

decrypt("reversed_order.txt")