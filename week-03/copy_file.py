import os


def copy(from_file,to_file):
    from_path = os.path.abspath(from_file)
    to_path = os.path.abspath(to_file)
    copy_from = open(from_path, "r")
    with open(to_path, 'w') as f:
        for line in copy_from:
            f.write(line.rstrip() + '\n')


copy("copy_from.txt","copy_to.txt")
    

    
    

  