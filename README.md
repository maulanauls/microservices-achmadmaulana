# microservices-achmadmaulana
BTPN jenius exam testing

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
      - userName * mandatory required
      - accountNumber * mandatory required
      - emailAddress * mandatory required
      - identityNumber * mandatory required

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