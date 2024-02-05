import pandas as pd
from pymongo import MongoClient
from config import MONGO_URI

# MongoDB Settings
mongo_uri = MONGO_URI
database_name = "Japan"
collection_name = "Tokyo"

# Load data from Excel file
excel_file_path = "attractions.xlsx"
attractions_df = pd.read_excel(excel_file_path)
attractions_json = attractions_df.to_dict(orient='records')

# Connect to MongoDB
client = MongoClient(mongo_uri)
database = client[database_name]
collection = database[collection_name]

# Insert attractions into MongoDB
collection.insert_many(attractions_json)

# Close MongoDB connection
client.close()
print("Attractions inserted into MongoDB.")