from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# draw a box that has different colored lines on each edge.

line1 = canvas.create_line(50, 50, 50, 250, fill="green", width=3)
line2 = canvas.create_line(50,50, 250, 50, fill="blue", width=3)
line3 = canvas.create_line(250, 50, 250, 250, fill="red", width=3)
line4 = canvas.create_line(250, 250, 50, 250, fill="pink", width=3)

root.mainloop()