import React, { useState, useEffect } from "react";

function MyData() {
    const [users, setUsers] = useState([]); // Initialize as an empty array
    const [error, setError] = useState(null);

    // Function to fetch data
    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost/pdc20/get_user.php', {
                method: 'GET',
                // headers: {
                //     'Content-Type': 'application/json',
                // },
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            const data = await response.json();
            setUsers(data); // Assuming the data is an array of users
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div style={{ padding: '15px' }}>
            <h1>User List</h1>

            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            {users.length > 0 ? (
                <table border={1} cellPadding={10}>
                    <thead> {/* Corrected to <thead> */}
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.ID}> {/* Corrected to use user.ID */}
                                <td>{user.ID}</td>
                                <td>{user.Name}</td>
                                <td>{user.Gender}</td>
                                <td>{user.Contact}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No users available.</p>
            )}
        </div>
    );
}

export default MyData;
