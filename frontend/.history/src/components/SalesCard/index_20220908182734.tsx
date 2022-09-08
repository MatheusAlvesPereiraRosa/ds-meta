import Button from '../NotificationButton/index'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import './styles.css'
import { useState } from 'react'

function SalesCard () {
    const max = new Date()
    const min = new Date(new Date().setDate( new Date().getDate() - 365))

    const [maxDate, setMaxDate] = useState(min);
    const [minDate, setMinDate] = useState(max);

    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
              <div className="dsmeta-form-control-container">
                <DatePicker
                    selected={minDate}
                    onChange={(date: Date) => {}}
                    className="dsmeta-form-control"
                    dateFormat="dd/MM/yyyy"
                />
              </div>
              <div className="dsmeta-form-control-container">
                <DatePicker
                    selected={maxDate}
                    onChange={(date: Date) => {}}
                    className="dsmeta-form-control"
                    dateFormat="dd/MM/yyyy"
                />
              </div>
            </div>

            <div>
              <table className="dsmeta-sales-table">
                <thead>
                  <tr>
                    <th className="show992">ID</th>
                    <th className="show992">Vendedor</th>
                    <th className="show992">Visitas</th>
                    <th className="show576">Data</th>
                    <th>Vendedor</th>
                    <th>Total</th>
                    <th>Notificar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="show992">#342</td>
                    <td className="show992">Anakin</td>
                    <td className="show992">15</td>
                    <td className="show576">08/07/2022</td>
                    <td>Anakin</td>
                    <td>R$ 55300.00</td>
                    <td>
                      <div className="dsmeta-red-btn-container">
                        <Button />
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="show992">#343</td>
                    <td className="show992">Anakin</td>
                    <td className="show992">16</td>
                    <td className="show576">08/07/2022</td>
                    <td>Anakin</td>
                    <td>R$ 55300.00</td>
                    <td>
                      <div className="dsmeta-red-btn-container">
                        <Button />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="show992">#344</td>
                    <td className="show992">Anakin</td>
                    <td className="show992">17</td>
                    <td className="show576">08/07/2022</td>
                    <td>Anakin</td>
                    <td>R$ 55300.00</td>
                    <td>
                      <div className="dsmeta-red-btn-container">
                        <Button />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
    )
}

export default SalesCard