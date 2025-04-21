import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminHome = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [patients, setPatients] = useState([]);
  const [adminName, setAdminName] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle Logout
  const handleLogout = async () => {
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL ||
          import.meta.env.VITE_LOCAL_BACKEND_URL
        }/adminLogout`,
        {
          method: 'POST',
          credentials: 'include', // include session cookies
        }
      );

      if (response.ok) {
        // ✅ Clear sessionStorage on logout
        sessionStorage.removeItem('admin');

        // Redirect to admin login page
        navigate('/adminLogin');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  // Fetch Users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_BACKEND_URL ||
            import.meta.env.VITE_LOCAL_BACKEND_URL
          }/getAllUsers`
        );
        const data = await response.json();
        setUsers(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    // Fetch Patients
    const fetchPatients = async () => {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_BACKEND_URL ||
            import.meta.env.VITE_LOCAL_BACKEND_URL
          }/getAllPatients`
        );
        const data = await response.json();
        setPatients(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    const fetchAdmin = async () => {
      try {
        const backendURL =
          import.meta.env.VITE_BACKEND_URL ||
          import.meta.env.VITE_LOCAL_BACKEND_URL;

        const response = await fetch(`${backendURL}/getAdminDetails`, {
          method: 'GET',
          credentials: 'include',
        });

        if (!response.ok) {
          navigate('/adminLogin');
          return;
        }

        const data = await response.json();
        setAdminName(data.adminName);
      } catch (error) {
        console.error('Error fetching admin details:', error);
        navigate('/adminLogin');
      }
    };

    fetchUsers();
    fetchPatients();
    fetchAdmin();
  }, [navigate]);

  // Handle Delete User
  const handleDeleteUser = async id => {
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL ||
          import.meta.env.VITE_LOCAL_BACKEND_URL
        }/deleteUser/${id}`,
        {
          method: 'DELETE',
        }
      );

      if (response.ok) {
        setUsers(users.filter(user => user._id !== id));
      } else {
        console.error('Error deleting user:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  // Handle Delete Patient
  const handleDeletePatient = async id => {
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL ||
          import.meta.env.VITE_LOCAL_BACKEND_URL
        }/deletePatient/${id}`,
        {
          method: 'DELETE',
        }
      );

      if (response.ok) {
        setPatients(patients.filter(patient => patient._id !== id));
      } else {
        console.error('Error deleting patient:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting patient:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-[#eebc72] p-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Left: Dashboard Title */}
          <h1 className="text-white text-xl font-bold">Admin Dashboard</h1>

          {/* Hamburger Menu (Mobile) */}
          <button
            className="text-white md:hidden text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>

          {/* Desktop View: Admin Name & Logout Button */}
          <div className="hidden md:flex items-center gap-4">
            <p className="text-white text-lg">
              Welcome, {adminName || 'Admin'}
            </p>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600 transition">
              Logout
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center bg-[#FFDCA9] py-2">
            <p className="text-white text-lg">Welcome, {adminName}</p>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 mt-2 rounded hover:bg-red-600 transition">
              Logout
            </button>
          </div>
        )}
      </nav>

      {/* Content */}
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Registered Donors
        </h2>

        {/* Users Table */}
        <div className="bg-white shadow-lg p-6 rounded-lg overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Full Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Mobile</th>
                <th className="border p-2">Blood Group</th>
                <th className="border p-2">Agree Terms</th>
                <th className="border p-2">Donate Blood</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map(user => (
                  <tr
                    key={user._id}
                    className="text-center border">
                    <td className="border p-2">{user.fullName}</td>
                    <td className="border p-2">{user.email}</td>
                    <td className="border p-2">{user.mobile}</td>
                    <td className="border p-2">{user.bloodGroup}</td>
                    <td className="border p-2">
                      {user.agreeTerms ? 'Yes' : 'No'}
                    </td>
                    <td className="border p-2">
                      {user.donateBlood ? 'Yes' : 'No'}
                    </td>
                    <td className="border p-2 flex justify-center gap-2">
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        onClick={() => handleDeleteUser(user._id)}>
                        Delete
                      </button>
                      <a
                        href={`https://wa.me/91${user.mobile}`}
                        target="_blank"
                        rel="noopener noreferrer">
                        <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                          Contact
                        </button>
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="text-center p-4">
                    No users available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add New Patient Button */}
      <div className="flex justify-center">
        <button
          onClick={() => navigate('/patient')}
          className="w-1/5 bg-[#fdc46f] text-white py-2 rounded hover:bg-[#e0982b] transition duration-300 mb-6">
          Add New Patient
        </button>
      </div>

      {/* Patients Table */}
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Registered Patients
        </h2>

        <div className="bg-white shadow-lg p-6 rounded-lg overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Full Name</th>
                <th className="border p-2">Mobile</th>
                <th className="border p-2">Aadhar Card Number</th>
                <th className="border p-2">Blood Group</th>
                <th className="border p-2">Details (Why Blood is Required?)</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {patients.length > 0 ? (
                patients.map(patient => (
                  <tr key={patient._id}>
                    <td className="border p-2">{patient.fullName}</td>
                    <td className="border p-2">{patient.mobile}</td>
                    <td className="border p-2">{patient.aadhaar}</td>
                    <td className="border p-2">{patient.bloodGroup}</td>
                    <td className="border p-2">{patient.details}</td>
                    <td className="border p-2 flex justify-center gap-2">
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        onClick={() => handleDeletePatient(patient._id)}>
                        Delete
                      </button>
                    </td>
                    <td className="border p-2 flex justify-center gap-2">
                      <a
                        href={`https://wa.me/91${patient.mobile}`}
                        target="_blank"
                        rel="noopener noreferrer">
                        <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                          WhatsApp
                        </button>
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="8"
                    className="text-center p-4">
                    No patients available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
