
from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a square drawing function that takes 2 parameters:
# the square size, and the fill color,
# and draws a square of that size and color to the center of the canvas.
# create a loop that fills the canvas with rainbow colored squares.

def square(x,color):
    square = canvas.create_rectangle(150-x,150-x,150+x,150+x, fill=color)

max_size = 150
rainbow=["purple","blue","green","yellow","orange","red","black"]

for x in range(7):
    size = (max_size-x*10)
    square(size,rainbow[x])


root.mainloop()