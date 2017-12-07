# Given a string, compute recursively (no loops) a new string where all the
# lowercase 'x' chars have been changed to 'y' chars.

def string(x):
    if len(x) == 0:
        return ' '
    elif str(x[0]) == 'x':
        return 'y' + string(x[1:])
    else:
        return (x[0])+ string(x[1:])
    
print(string('asXcXsa'))
print(string('axaxaxa'))
print(string('XxXxXx'))
print(string(''))


