import './List.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../Layout/Header';

export default (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3030/container-orchestration/allNotes');
        console.log("response: ", response);
        setData(response.data.notes);
      } catch (error) {
        console.error('Erro:', error);
      }
    }

    if (data.length > 0) {
        return (
            <>
                <Header></Header>

                <h1>Notas cadastradas</h1>
            
                <div className='listing-tickers'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Nota</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(action => (
                            <tr key={action.email}>
                                <th scope="row">-</th>
                                <td>{action.email}</td>
                                <td>{action.note}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
             
            </>
        )
    } else {
        return (
            <>
            <Header></Header>

            <h1>Carregando notas...</h1>
            </>
        )
    }

}