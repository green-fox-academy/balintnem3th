
from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()



def bottom_eye_lash(z1,z2,z3,z4):
    center_line = canvas.create_line(z1,z2,z3,z4,fill="red")



for x in range(200):   
    z1 = x*10
    z2 = 300
    z3 = x/20
    z4 = x*8
    bottom_eye_lash(z1,z2,z3,z4)

def top_eye_lash(z1,z2,z3,z4):
    center_line = canvas.create_line(z1,z2,z3,z4,fill="blue")

for x in range(200): 
    z1 = 300-(x*8)
    z2 = 0
    z3 = 300-(x/20)
    z4 = 300-(x*8)
    bottom_eye_lash(z1,z2,z3,z4)




root.mainloop()