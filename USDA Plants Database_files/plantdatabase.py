
file = "USDA Plants Database_files/USDA Plants Database.htm"
def main():
    open(file, "rt")
    lineArray = []
    for line in file:
        lineArray.append(file.readline())
    print(line[0])
    file.close



main()