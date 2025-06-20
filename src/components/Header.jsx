import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  // Mock user data
  const user = {
    name: 'John Doe',
    department: 'Engineering',
    position: 'Software Engineer',
    role: 'admin'
  };
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Check screen size
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const handleLogout = () => {
    alert('You have been logged out.');
  };

  const handleSidebarToggle = () => {
    // This will be handled by the Sidebar component
    // We'll emit a custom event that the Sidebar can listen to
    window.dispatchEvent(new CustomEvent('toggleSidebar'));
  };

  const getRoleBadgeClass = (role) => {
    const badgeClasses = {
      admin: 'role-badge admin',
      manager: 'role-badge manager',
      employee: 'role-badge employee'
    };
    return badgeClasses[role] || 'role-badge';
  };

  const getCurrentTimeString = () => {
    return currentTime.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  return (
    <header className="header-container">
      <div className="header-content">
        {/* Logo and Title */}
        <div className="logo-section">
          <div className={`logo-icon ${isMobile ? 'sidebar-toggle' : ''}`} onClick={isMobile ? handleSidebarToggle : undefined}>
            {isMobile ? (
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            )}
          </div>
          <h1 className="logo-title">Employee Management</h1>
        </div>
        {/* User Info and Actions */}
        <div className="user-section">
          {/* Removed user-info section */}
          {/* Logout Button */}
          <button onClick={handleLogout} className="logout-btn">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 