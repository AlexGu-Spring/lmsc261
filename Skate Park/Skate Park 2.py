import json

data = open("ramps.json")
ramps = json.load(data)

for k, v in ramps.items():
    print(f"{k}s favorite ramp is {v}")