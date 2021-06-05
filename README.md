# microservices-achmadmaulana
BTPN jenius exam testing

  - user
  * http://localhost:8000/api/v1/user

  - create 
  * http://localhost:8000/api/v1/register/user
    body: 
      - userName * mandatory required
      - accountNumber * mandatory required
      - emailAddress * mandatory required
      - identityNumber * mandatory required

  - update 
  * http://localhost:8000/api/v1/user/update/:id
    params: 
      - id: id value
    body: 
      - userName * mandatory required
      - accountNumber * mandatory required
      - emailAddress * mandatory required
      - identityNumber * mandatory required

  - delete 
  * http://localhost:8000/api/v1/user/delete/:id
    params: 
      - id: id value

  - getById 
  * http://localhost:8000/api/v1/user/:id
    params: 
      - id: id value

  - getByAccountNumber
  * http://localhost:8000/api/v1/user/account-number/:accountNumber
    params: 
      - accountNumber: accountNumber value

  - getByIdentityNumber
  * http://localhost:8000/api/v1/user/account-number/:IdentityNumber
    params: 
      - IdentityNumber: IdentityNumber value