import icone from '../../assets/img/icone.svg'
import './styles.css'

function SalesCard () {
    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
              <div className="dsmeta-form-control-container">
                <input className="dsmeta-form-control" type="text" />
              </div>
              <div className="dsmeta-form-control-container">
                <input className="dsmeta-form-control" type="text" />
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
                        <div className="dsmeta-red-btn">
                          <img src="icone.svg" alt="Notificar" />
                        </div>
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
                        <div className="dsmeta-red-btn">
                          <img src="icone.svg" alt="Notificar" />
                        </div>
                      </div>
                      </tr>
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
                        <div className="dsmeta-red-btn">
                          <img src="icone.svg" alt="Notificar" />
                        </div>
                      </div>
                      </tr>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    )
}

export default SalesCard