import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase("reviews.db")

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "create table if not exists reviews (id integer primary key not null, title text not null, image text not null);", [],
                () => {
                    resolve()
                },
                (_, err) => {
                    reject(err)
                }
            )
        })
    })
    return promise
}

export const insertReview = (title, image) =>{
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx =>{
            tx.executeSql(
                "insert into reviews (title, image) VALUES (?, ?);",
                [title, image],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    })
    return promise 

}

export const fetchReviews = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx =>{
            tx.executeSql(
                "SELECT * FROM reviews;",
            
            [],
            (_, result) => resolve(result),
            (_, err) => reject(err)
            )
        })
    })
    return promise
}