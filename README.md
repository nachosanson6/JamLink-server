| API end Points example |              |                             |     |     |
| ---------------------- | ------------ | --------------------------- | --- | --- |
|                        |              |                             |     |     |
| User routes            |              |                             |     |     |
| Base URL / user        |              |                             |     |     |
| HTTP Method            | URI path     | Description                 |     |     |
| GET                    | /getAllUsers | All users list              |     |     |
| GET                    | /:id         | Matching ID user details    |     |     |
| PUT                    | /:id/edit    | Matching ID user edition    |     |     |
| DELETE                 | /:id/delete  | Matching ID user deletion   |     |     |
|                        |              |                             |     |     |
|                        |              |                             |     |     |
| Events routes          |              |                             |     |     |
| Base URL / events      |              |                             |     |     |
| HTTP Method            | URI path     | Description                 |     |     |
| GET                    | /getAllUsers | All events list             |     |     |
| POST                   | /saveEvent   | Create new event            |     |     |
| GET                    | /:id         | Matching ID events details  |     |     |
| PUT                    | /:id/edit    | Matching ID events edition  |     |     |
| DELETE                 | /:id/delete  | Matching ID events deletion |     |     |
|                        |              |                             |     |     |
|                        |              |                             |     |     |
| Auth routes            |              |                             |     |     |
| Base URL / auth        |              |                             |     |     |
| HTTP Method            | URI path     | Description                 |     |     |
| POST                   | /signup      | Signup user                 |     |     |
| POST                   | /login       | Login user                  |     |     |
| GET                    | /verify      | Verify Auth token           |     |     |
