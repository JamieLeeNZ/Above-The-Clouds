import pandas as pd
from pymongo import MongoClient
from config import MONGO_URI

DB_NAME = "Japan"
COLLECTION_NAME = "Tokyo"

excel_file_path = "attractions_data.xlsx"
df = pd.read_excel(excel_file_path)

df['_id'] = df['Attraction'].astype(str) + '_' + df['Prefecture'].astype(str)

client = MongoClient(MONGO_URI)
db = client[DB_NAME]
collection = db[COLLECTION_NAME]

records = df.to_dict(orient='records')

collection.insert_many(records, ordered=False)

client.close()