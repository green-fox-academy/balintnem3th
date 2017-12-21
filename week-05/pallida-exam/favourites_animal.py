import sys
import os



class lists_animals(object):

    def __init__(self):
        self._argument_list = sys.argv
        self._stored_data = 'favourites.txt'

    def list_all_the_animals(self):
        my_file = open(self._stored_data, "r+")
        if os.stat(self._stored_data).st_size == 0:
            print('No animals availabe! :)')
        else:
            for lines in my_file:
                for elements in lines:
                     print(elements,edn = '')
    
    def print_usage(self):
        print('fav_animals [animal] [animal]')

    def store_animals(self):
        animals = []
        for elements in range(1,len(self._argument_list)):
            if self._argument_list[elements] in animals:
                pass
            else:
                animals.append(self._argument_list[elements])
        my_file = open(self._stored_data, "r+")
        for animal in animals:
            my_file.write(str(animal)  + '\n')
        my_file.close()
        


list_animals = lists_animals()
if len(sys.argv) == 1:
    list_animals.print_usage()
else:
    list_animals.store_animals()