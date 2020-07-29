import React from 'react'
import './index.css'
import mapIcon from './map.svg'
import arrow from './arrowOpen.svg'

const OpenedList = ({data}) => {
  const open = (e) => {
    window.location.href = "/2?id="+e.currentTarget.id
  }
  return (
    <table className="openedList">
      <thead>
        <td>
          <p className="openedListHead">Origin</p>
        </td>
        <td>
          <p className="openedListHead">Destination</p>
        </td>
        <td>
          <p className="openedListHead">Pick up Date/Time</p>
        </td>
        <td>
          <p className="openedListHead">Delivery Date/Time</p>
        </td>
        <td>
          <p className="openedListHead">Rate</p>
        </td>
        <td>
          <p className="openedListHead">Net benefit</p>
        </td>
      </thead>
      {
        data && data.map((item) => 
          <tr className="openTR" onClick={open} id={item.id}>
            <td>
              <p className="openedListText">{item.fields.origin_ob}</p>
            </td>
            <td>
              <p className="openedListText">{item.fields.destination_ob}</p>
            </td>
            <td>
              <p className="openedListText">{item.fields.pick_up_date_time_ob}</p>
            </td>
            <td>
              <p className="openedListText">{item.fields.delivery_date_time_ob}</p>
            </td>
            <td>
              <p className="openedListText">{item.fields.freight_rate}</p>
            </td>
            <td>
              <p className="greenText">${item.fields.benefit}</p>
            </td>
          </tr>
        )
      }
    </table>
  )
}

export default OpenedList
