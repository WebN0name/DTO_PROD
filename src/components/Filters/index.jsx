import React from 'react'
import './index.css'
import closeIcon from './close.svg'
import arrow from './arrowOpen.svg'

import Select from '../Select'
import Checkbox from '../Checkbox'

const Filters = ({changeFilter, apply, reset}) => {
  return (
    <div className="filters">
      <img
        className="closeFilters"
        src={closeIcon}
        alt="closeIcon"
        onClick={() => {
          document.getElementById("filters").style.display = 'none'
        }}
      />
      <div className="containerFilter">
        <h1 className="title">FILTER FOR RECS</h1>
        <p className="secondaryFilter">Please select the necessary filters to view recommendations</p>
        <div className="filterView" style={{ marginTop: 30 }}>
          <h1 className="filterTitle">The brewery location</h1>
          <img
            className="arrowFilter"
            src={arrow}
            alt="arrrow"
          />
        </div>
        <div className="filterView">
          <Select
            change={changeFilter}
            name="state"
            top="State"
            options={['ALL', 'HTN','MERR','STL/GRAN','NWK']}
          />
        </div>
        <hr className="separator" />
        <div className="filterView">
          <h1 className="filterTitle">Advanced filters</h1>
          <img
            className="arrowFilter"
            src={arrow}
            alt="arrrow"
          />
        </div>
        <div className="filterView">
          <Select
            change={changeFilter}
            name="radius"
            top="Radius Distance, miles"
            options={['ALL', '<75','75-200','>200']}
          />
        </div>
        <div className="filterView">
          <Select
            change={changeFilter}
            name="type"
            top="Equipment Type"
            options={['ALL', 'VAN (V)','VAN (VR)']}
          />
        </div>
        <div className="filterViewCheckbox">
          <Checkbox
            change={changeFilter}
            name="PASSED"
            label="Passed"
          />
        </div>
        <div className="filterViewCheckbox">
          <Checkbox
            change={changeFilter}
            name="BOOKED"
            label="Booked"
          />
        </div>
        <div className="filterViewCheckbox">
          <Checkbox
            change={changeFilter}
            name="CONFIRMED"
            label="Confirmed"
          />
        </div>
        <hr className="separator" />
        <div className="filterView">
          <button onClick={apply} className="green-btn" style={{
            marginTop: 20
          }}>APPLY</button>
        </div>
        <div className="filterView">
          <a className="reset" href="#" onClick={reset}>Reset</a>
        </div>
      </div>
    </div>
  )
}

export default Filters
