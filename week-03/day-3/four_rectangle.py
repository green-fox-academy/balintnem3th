from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# draw four different size and color rectangles.
square = canvas.create_rectangle(100,100,120,120, fill="green")
square = canvas.create_rectangle(0,0,30,30, fill="red")
square = canvas.create_rectangle(120,120,180,180, fill="pink")
square = canvas.create_rectangle(110,110,190,190)


root.mainloop()