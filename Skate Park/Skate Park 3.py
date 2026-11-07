import json

def check_age_experience(skaters):
		for skater in skaters: 
				name = skater["name"]
                age = skater["age"]
                is_experienced = skater["is_experienced"]
    
		    if (age >= 13 and is_experienced):
		      print(f"Hi {name}, welcome to the skate park!")

try:
    data = open("skaters.json")
    skaters = json.load(data)
    check_age_experience(skaters)

except FileNotFoundError:
    print("Cannot find file")