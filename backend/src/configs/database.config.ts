import {connect, ConnectOptions} from 'mongoose';

export const dbConnect = () => {
    const url = "mongodb://127.0.0.1:27017/foodapp"
    connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as ConnectOptions).then(
        () => console.log("connect successfully"),
        (error) => console.log(error)
    )
}