import './index.css'

const BrowserHistory = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails
  const onDelete = () => {
    deleteHistory(id)
  }
  return (
    <>
      <li className="list-item">
        <div className="text-container">
          <p className="time-accessed">{timeAccessed}</p>
          <img src={logoUrl} alt="domain logo" className="domain-img" />
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
        <button type="button" data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            onClick={onDelete}
            className="delete-img"
          />
        </button>
      </li>
      <li className="mobile-list-item">
        <p className="time-accessed">{timeAccessed}</p>
        <div className="title-url-btn-container">
          <div className="text-container">
            <img src={logoUrl} alt="domain logo" className="domain-img" />
            <div className="title-url-container">
              <p className="title">{title}</p>
              <p className="domain-url">{domainUrl}</p>
            </div>
          </div>
          <button type="button" data-testid="delete">
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              onClick={onDelete}
              className="delete-img"
            />
          </button>
        </div>
      </li>
    </>
  )
}
export default BrowserHistory
