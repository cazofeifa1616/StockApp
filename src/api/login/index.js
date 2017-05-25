//import fetch from 'isomorphic-fetch'
import sampleUsers from '../../static/json/sample-users'

class UsersApi {
 static getUser(username, password) {
   /*
   Object.keys(sampleUsers)
   .filter(key => sampleUsers[key].username === username && sampleUsers[key].password === password)
   .map(key => sampleUsers[key].isAdmin)
   */
   console.log('params')
   console.log(username)
   console.log(password)
   for (var i in sampleUsers) {
     if (sampleUsers[i].username === username && sampleUsers[i].password === password) {
       console.log('data')
       console.log(sampleUsers[i].username)
       console.log(sampleUsers[i].password)
       if (sampleUsers[i].isAdmin) {
         return 2
       } else {
         return 1
       }
     }
   }
   return 0
 }
}

export default UsersApi
