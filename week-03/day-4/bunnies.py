
# We have a number of bunnies and each bunny has two big floppy ears.
# We want to compute the total number of ears across all the bunnies 
# recursively (without loops or multiplication).

def floppy_counter(n):
    if n ==0:
        return 0
    else:
        return 2 + floppy_counter(n-1)

print(floppy_counter(10))
print(floppy_counter(5))
print(floppy_counter(1))
print(floppy_counter(0))

