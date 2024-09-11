from opensearchpy import OpenSearch

# Initialize the client
client = OpenSearch(
    hosts=[{'host': 'localhost', 'port': 9200}],
    http_auth=('admin', 'admin'),  # Update with your OpenSearch credentials
    use_ssl=False,
    verify_certs=False,
)

# Check if the connection is successful
info = client.info()
print(info)
