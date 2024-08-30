'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Page({ params }) {
    const { id } = params;
    const [items, setItems] = useState([]);
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassWord] = useState('');
    const router = useRouter();

    useEffect(() => {
        async function getUsers() {
            try {
                const res = await fetch(`http://localhost:3001/api/users/${id}`);
                if (!res.ok) {
                    console.error('Failed to fetch data');
                    return;
                }
                const data = await res.json();
                setItems(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        getUsers();
        const interval = setInterval(getUsers, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:3001/api/users/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ firstname, lastname, username, password }),
            });

            if(res.status === 500){
                router.push('/users')
            }

            const result = await res.json();
            console.log(result);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    console.log(items)
    return (
        <>
            <br /><br /><br />
            <div className="container">
                <div className="card">
                    <div className="card-header bg-success text-white">
                        Edit Form {id}
                    </div>
                    <div className="card-body">
                        <form className="row g-3" onSubmit={handleUpdateSubmit}>
                            <div className="col-md-6">
                                <label htmlFor="firstname" className="form-label">FirstName</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <i className="bi bi-person-vcard"></i>
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue={items[0]?.firstname}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="lastname" className="form-label">LastName</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <i className="bi bi-person-vcard-fill"></i>
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue={items[0]?.lastname}
                                        onChange={(e) => setLastName(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="username" className="form-label">Username</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <i className="bi bi-person-vcard"></i>
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue={items[0]?.username}
                                        onChange={(e) => setUserName(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="password" className="form-label">Password</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <i className="bi bi-person-vcard-fill"></i>
                                    </span>
                                    <input
                                        type="password"
                                        className="form-control"
                                        defaultValue={items[0]?.password}
                                        onChange={(e) => setPassWord(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-success">
                                    <i className="bi bi-box-arrow-right"></i> Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
