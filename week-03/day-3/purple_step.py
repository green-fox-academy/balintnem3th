from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# reproduce this:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

def square(x):
    square = canvas.create_rectangle(x,x,x+8,x+8, fill="purple")


for x in range(20):
    square(x)



root.mainloop()