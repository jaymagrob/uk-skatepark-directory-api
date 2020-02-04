const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const SkatePark = require('../models/skateParks')
const User = require('../models/user')

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
  if (err) return console.log(err)
  db.dropDatabase()
    .then(() => {
      return User.create([
        {
          username: 'john',
          email: 'john@john',
          password: 'pass',
          passwordConfirmation: 'pass'
        },
        {
          username: 'paula',
          email: 'paula@paula',
          password: 'pass',
          passwordConfirmation: 'pass'
        }
      ])
    })
    .then(usersCreated => {
      console.log(usersCreated.length + ' 👶 users created')
      return SkatePark.create([
        {
          name: 'Acton Skatepark',
          region: 'London',
          image: 'https://www.skateparks.co.uk/wp-content/uploads/2018/11/Acton-Skatepark-1-1136x640.jpeg',
          cost: false,
          indoor: false,
          material: 'Concrete',
          detail: 'Acton Skatepark is a concrete skatepark in Acton Park. It features an open bowl and back-and-forth with plaza section.',
          locationLng: -0.2583982139087766,
          locationLat: 51.5085964013334,
          user: usersCreated[0]
        },
        {
          name: 'Southbank Skatepark',
          region: 'London',
          image: 'https://www.skateparks.co.uk/wp-content/uploads/2014/07/cover9.jpg',
          cost: false,
          indoor: false,
          material: 'wood',
          detail: 'add in later',
          locationLng: -0.1167361736543171,
          locationLat: 51.50674181316312,
          user: usersCreated[0]
        },
        {
          name: 'House of VANS Skatepark',
          region: 'London',
          image: 'https://www.skateparks.co.uk/wp-content/uploads/2014/07/House-of-Vans-Skatepark-1.jpg',
          cost: false,
          indoor: false,
          material: 'wood',
          detail: 'add in later',
          locationLng: -0.11366450789864757,
          locationLat: 51.50088360940698,
          user: usersCreated[0]
        },
        {
          name: 'Kennington Bowl Skatepark',
          region: 'London',
          image: 'https://www.skateparks.co.uk/wp-content/uploads/2014/07/cover2.jpg',
          cost: false,
          indoor: false,
          material: 'wood',
          detail: 'add in later',
          locationLng: -0.10863590247026877,
          locationLat: 51.485320852480584,
          user: usersCreated[0]
        },
        {
          name: 'White Grounds Skatepark',
          region: 'London',
          image: 'https://www.skateparks.co.uk/wp-content/uploads/2014/07/cover10.jpg',
          cost: false,
          indoor: false,
          material: 'wood',
          detail: 'add in later',
          locationLng: -0.07991252565614104,
          locationLat: 51.502011543290735,
          user: usersCreated[0]
        },
        {
          name: 'Hop Kingdom',
          region: 'London',
          image: 'https://www.skateparks.co.uk/wp-content/uploads/2018/11/Hop-Kingdom-Skatepark-1.jpg',
          cost: false,
          indoor: false,
          material: 'wood',
          detail: 'add in later',
          locationLng: -0.07921680000004017,
          locationLat: 51.5018531,
          user: usersCreated[0]
        },
        {
          name: 'Cantelowes Skatepark',
          region: 'London',
          image: 'https://www.skateparks.co.uk/wp-content/uploads/2014/07/2015-05-13-08.46.40.jpg',
          cost: false,
          indoor: false,
          material: 'wood',
          detail: 'add in later',
          locationLng: -0.1330246925681422,
          locationLat: 51.54636640663934,
          user: usersCreated[0]
        }     
      ])
      
    })
    .then(createdSkateParks => console.log(`${createdSkateParks.length} dinosaurs created `))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})


