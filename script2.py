import json

input_file = 'D:/EpiRecipes/epi_r_updated.json'
output_file = 'D:/EpiRecipes/epi_r_fixed.json'

try:
    with open(input_file, 'r') as file:
        data = file.read()
        # Add the square brackets to make it a valid JSON array
        if not data.strip().startswith('['):
            data = f"[{data.strip()}]"
        
        # Fix extra commas or incorrect formatting here if needed

        # Write the fixed data to a new file
        with open(output_file, 'w') as outfile:
            outfile.write(data)
        print("JSON file has been fixed and saved as:", output_file)

except Exception as e:
    print(f"An error occurred: {e}")
