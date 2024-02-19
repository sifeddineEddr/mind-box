from conn import db

books = db["books"]
books.insert_one({"ted":"fdsyhjkndf"})