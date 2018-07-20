const express = require('express');
const bodyParser = require('body-parser');
const database = require('mysql');
var koneksi = require('cors');
var app = express();

app.use(koneksi());

var db = database.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'usbw',
    database: 'bank',
    port: '3307'
});
db.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var port = 5000;

app.get('/', (req, res) => {
    var panggilData = 'SELECT * FROM  user';
    db.query(panggilData, (kaloError, hasilQuery) => {
        if(kaloError){
            throw kaloError;
        } else {
            res.send(hasilQuery);
        }
    });
});

app.post('/tambahdata', (req, res) => {
    var nama = req.body.inputNama;
    var email = req.body.inputEmail;
    var alamat = req.body.inputAlamat;
    var no_hp = req.body.inputNo_HP;
    var gender = req.body.inputGender;
    var sql = `INSERT INTO nasabah VALUES("${''}", "${nama}", "${email}", "${alamat}", "${no_hp}", "${gender}")`;
     db.query(sql, (kaloError, hasilnya) => {
         if(kaloError){
             throw kaloError;
         } else {
             res.end('Data berhasil disimpan');
         }
     });
 });

 app.get('/getdata/:id', (req, res) => {
    var grabData = `SELECT * FROM nasabah WHERE id = ${req.params.id}`;
    dbs.query(grabData, (err, hasilquery) => {
        if(err){
            throw err;
        } else {
            res.send(hasilquery);
        }
    })
});

app.get('/ambildata', (req, res) => {
    var panggilData = 'SELECT * FROM  nasabah';
    db.query(panggilData, (kaloError, hasilQuery) => {
        if(kaloError){
            throw kaloError;
        } else {
            res.send(hasilQuery);
        }
    });
});

app.get('/hapusData', (req, res) => {
    var id = req.body.id;
    var grabData = `DELETE FROM nasabah WHERE id = "${id}"`;
    db.query(grabData, (err, hasil) => {
        if (err) throw err;
        res.redirect('/');
    })
});

app.post('/login',(req,res)=>{
    var sql = 'SELECT * FROM user';
    db.query(sql,(err,hasil) => {
        if (err){
            throw err
        }else{
            var username = req.body.user; // ngambil nama variable dari axios
            var password = req.body.pwd;
            for(var i=0;i<hasil.length;i++){
                if (username == hasil[i].username_admin && password === hasil[i].password_admin){ // Username = nama kolom, username = variabel tampungan axios
                    var status ='oke';
                    res.send(status);
                    break;
                } else if(i === hasil.length-1){
                    res.send('gagal');
                }
            }
        }
    });
})

app.listen(port,()=>{
    console.log(`Server berjalan di port ${port}`);
})