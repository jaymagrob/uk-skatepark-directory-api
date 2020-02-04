import React from 'react'
const WineForm = ({  data, handleChange, handleSubmit }) => {
  return (
    <div className="box">
      <div className="columns">
        <form onSubmit={handleSubmit} className="column is-half is-offset-one-quarter">
          <h2 className="title">Skate Park Submit</h2>
          <div className="field">
            <label className="label">Skate Park Name</label>
            <div className="control">
              <input 
                className="input"
                placeholder="Name"
                name="name"
                onChange={handleChange}
                value={data.name}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Skate Park Details</label>
            <div className="control">
              <textarea 
                className="textarea"
                placeholder="Detail"
                name="name"
                onChange={handleChange}
                value={data.name}
              ></textarea>
            </div>
          </div>

          <div className="field">
            <label className="label">Skate Park Image</label>
            <div className="control">
              <input 
                className="input"
                placeholder="Image"
                name="image"
                onChange={handleChange}
                value={data.name}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Location</label>
            <div className="field is-grouped is-grouped-centered">
              <p className="control">
                <a className="button is-primary">
    
                </a>
              </p>
              <p className="control">
                <a className="button is-light">
    
                </a>
              </p>
            </div>


          </div>

        
          <div className="control">
            <label className="label">Cost of Entry</label>
            <label className="radio"
              placeholder="Cost"
              name="cost"
              onChange={handleChange}
              value={data.name}>
              <input type="radio" name="cost" value='true'/>Paid</label>
            <label className="radio"
              placeholder="Cost"
              name="cost"
              onChange={handleChange}
              value={data.name}>
              <input type="radio" name="cost" value="false" />Free</label>
          </div>


          <div className="control">
            <label className="label">Material</label>
            <label className="radio"
              placeholder="Material"
              name="material"
              onChange={handleChange}
              value={data.name}>
              <input type="radio" name="material" value='Concrete'/>Concrete</label>
            <label className="radio"
              placeholder="Material"
              name="material"
              onChange={handleChange}
              value={data.name}>
              <input type="radio" name="material" value="Metal" />Metal</label>
            <label className="radio"
              placeholder="Material"
              name="material"
              onChange={handleChange}
              value={data.name}>
              <input type="radio" name="material" value="Wood" />Wood</label>
          </div>
          <div className="field">
            <label className="label">Region</label>
            <div className="select">
              <select name="region"
                className="select"
                placeholder="Region"
                onChange={handleChange}        
              >
                <optgroup label="England">
                  <option>Bedfordshire</option>
                  <option>Berkshire</option>
                  <option>Bristol</option>
                  <option>Buckinghamshire</option>
                  <option>Cambridgeshire</option>
                  <option>Cheshire</option>
                  <option>City of London</option>
                  <option>Cornwall</option>
                  <option>Cumbria</option>
                  <option>Derbyshire</option>
                  <option>Devon</option>
                  <option>Dorset</option>
                  <option>Durham</option>
                  <option>East Riding of Yorkshire</option>
                  <option>East Sussex</option>
                  <option>Essex</option>
                  <option>Gloucestershire</option>
                  <option>Greater London</option>
                  <option>Greater Manchester</option>
                  <option>Hampshire</option>
                  <option>Herefordshire</option>
                  <option>Hertfordshire</option>
                  <option>Isle of Wight</option>
                  <option>Kent</option>
                  <option>Lancashire</option>
                  <option>Leicestershire</option>
                  <option>Lincolnshire</option>
                  <option>Merseyside</option>
                  <option>Norfolk</option>
                  <option>North Yorkshire</option>
                  <option>Northamptonshire</option>
                  <option>Northumberland</option>
                  <option>Nottinghamshire</option>
                  <option>Oxfordshire</option>
                  <option>Rutland</option>
                  <option>Shropshire</option>
                  <option>Somerset</option>
                  <option>South Yorkshire</option>
                  <option>Staffordshire</option>
                  <option>Suffolk</option>
                  <option>Surrey</option>
                  <option>Tyne and Wear</option>
                  <option>Warwickshire</option>
                  <option>West Midlands</option>
                  <option>West Sussex</option>
                  <option>West Yorkshire</option>
                  <option>Wiltshire</option>
                  <option>Worcestershire</option>
                </optgroup>
                <optgroup label="Wales">
                  <option>Anglesey</option>
                  <option>Brecknockshire</option>
                  <option>Caernarfonshire</option>
                  <option>Carmarthenshire</option>
                  <option>Cardiganshire</option>
                  <option>Denbighshire</option>
                  <option>Flintshire</option>
                  <option>Glamorgan</option>
                  <option>Merioneth</option>
                  <option>Monmouthshire</option>
                  <option>Montgomeryshire</option>
                  <option>Pembrokeshire</option>
                  <option>Radnorshire</option>
                </optgroup>
                <optgroup label="Scotland">
                  <option>Aberdeenshire</option>
                  <option>Angus</option>
                  <option>Argyllshire</option>
                  <option>Ayrshire</option>
                  <option>Banffshire</option>
                  <option>Berwickshire</option>
                  <option>Buteshire</option>
                  <option>Cromartyshire</option>
                  <option>Caithness</option>
                  <option>Clackmannanshire</option>
                  <option>Dumfriesshire</option>
                  <option>Dunbartonshire</option>
                  <option>East Lothian</option>
                  <option>Fife</option>
                  <option>Inverness-shire</option>
                  <option>Kincardineshire</option>
                  <option>Kinross</option>
                  <option>Kirkcudbrightshire</option>
                  <option>Lanarkshire</option>
                  <option>Midlothian</option>
                  <option>Morayshire</option>
                  <option>Nairnshire</option>
                  <option>Orkney</option>
                  <option>Peeblesshire</option>
                  <option>Perthshire</option>
                  <option>Renfrewshire</option>
                  <option>Ross-shire</option>
                  <option>Roxburghshire</option>
                  <option>Selkirkshire</option>
                  <option>Shetland</option>
                  <option>Stirlingshire</option>
                  <option>Sutherland</option>
                  <option>West Lothian</option>
                  <option>Wigtownshire</option>
                </optgroup>
              </select>
            </div>
          </div>

       


          <div className="field">
            <button type="submit" className="button is-fullwidth is-danger">Submit my park</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default WineForm

