input_list=[1, 11, 34, 11, 52, 61, 1, 34]
output: [1, 11, 34, 52, 61]

def unique(not_unique_list):
    out=[]
    for element in not_unique_list:

        if element not in out:
            out.append(element)
    print(out)

unique(input_list)  