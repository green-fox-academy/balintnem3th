
from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

maxx = int(canvas['width'])
maxy = int(canvas['height'])

def rekt(topx, topy, botx, boty):
    if botx - topx <= 12:
        return
    xdif = botx - topx
    ydif = boty - topy
    canvas.create_rectangle(topx, topy, botx, boty, outline='black', fill='yellow')
    canvas.create_line(topx + xdif // 3, topy, topx + xdif // 3, boty, fill = 'black', width = 1)
    canvas.create_line(topx + (xdif // 3) * 2, topy, topx + (xdif // 3) * 2, boty, fill = 'black', width = 1)
    canvas.create_line(topx, topy + ydif // 3, botx, topy + ydif // 3, fill = 'black', width = 1)
    canvas.create_line(topx, topy + (ydif // 3) * 2, botx, topy + (ydif // 3) * 2, fill = 'black', width = 1)
    rekt(topx + xdif // 3, topy, topx + (xdif // 3) * 2, topy + ydif // 3) # top
    rekt(topx, topy + ydif // 3, topx + (xdif // 3), topy + (ydif // 3) * 2) # left
    rekt(topx + (xdif // 3) * 2, topy + ydif // 3, botx, topy + (ydif // 3) * 2) # right
    rekt(topx + xdif // 3, topy + (ydif // 3) * 2, topx + (xdif // 3) * 2, boty) # bot

rekt(0, 0, maxx, maxy)

root.mainloop()