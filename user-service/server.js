const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const PORT = process.env.PORT || 4000;

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/v1/users', (req, res) => {
    const users =({
        data: [
            {
                id: 1,
                name: 'John Doe'
            },
            {
                id: 2,
                name: 'Jane Doe'
            }
        ]
    });

    return res.json(users);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
