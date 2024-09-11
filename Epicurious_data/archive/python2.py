import pandas as pd

# Convert CSV to JSON with each record on a new line
df = pd.read_csv('Epicurious_data/archive/epi_r.csv')
df.to_json('epi_r.json', orient='records', lines=True)

# Read JSON file
try:
    data = pd.read_json('epi_r.json', lines=True)
except ValueError as e:
    print(f"Error reading JSON file: {e}")
    exit()

# Select the first 100 recipes
first_100_recipes = data.head(100)

# Save the first 100 recipes to a new JSON file
first_100_recipes.to_json('recipies.json', orient='records', lines=True)
