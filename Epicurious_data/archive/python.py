import pandas as pd

# Adjust the path based on your directory structure
df = pd.read_csv('Epicurious_data/archive/epi_r.csv')

# Convert to JSON
df.to_json('epi_r.json', orient='records', lines=True)



