# Given a string, compute recursively a new string where all the
# adjacent chars are now separated by a "*".

def string(x):
    if len(x)==0:
        return "invalid input"
    if len(x) ==1:
        return x[0]
    else:
        return (x[0])+ '*' +string(x[1:])

        
    
print(string('asXcXsa'))
print(string('axaxaxa'))
print(string('XxXxXx'))
print(string(''))

