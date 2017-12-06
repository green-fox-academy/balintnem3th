from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a square drawing function that takes 1 parameter:
# the square size
# and draws a square of that size to the center of the canvas.
# draw 3 squares with that function.

def square(x):
    square = canvas.create_rectangle(150-x,150-x,150+x,150+x, fill="green")
square(30)
square(100)
square(100)

root.mainloop()