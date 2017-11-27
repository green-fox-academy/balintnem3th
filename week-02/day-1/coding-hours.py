attendee = 6
semester = 17
workdays = 5

wholeSemester = semester * workdays
attendeeHour = wholeSemester * attendee
print("An attende code " + str(attendeeHour) + " hour  a semester")

avWork = 52
perc = attendeeHour / (avWork * 17)
print( "The percentage of the coding hours in the semester" + str(perc))
