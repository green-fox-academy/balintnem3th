def read_and_count(filename):
    try:
        sum_line = 0
        my_file = open(filename, "r")
        for line in my_file:
            sum_line += 1
        print("Number of lines in "  + str(sum_line))
    except IOError:
        return 0

read_and_count("03.txt")
read_and_count("00.txt")