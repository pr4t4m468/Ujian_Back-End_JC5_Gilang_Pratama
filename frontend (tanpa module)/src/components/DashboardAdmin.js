import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Nav from './Nav';

class DashboardAdmin extends Component {
    state = {
        dataN:[]
    }
    componentDidMount(){
        axios.get(`http://localhost:5000/ambildata`).then(
            (ambilData) => {
                console.log(ambilData.data);
                this.setState({
                    dataN: ambilData.data
                });
            }
        )
    }

    // componentWillMount(){
    //     axios.get(`http://localhost:5000/hapusdata`).then(
    //         (hapusData) => {
    //             this.setState({
    //                 hapusDataN:hapusData.data
    //             })
    //         }
    //     )
    // }

    hapusData = (e) => {
        axios.post('http://localhost:5000/hapusData',{
            id:e
        });
    }

  render() {
    const hasil = this.state.dataN.map((isi, urutan) => {
        var urut = urutan + 1;
        var IDNasabah = isi.id;
        var NamaNasabah = isi.nama;
        var EmailNasabah = isi.email;
        var AlamatNasabah = isi.alamat;
        var NoHPNasabah = isi.no_hp;
        var GenderNasabah = isi.gender;
        
        return  <tr key={urutan} style={{textAlign: 'center'}}>
                    <td>{urut}</td>
                    <td>{NamaNasabah}</td>
                    <td>{EmailNasabah}</td>
                    <td>{AlamatNasabah}</td>
                    <td>{NoHPNasabah}</td>
                    <td>{GenderNasabah}</td>
                    <td>
                        <Link to={{pathname: '/getdata/'+IDNasabah, state: {IDNasabah:IDNasabah}}} className="btn btn-warning"><i className="fa fa-pencil"></i> Edit</Link> &nbsp;
                        <button className="btn btn-danger" onClick={() => this.hapusData(IDNasabah)}>Delete</button>
                        {/* <Link to="/hapusdata/" type="button" onClick={() => this.hapusData(this)}className="btn btn-danger btn-md"><i className="fa fa-trash"></i> Delete</Link> */}
                    </td>
                </tr>
        });
    return (
        <div className="container">
        <Nav/>
        <table className="table table-light table-hover">
            <thead>
                <tr style={{backgroundColor: ''}}>
                    <th style={{textAlign: 'center'}}>Nomor</th>
                    <th style={{textAlign: 'center'}}>Nama</th>
                    <th style={{textAlign: 'center'}}>Email</th>
                    <th style={{textAlign: 'center'}}>Alamat</th>
                    <th style={{textAlign: 'center'}}>No. HP</th>
                    <th style={{textAlign: 'center'}}>Jenis Kelamin</th>
                    <th style={{textAlign: 'center'}}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {hasil}
            </tbody>
        </table>
    </div>
    )
  }
}

export default DashboardAdmin;
