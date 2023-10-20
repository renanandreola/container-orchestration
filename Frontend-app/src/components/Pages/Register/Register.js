import './Register.css'
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from '../../Layout/Header';
 
function Register() {
  const [formData, setFormData] = useState({
    email: '',
    note: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const createAccount = async (event) => {
    event.preventDefault();
    try {
      console.log("formData", formData);
      
      var data = {
        email: formData.email,
        note: formData.note
      }

      const response = await axios.post('http://localhost:3030/container-orchestration/note', data)
  
      console.log("response", response);

      if (response.data.status == 200) {
        alert("Nota cadastrada com sucesso!");
      } else {
        alert("Ops, ocorreu um erro ao cadastrar sua nota!");
      }
      
      setFormData({ 
        email: '',
        note: '',
      })
      
    } catch (error) {
      alert("Ops, ocorreu um erro!");

      setFormData({
        email: '',
        note: '',
      })
    }
  };

  return (
    <>
      <Header></Header>
      
      <div className='register'>
        <h1>Cadastre sua nota</h1>
        <form onSubmit={createAccount}>
            <div className="register-infos">
            <div className="row col-12 mt-5 d-flex justify-content-center">
                <div className="col-6">
                    {/* <label>E-mail</label> */}
                    <input type="email" name="email" value={formData.email} id="email" className="form-control" placeholder='E-mail' onChange={handleChange}/>
                </div>
            </div>

            <div className="row col-12 mt-5 d-flex justify-content-center">
                <div className="col-6">
                    {/* <label>Senha</label> */}
                    <input type="text" name="note" value={formData.note} id="note" className="form-control" placeholder='Nota' onChange={handleChange}/>
                </div>
            </div>
            
            <div className="d-flex justify-content-center mt-5 content-btn">
                <button type="submit" className="btn btn-success">
                Criar nota
                </button>
            </div>
            </div>
        </form>
      </div>
    </>
  );
}

export default Register;
