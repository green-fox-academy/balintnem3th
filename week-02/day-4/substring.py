text = "this is what I'm searching in"
text2 = "searching"

help_text = [text]

def help_tool(texts,texts2):
    booli = False
    index = 0
    texts=texts.split(' ') 
    for i in range(len(texts)):
        if texts[i] == texts2:
            index = i
            booli = True
            print(booli)
            print(texts[:index])
            print(i)
            break
    space = ' '
    counter=0
    print(len(space.join(texts[:index]))+1)  

help_tool(text,text2)
