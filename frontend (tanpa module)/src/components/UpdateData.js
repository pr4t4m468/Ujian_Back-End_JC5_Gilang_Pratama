import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav';

class UpdateData extends Component {
  state = {
      id: '',
      nama: '',
      email: '',
      alamat: '',
      no_hp: '',
      gender: ''
  }

//   Untuk munculin data yang mengandung id yg dituju di database
  componentDidMount(){
      var idS = this.props.location.state.id;
      axios.get('http://localhost:8002/getdata/'+idS).then(
          (nilai) => {
          console.log(nilai.data);
          this.setState({
                id: nilai.data[0].id,
                nama: nilai.data[0].nama,
                email: nilai.data[0].email,
                alamat: nilai.data[0].alamat,
                no_hp: nilai.data[0].no_hp,
                gender: nilai.data[0].gender
          });
          
      }
      );
  }
  
  value = (e) => {
    this.setState({
        id: e.idn.value,
        namaN: e.nama.value,
        emailN: e.email.value,
        alamatN: e.alamat.value,
        no_hpN: e.no_hp.value,
        genderN: e.gender.value
    })
  }

  render() {
    return (
        <div className="container">
            <form className="form-horizontal">
                <fieldset>
                    <legend>Edit Data</legend>
                    <input type="hidden" className="form-control" ref="idn" defaultValue={this.state.id}/>
                    <div className="form-group">
                    <label className="col-lg-2 control-label">Nama Lengkap</label>
                    <div className="col-lg-10">
                        <input ref="nama" type="text" className="form-control" defaultValue={this.state.nama} />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Email</label>
                    <div className="col-lg-10">
                        <input ref="email" type="text" className="form-control" defaultValue={this.state.email}/>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Alamat</label>
                    <div className="col-lg-10">
                        <input ref="alamat" type="text" className="form-control" defaultValue={this.state.alamat} />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Nomor HP</label>
                    <div className="col-lg-10">
                        <input ref="no_hp" type="text" className="form-control" defaultValue={this.state.no_hp}/>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Jenis Kelamin</label>
                    <div className="col-lg-10">
                        <input ref="gender" type="text" className="form-control" defaultValue={this.state.gender}/>
                    </div>
                </div>

                    <div className="form-group">
                        <div className="col-lg-10 col-lg-offset-2">
                            <button type="reset" className="btn btn-warning"><i className="fa fa-remove"></i> Cancel</button>&nbsp;
                            <button type="submit" onClick={() => this.value(this.refs)} className="btn btn-primary"><i className="fa fa-paper-plane"></i> Submit</button>
                            {/* <button type="button" onClick={() => this.updateData(this.refs)} className="btn btn-primary"><i className="fa fa-paper-plane"></i> Submit</button> */}
                        </div>
                    </div>

                </fieldset>
            </form>
        </div>
    )
  }
}
export default UpdateData;
