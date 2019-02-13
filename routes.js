for user table routes

1 api / users / register
method: POST    Discription: register the user
required::: name, userName, password, confirm_password, email

2 api / users / login
method: POST    Discription: login the user
required::: email, password

3 api / users / get /: id
method: GET    Discription: get  the user
required: id

4 api / users / get /: id
method: PUT    Discription: update the user
required::: id

5  api / users / delete /:id
method: Delete   Discription: Delete a User
required: id

6 - api / users / me
method: get  Discription   authenticate the user


///////////////////
for Sport table routes

1 api / sports / add
method: POST    Discription: register the user
required::: s_name

2 api / sports / get /: id
method: GET    Discription: get  the sport
required: id

3 api / sports / update /: id
method: PUT    Discription: update the sport
required::: id

4  api / sports / delete /:id
method: Delete   Discription: Delete a delete a sport
required: id

/////////////


for Team table routes

1 api / teams / add
method: POST    Discription: register the user
required::: s_name

2 api / teams / get /: id
method: GET    Discription: get  the sport
required: id

3 api / teams / update /: id
method: PUT    Discription: update the sport
required::: id

4  api / teams / delete /:id
method: Delete   Discription: Delete a delete a sport
required: id


///////////////
