skateboard_colors = {}
skater = 0

while skater < 4:
    name = input(f"enter the name of skater {skater}: ")
    color = input("enter the skateboard color: ")

    skateboard_colors[name] = color
    skater += 1

print(skateboard_colors)