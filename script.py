import json

# Load JSON data from file with one JSON object per line
updated_data = []
with open('epi_r.json', 'r') as file:
    for line in file:
        try:
            item = json.loads(line)
            updated_data.append(item)
        except json.JSONDecodeError:
            print("Skipping invalid JSON line.")

# Prepare the updated data
transformed_data = []
for item in updated_data:
    tags = {
        "vegetarian": item.get("vegetarian", False),
        "gluten_free": item.get("gluten_free", False),
        "dairy_free": item.get("dairy_free", False),
        "quick": item.get("quick", False),
        "low_carb": item.get("low_carb", False),
        "high_protein": item.get("high_protein", False)
    }
    
    updated_item = {
        "title": item.get("title"),
        "rating": item.get("rating"),
        "calories": item.get("calories"),
        "protein": item.get("protein"),
        "fat": item.get("fat"),
        "sodium": item.get("sodium"),
        "tags": tags
    }
    transformed_data.append(updated_item)

# Save the updated JSON data
with open('epi_r_updated.json', 'w') as file:
    json.dump(transformed_data, file, indent=4)

print("Data updated successfully!")
