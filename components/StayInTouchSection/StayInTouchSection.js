

export default function StayInTouchSection() {
    return (
      <div className='StayInTouchSection-container'>
      <div className="stay-in-touch-section container">
        <div className="stay-in-touch-section-title">
            <h2>Stay In Touch</h2>
        </div>
        <div className="stay-in-touch-section-subtitle">
            <p>Are you curious about Pineapple Island? Send a message</p>
            <p>If you are interested in finding out more about The Discovery Village, leave a message</p>
        </div>
        <div className="form-container">
            <form action="">
                <div className="form-field">
                    <input type="text" placeholder="Name" />
                </div>
                <div className="form-field">
                    <input type="tel" placeholder="Phone No" />
                </div>
                <div className="form-field">
                    <input type="email" placeholder="Email" />
                </div>
                <div className="form-field">
                    <label className="textarea-label" htmlFor="textarea">Message</label>
                    <textarea placeholder="Message"></textarea>
                </div>
                <div className="form-field-button">
                    <button>Send</button>
                </div>
            </form>
        </div>
      </div>
      </div>
    )
  }
  