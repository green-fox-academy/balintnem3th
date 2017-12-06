
from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()


vertical_line = canvas.create_line(150, 0, 150, 300, fill="green", width=3)
horizontal_line = canvas.create_line(0, 150, 300, 150, fill="red", width=3)
# draw a red horizontal line to the canvas' middle.
# draw a green vertical line to the canvas' middle.

root.mainloop()