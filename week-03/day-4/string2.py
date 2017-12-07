
# Given a string, compute recursively a new string where all the 'x' chars have been removed.

def string(x):
    if len(x) == 0:
        return ' '
    elif str(x[0]) == 'x':
        return  string(x[1:])
    else:
        return (x[0])+ string(x[1:])
    
print(string('asXcXsa'))
print(string('axaxaxa'))
print(string('XxXxXx'))
print(string(''))