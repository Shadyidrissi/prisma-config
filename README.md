* install                    :
	npm install prisma @prisma/client

* init                       :
	npx prisma init

* add file .env and add on it DATABASE_URL=""

* edit on file schema.prisma :
	schema data
	conecction = mongodb , postgresql

* Push data we have a tow for mongoDB and postgreSQL :
 	FOR MONGODB    : npx prisma db push 
  	FOR POSTGRESQL : npx prisma migrate dev --name "any text"

* Generate Prisma            :
	npx prisma generate




* If you want check data by studio :
	npx prisma studio