
**EpiRecipes Search Platform: Full-Stack Application
Overview:**
The goal is to build a full-stack web application using Django (backend) and React (frontend), which indexes the EpiRecipes dataset into OpenSearch. The application will allow users to search and filter recipes by title, ratings, calories, and dietary preferences.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Step 1: Installing and Configuring OpenSearch**
**1.1 Install OpenSearch Using Docker**
Docker simplifies the management and configuration of OpenSearch clusters. You can pull official OpenSearch images from Docker Hub or Amazon Elastic Container Registry (ECR) and set up the cluster using Docker Compose.

Steps:
Download the official OpenSearch Docker images or sample Docker Compose files from the OpenSearch documentation.
Set a custom admin password. This is required starting with OpenSearch 2.12:

For Linux/macOS:
```
export OPENSEARCH_INITIAL_ADMIN_PASSWORD=<your-password>
```
For Windows Command Prompt:
```
set OPENSEARCH_INITIAL_ADMIN_PASSWORD=<your-password>
```
Alternatively, create an .env file in the same directory as your docker-compose.yml file and define the password:
```
OPENSEARCH_INITIAL_ADMIN_PASSWORD=<your-password>
```
Create a docker-compose.yml file to set up two OpenSearch nodes and one OpenSearch Dashboards node with Security Plugin disabled.
From the directory containing docker-compose.yml, run:
```
docker-compose up -d
```
Verify that the service containers are running correctly:
```
docker-compose ps
```
Check if OpenSearch and OpenSearch Dashboards are accessible:
OpenSearch: http://localhost:9200
Dashboards: http://localhost:5601

Check Cluster Health:
You can check the health of your OpenSearch cluster by running:
```
curl -X GET "http://localhost:9200/_cluster/health?pretty"
```
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Step 2: Creating and Managing OpenSearch Indices**
**2.1 Create an Index**
Once your OpenSearch cluster is running, you can create indices for your dataset.
Download the EpiRecipes dataset from Kaggle and convert it to JSON format. You can limit the number of recipes (e.g., first 100 recipes) for initial testing.
Define the index for your data. The following example sets up an index with mappings for various recipe properties:
```
PUT /epi_recipes
{
  "mappings": {
    "properties": {
      "title": { "type": "text" },
      "rating": { "type": "float" },
      "calories": { "type": "float" },
      "protein": { "type": "float" },
      "fat": { "type": "float" },
      "sodium": { "type": "float" },
      "tags": {
        "type": "object",
        "properties": {
          "vegetarian": { "type": "boolean" },
          "gluten_free": { "type": "boolean" },
          "dairy_free": { "type": "boolean" },
          "quick": { "type": "boolean" },
          "low_carb": { "type": "boolean" },
          "high_protein": { "type": "boolean" }
        }
      }
    }
  }
}
```
You can also use the curl command to check the index mappings:
```
curl -X GET "http://localhost:9200/epi_recipes/_mapping?pretty"
```
Search the index:
```
curl -X GET "http://localhost:9200/epi_recipes/_search?pretty"
```
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Step 3: Ingesting the Dataset into OpenSearch**
**3.1 Preparing Your Data**
Ensure the JSON file is formatted to match the index mappings. For instance, each recipe's tags should contain boolean fields for dietary preferences (e.g., vegetarian, gluten_free).

**3.2 Bulk Indexing Data**
Once the data is formatted, use OpenSearch's Bulk API to index the data.
First, install the Python OpenSearch client:
pip install opensearch-py
Use a Python script to generate a bulk indexing JSON file (e.g., epi_r_bulk.json):

Use the curl command to index the data:
```
curl -X POST "http://localhost:9200/_bulk" -H "Content-Type: application/json" --data-binary @path:/to/epi_r_bulk.json
```
**3.3 Verifying Data Upload**
After uploading the data, verify it using the OpenSearch Dashboard or via curl:
```
curl -X GET "http://localhost:9200/epi_recipes/_search?pretty"
```
**3.4 Example Queries:**
Retrieve recipes with a rating greater than 4:
```
curl -X GET "http://localhost:9200/epi_recipes/_search?pretty" -H "Content-Type: application/json" -d '{"query": {"range": {"rating": {"gt": 4}}}}'
```
Search for vegetarian recipes:
```
curl -X GET "http://localhost:9200/epi_recipes/_search?pretty" -H "Content-Type: application/json" -d "{\"query\": {\"term\": {\"tags.vegetarian\": true}}}"
```
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

***Step 4: Backend Development with Django**

**4.1 Set Up a Django Project**
Install Django:
```
pip install django
```
Create a new Django project:
```
django-admin startproject epirecipes_backend
```
Create a new app within the project:
```
python manage.py startapp recipes
```
Migrate the database and run the server:
```
python manage.py migrate
python manage.py runserver
```
**4.2 Creating API Endpoints**
Set up the necessary Django views, serializers, and URLs for handling search queries:
Endpoint: /api/search/
Method: GET
Query Parameters: q for title search, rating_min, rating_max etc.,

Test the endpoint using curl or Postman:
```
curl "http://127.0.0.1:8000/api/search/?q=pasta&page=1&size=10"
```
**4.3 Allow CORS**

To allow cross-origin requests from the React frontend, install and configure django-cors-headers:
```
pip install django-cors-headers
```
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Step 5: Frontend Development with React**

**5.1 Set Up a React Project**
Use Vite to create the React app:
```
npm create vite@latest
cd <your-project>
npm install
npm run dev
```
**5.2 Additional Libraries**
Install necessary libraries for icons, routing, and HTTP requests:
```
npm install axios react-router-dom
npm install @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons
npm install react-icons --save
```
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Video Link**
[Watch the video on YouTube](https://www.youtube.com/watch?v=ZdCSf1fG4tU)

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Conclusion**
By following these steps, you’ll have a full-stack web application that indexes the EpiRecipes dataset into OpenSearch. The Django backend will handle API requests and integrate with OpenSearch, while the React frontend provides users with an intuitive interface to search and filter recipes.
