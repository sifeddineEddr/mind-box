import os
from dotenv import load_dotenv
import pymongo
from pymongo import MongoClient

load_dotenv()

cluster = MongoClient(os.getenv("MONGODB_URL"))

db = cluster["mind-box"]
