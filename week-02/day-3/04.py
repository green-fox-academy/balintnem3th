quote = "Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law."

def fixer(kvota):
    print(len(kvota))
    index = kvota.find('you')-1
    output_line = kvota[0:index] + ' always takes longer than ' +  kvota[index+1:len(kvota)]
    print(output_line)



fixer(quote)
