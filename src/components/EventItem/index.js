import './index.css'

const EventItem = props => {
  const {eachItem, onClicking, isActive} = props
  const {id, imageUrl, name, location} = eachItem
  const eventImageClassName = isActive ? 'event-image active' : 'event-image'

  const onClickingEvent = () => {
    onClicking(id)
  }

  return (
    <li className="eventItem-container">
      <button type="button" className="event-button" onClick={onClickingEvent}>
        <img src={imageUrl} alt="event" className={eventImageClassName} />
      </button>
      <div>
        <p className="name">{name}</p>
        <p className="location">{location}</p>
      </div>
    </li>
  )
}

export default EventItem
