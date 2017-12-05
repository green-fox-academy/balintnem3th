
try:
    file_name = "0222.txt"
    my_file = open(file_name, "w")
    my_file.write("Bálint")
except IOError:
    print("Unable to write file: my-file.txt")
