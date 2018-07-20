import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav';

class TambahData extends Component {
  tambahData = (e) => {
      axios.post(`http://localhost:5000/tambahdata`, {
          inputNama: e.nama.value,
          inputEmail: e.email.value,
          inputAlamat: e.alamat.value,
          inputNo_HP: e.no_hp.value,
          inputGender: e.gender.value
        });
    }
 
  render() {
    return (
      <div className="container">
      <Nav/>
        <form className="form-horizontal">
            <fieldset>
                <legend>Tambah Data</legend>
                <div className="form-group">
                    <label className="col-lg-2 control-label">Nama Lengkap</label>
                    <div className="col-lg-10">
                        <input ref="nama" type="text" className="form-control" />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Email</label>
                    <div className="col-lg-10">
                        <input ref="email" type="text" className="form-control" />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Alamat</label>
                    <div className="col-lg-10">
                        <input ref="alamat" type="text" className="form-control" />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Nomor HP</label>
                    <div className="col-lg-10">
                        <input ref="no_hp" type="text" className="form-control" />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Jenis Kelamin</label>
                    <div className="col-lg-10">
                        <input ref="gender" type="text" className="form-control" />
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-lg-10 col-lg-offset-2">
                        <button type="button" onClick={() => this.tambahData(this.refs)} className="btn btn-primary">Submit</button>
                    </div>
                </div>

            </fieldset>
        </form>
      </div>
    )
  }
}
export default TambahData;
