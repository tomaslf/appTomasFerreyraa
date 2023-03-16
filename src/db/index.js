import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase("reviewss.db")

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "create table if not exists reviewss (id integer primary key not null, title text not null, cityName text not null, image text not null);", [],
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

export const insertReview = (title, cityName, image) =>{
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx =>{
            tx.executeSql(
                "insert into reviewss (title, cityName, image) VALUES (?, ?, ?);",
                [title, cityName, image],
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
                "SELECT * FROM reviewss;",
            
            [],
            (_, result) => resolve(result),
            (_, err) => reject(err)
            )
        })
    })
    return promise
}

export const deleteReviews = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx =>{
            tx.executeSql(
                "DELETE FROM reviewss;",
            
            [],
            (_, result) => resolve(result),
            (_, err) => reject(err)
            )
        })
    })
    return promise
}
