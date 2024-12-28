import React from 'react';

interface ModalProps {
    handleSubmit: () => void;
    setName: (value: string) => void;
    setEmail?: (value: string) => void;
    setPhone?: (value: string) => void;
    setDescription?: (value: string) => void;
    setPrice?: (value: string) => void;
    children: React.ReactNode;
}

export function Modal({ handleSubmit, setName, setEmail, setPhone, setDescription, setPrice, children }: ModalProps) {
    return (
        <div>
            <input
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                className="form-input"
            />
            {setEmail && (
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                />
            )}
            {setPhone && (
                <input
                    type="tel"
                    placeholder="Phone"
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-input"
                />
            )}
            {setDescription && (
                <input
                    type="text"
                    placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-input"
                />
            )}
            {setPrice && (
                <input
                    type="text"
                    placeholder="Price"
                    onChange={(e) => setPrice(e.target.value)}
                    className="form-input"
                />
            )}
            <button onClick={handleSubmit} className="form-button">
                {children}
            </button>
        </div>
    );
}