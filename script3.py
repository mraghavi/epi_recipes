import json

input_file = 'D:/EpiRecipes/epi_r_corrected.json'
output_file = 'D:/EpiRecipes/epi_r_bulk.json'

with open(input_file, 'r') as file:
    data = json.load(file)

with open(output_file, 'w') as file:
    for i, item in enumerate(data):
        # Write the metadata line
        file.write(json.dumps({"index": { "_index": "epi_recipes_", "_id": i+1 }}) + '\n')
        # Write the document
        file.write(json.dumps(item) + '\n')

print(f"Bulk data file created at: {output_file}")
