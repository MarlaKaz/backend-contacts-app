import connection from  '../db.js';  //database

export const getCards = async (req, res) => {
    res.send('cards are here')
}

export const createCard = async (req, res) => {
    const ADD_QUERY = `insert into cards (cardname, cardaddress1, cardaddress2) values ('${req.body.cardname}', '${req.body.cardaddress1}', '${req.body.cardaddress2}');`
    connection.query(ADD_QUERY, (err) => {
        if(err) console.log(err)
        else res.send('card has been added')
    })
}

export const deleteCard = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}
