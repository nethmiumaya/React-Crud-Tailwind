export function Modal(props) {
    return (
        <>
            <input type="text" placeholder='Name' onChange={(e) => props.setName(e.target.value)} className="form-input" />
            <input type="email" placeholder='Email' onChange={(e) => props.setEmail(e.target.value)} className="form-input" />
            <input type="tel" placeholder='Phone' onChange={(e) => props.setPhone(e.target.value)} className="form-input" />
            <button onClick={props.handleSubmit} className="form-button">{props.children}</button>
        </>
    );
}