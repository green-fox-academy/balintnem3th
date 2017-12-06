from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# draw a green 10x10 square to the center of the canvas.
square = canvas.create_rectangle(140,140,160,160, fill="green")


root.mainloop()