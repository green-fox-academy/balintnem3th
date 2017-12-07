# Write a recursive function that takes one parameter: n and counts down from n.


def counter(n):
    if n <= 0:
        print(n)
        return 0
    else:
        print(n)
        return counter(n-1)

counter(0)