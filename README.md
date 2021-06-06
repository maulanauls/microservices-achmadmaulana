# microservices-achmadmaulana
BTPN jenius exam testing

  - git clone first
  - goto the directory after git clone the source code
  - try to install dependencies - npm install

  - for nodemon dev - npm run dev
  - for start - npm run start

  - * postman collection 
    - microservices_achmadmaulana.postman_collection.json -> load this file for get collection

  - generate token
    http://achmad-maulana.levlet.io/api/v1/generate-token

  - user
  * http://achmad-maulana.levlet.io/api/v1/user

  - create 
  * http://achmad-maulana.levlet.io/api/v1/register/user
    body: 
      - userName * mandatory required
      - accountNumber * mandatory required
      - emailAddress * mandatory required
      - identityNumber * mandatory required

  - update 
  * http://achmad-maulana.levlet.io/api/v1/user/update/:id
    params: 
      - id: id value
    body: 
      - userName 
      - accountNumber 
      - emailAddress 
      - identityNumber 

  - delete 
  * http://achmad-maulana.levlet.io/api/v1/user/delete/:id
    params: 
      - id: id value

  - getById 
  * http://achmad-maulana.levlet.io/api/v1/user/:id
    params: 
      - id: id value

  - getByAccountNumber
  * http://achmad-maulana.levlet.io/api/v1/user/account-number/:accountNumber
    params: 
      - accountNumber: accountNumber value

  - getByIdentityNumber
  * http://achmad-maulana.levlet.io/api/v1/user/account-number/:IdentityNumber
    params: 
      - IdentityNumber: IdentityNumber value