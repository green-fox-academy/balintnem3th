helper=[]

def diagonal_matrix(number):
    for x in range(0,number):
        matrix = [0]* number
        for y in range(0,number):

            if y==x :
                matrix[y]=1
        
        helper.append(matrix)
    print(helper)
    



diagonal_matrix(5)
