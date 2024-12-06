import React, { useState, useEffect } from 'react';

const AddStudent = ({ addStudent, editStudent }) => {
    const [name, setName] = useState('');
    const [className, setClassName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    
    useEffect(() => {
        if (editStudent) {
            setName(editStudent.name);
            setClassName(editStudent.class);
            setPhone(editStudent.phone);
            setEmail(editStudent.email);
        } else {
            setName('');
            setClassName('');
            setPhone('');
            setEmail('');
        }
    }, [editStudent]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!name || !className || !phone || !email) {
            alert("Vui lòng điền đầy đủ thông tin!");
            return;
        }

        addStudent({ id: Date.now(), name, class: className, phone, email });
        
        // Reset form
        setName('');
        setClassName('');
        setPhone('');
        setEmail('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label>Họ tên:</label>
                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label>Lớp:</label>
                <input type="text" className="form-control" value={className} onChange={(e) => setClassName(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label>Số điện thoại:</label>
                <input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label>Email:</label>
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary">Thêm sinh viên</button>
        </form>
    );
};

export default AddStudent;