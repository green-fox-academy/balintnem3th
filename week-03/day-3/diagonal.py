from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

diagonal1 = canvas.create_line  (0, 0, 300, 300, fill="green", width=3)
diagonal2 = canvas.create_line  (0, 300, 300, 0, fill="red", width=3)
# draw the canvas' diagonals in green.

root.mainloop()