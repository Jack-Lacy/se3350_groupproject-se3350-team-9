# 3350
Team GitHub Repo for the 3350 software project

## Things to still Consider

## Frontend
The web-app's frontend uses React.

## Backend/Server
The web-app's backend server uses Express.js and Mongoose to connect to the MongoDB Server. 

### Current Backend 
- Express
- Mongoose
- Concurrently

### Potiental Backend Additions
- GCP FileStore
    - The main use for this is to store the pdfs of past course outlines.
    More research is needed to fully understand if this is useful.
    We can store course outline metadata info in MongoDB:
        - Course Code
        - Year
        - Unique identifier?
            Might be needed depending on how FileStore works

- Python
    - If there is a need to do any data manipulation, it might be worth looking into using Python as it provides more data manipulation capabilities.



