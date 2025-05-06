import React from 'react';
const Layout = ({ children }) => {
    return (
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow p-4">My Blog</header>
        <main className="p-6">{children}</main>
        <footer className="bg-white shadow p-4 mt-10 text-center">
          © 2025 My Blog
        </footer>
      </div>
    );
  };
  
  export default Layout;
  