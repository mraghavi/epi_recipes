import json

def convert_to_boolean(value):
    return True if value == 1.0 else False

# Read the original data
with open('D:/EpiRecipes/epi_r_fixed.json', 'r') as file:
    data = json.load(file)

# Modify the data
for item in data:
    if 'tags' in item:
        tags = item['tags']
        for key in tags:
            if isinstance(tags[key], (float, int)):
                tags[key] = convert_to_boolean(tags[key])

# Write the modified data to a new file
with open('D:/EpiRecipes/epi_r_corrected.json', 'w') as file:
    json.dump(data, file, indent=4)
