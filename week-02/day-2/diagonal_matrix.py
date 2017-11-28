def diagonal_matrix(number):
    matrix = [[0]* number]*number
    for x in range(0,number-1):
        for y in range(0,number-1):
             if (x==y):
                matrix[x][y]=1
             else:
                matrix[x][y]=0
    print(matrix)



diagonal_matrix(5)
