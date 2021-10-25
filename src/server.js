import express from 'express'
import path from 'path'
const PORT = process.env.PORT || 5200
const app = express()
app.use(express.static(path.join(process.cwd(),'client')))
app.use(express.json())
app.get('/',(req,res)=> {
	res.send(path.join(process.cwd(),'client','index.html'))
})

app.get('/about',(req,res)=>res.send(path.join(process.cwd(),'client','about','index.html')))


app.listen(PORT,()=> console.log(PORT))