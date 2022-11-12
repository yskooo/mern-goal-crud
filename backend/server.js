const path = require('path')
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 3000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

// static files (build of your frontend)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend', 'build')));
    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend', 'build', 'index.html'));
    })
}

// Serve frontend
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../frontend/build')))

//     app.get('*', (req, res) =>
//         res.sendFile(
//             path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
//         )
//     )
// }

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))




// i use "dotenv" package
// in your case must be located at "main > backend > .env"
// see the final file structure at bottom if you don't understand

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({ path: __dirname + '/.env' });
}


mongoose.connect(process.env.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,

        // remove poolSize or set according to your need
        // read docs before setting poolSize
        // default to 5
        poolSize: 1
    })
    .then(() => {
        app.listen(port);
    })

// all your routes should go here
app.use('/some-route', require(path.join(__dirname, 'api', 'routes', 'route.js')));

// static files (build of your frontend)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend', 'build')));
    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend', 'build', 'index.html'));
    })
}