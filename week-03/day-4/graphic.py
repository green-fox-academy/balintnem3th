from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300' )
canvas.pack()


def create_lines(n,z1,z2,z3,z4):
    if n > 5:
        line1 = canvas.create_line  (0, (z2/3),z3, (z4/3), fill="green", width=3)
        line2 = canvas.create_line  (0, (z2/3)*2,z3 , (z4/3)*2, fill="green", width=3)
        line3 = canvas.create_line  ((z1/3), 0, (z3/3), z4, fill="green", width=3)
        line4 = canvas.create_line  ((z1/3)*2, 0, (z3/3)*2, z4, fill="green", width=3)
        return create_lines(n-1,(z1/3),(z2/3),(z3/3),(z4/3)),create_lines(n-1,(z1/3),(z2/3),(z3/3),(z4/3))
    else:
        return 0



create_lines(100,300,300,300,300)
root.mainloop()