from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# reproduce this:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]
def square(x):
    square = canvas.create_rectangle(x,x,(1.5*x),(1.5*x), fill="purple")
def square2(x):
    square = canvas.create_rectangle(1.5*x,1.5*x,(3*x),(3*x), fill="purple")
def square3(x):
    square = canvas.create_rectangle(3*x,3*x,(6*x),(6*x), fill="purple")
def square4(x):
    square = canvas.create_rectangle(6*x,6*x,(12*x),(12*x), fill="purple")
def square5(x):
    square = canvas.create_rectangle(12*x,12*x,(24*x),(24*x), fill="purple")
def square6(x):
    square = canvas.create_rectangle(24*x,24*x,(48*x),(48*x), fill="purple")


square(15)
square2(15)
square3(15)
square4(15)
square5(15)
square6(15)



root.mainloop()