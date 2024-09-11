from opensearchpy import OpenSearch

# Configure the OpenSearch client
opensearch_client = OpenSearch(
    hosts=[{'host': 'localhost', 'port': 9200}],
    http_auth=None,
    use_ssl=False,
    verify_certs=False
)

def search_recipes(query, filters):
    # Build the search query
    search_body = {
        "size": 1000,
        "query": {
            "bool": {
                "must": [],
                "filter": []
            }
        }
    }
    
    # Add the title query if provided
    if query:
        search_body["query"]["bool"]["must"].append({"match": {"title": query}})
    
    # Add vegetarian filter
    if filters.get('vegetarian') == 'true':
        search_body["query"]["bool"]["filter"].append({"term": {"tags.vegetarian": True}})
    
    # Add non-vegetarian filter
    if filters.get('non_vegetarian') == 'true':
        search_body["query"]["bool"]["filter"].append({"term": {"tags.vegetarian": False}})
    
    # Add range filters only if they are provided
    range_filters = {
        'rating': 'rating',
        'calories': 'calories',
        'protein': 'protein',
        'fat': 'fat'
    }

    for param, field in range_filters.items():
        min_value = filters.get(f'{param}_min')
        max_value = filters.get(f'{param}_max')
        if min_value is not None or max_value is not None:
            range_filter = {"range": {field: {}}}
            if min_value is not None:
                range_filter["range"][field]["gte"] = float(min_value)
            if max_value is not None:
                range_filter["range"][field]["lte"] = float(max_value)
            search_body["query"]["bool"]["filter"].append(range_filter)

    # Print the search body for debugging
    print("Search Body:", search_body)

    try:
        response = opensearch_client.search(index="epi_recipes_", body=search_body)
        return response['hits']['hits']
    except Exception as e:
        print("Search Error:", e)  # Print error if search fails
        return []
