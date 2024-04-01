import app from './configs/config.app'
import connect from './configs/config.mongoDb'

app.listen(process.env.PORT,  ()=>{
    console.log(`server is running at ${process.env.PORT}`)
    connect().then(() => {
        console.log("MongoDB connected")
    }).catch((err: any) => {
        console.log(err)
    });
})
