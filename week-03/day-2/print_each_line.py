file_name = "02222222.txt"

try:
    my_file = open(file_name, "r")
    for line in my_file:
        print(line.rstrip())
except IOError:
    print("Unable to read file: my-file.txt")
