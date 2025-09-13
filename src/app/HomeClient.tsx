"use client";
import ProfileButton from "../components/auth/LogoutButton";
import Link from "next/link";

const containerStyle: React.CSSProperties = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  padding: '0',
};

const topSectionStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '1rem 1.5rem',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 10,
};

const titleStyle: React.CSSProperties = {
  fontSize: 'clamp(2.5rem, 8vw, 4rem)',
  fontWeight: 700,
  color: '#2d5016',
  margin: 0,
  letterSpacing: '3px',
};

const centerContentStyle: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: '520px',
  padding: '0 1.5rem',
};

const buttonStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#fff',
  border: '1px solid rgba(183, 228, 199, 0.3)',
  borderRadius: 20,
  padding: 'clamp(1.8rem, 5.5vw, 2.2rem)',
  fontSize: 'clamp(14px, 3.5vw, 16px)',
  fontWeight: 600,
  textDecoration: 'none',
  color: '#2d5016',
  boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.05)',
  transition: 'all 0.3s ease',
  width: 'clamp(140px, 20vw, 170px)',
  height: 'clamp(140px, 20vw, 170px)',
  textAlign: 'center',
  gap: '10px',
  position: 'relative',
};

const iconStyle: React.CSSProperties = {
  fontSize: 'clamp(28px, 8vw, 36px)',
  marginBottom: '6px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
};

const svgIconStyle: React.CSSProperties = {
  width: 'clamp(32px, 8vw, 40px)',
  height: 'clamp(32px, 8vw, 40px)',
  fill: '#52734d',
};

const logoContainerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
};

const logoStyle: React.CSSProperties = {
  width: 'clamp(40px, 10vw, 50px)',
  height: 'clamp(40px, 10vw, 50px)',
};

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: '1fr 1fr',
  gap: 'clamp(16px, 4vw, 24px)',
  width: '100%',
  justifyItems: 'center',
  alignItems: 'center',
};

export default function HomeClient() {
  return (
    <div style={containerStyle}>
      <div style={topSectionStyle}>
        <div style={logoContainerStyle}>
          <svg style={logoStyle} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="32" fill="#52734d"/>
            <path d="M32 12C35.5 12 38.5 15 38.5 18.5C38.5 22 35.5 25 32 25C28.5 25 25.5 22 25.5 18.5C25.5 15 28.5 12 32 12Z" fill="white"/>
            <path d="M20 28C20 26 21.5 24.5 23.5 24.5H40.5C42.5 24.5 44 26 44 28V50C44 51.1 43.1 52 42 52H22C20.9 52 20 51.1 20 50V28Z" fill="white"/>
            <g transform="translate(27, 15)">
              <path d="M10 3C11.5 3 12.8 3.8 13.5 5C14.2 3.8 15.5 3 17 3C19.2 3 21 4.8 21 7C21 7.5 20.9 8 20.7 8.4C21.5 9.1 22 10.1 22 11.2C22 13.4 20.2 15.2 18 15.2C17.3 15.2 16.7 15 16.1 14.6C15.5 15.4 14.6 16 13.5 16C12.4 16 11.5 15.4 10.9 14.6C10.3 15 9.7 15.2 9 15.2C6.8 15.2 5 13.4 5 11.2C5 10.1 5.5 9.1 6.3 8.4C6.1 8 6 7.5 6 7C6 4.8 7.8 3 10 3Z" fill="#52734d"/>
              <path d="M8 6C8.6 6 9 6.4 9 7C9 7.6 8.6 8 8 8C7.4 8 7 7.6 7 7C7 6.4 7.4 6 8 6Z" fill="white"/>
              <path d="M12 6C12.6 6 13 6.4 13 7C13 7.6 12.6 8 12 8C11.4 8 11 7.6 11 7C11 6.4 11.4 6 12 6Z" fill="white"/>
              <path d="M16 6C16.6 6 17 6.4 17 7C17 7.6 16.6 8 16 8C15.4 8 15 7.6 15 7C15 6.4 15.4 6 16 6Z" fill="white"/>
              <path d="M8 9C9 9 10 9.5 11 10C12 9.5 13 9 14 9" stroke="white" strokeWidth="0.8" fill="none"/>
              <path d="M9 11C10 11.5 11 12 12 12C13 12 14 11.5 15 11" stroke="white" strokeWidth="0.8" fill="none"/>
            </g>
            <path d="M32 35L30.5 33.7C27.2 30.7 25 28.7 25 26.2C25 24.2 26.6 22.5 28.5 22.5C29.6 22.5 30.6 23 31.2 23.8C31.8 23 32.8 22.5 34 22.5C35.9 22.5 37.5 24.2 37.5 26.2C37.5 28.7 35.3 30.7 32 33.7L32 35Z" fill="#52734d"/>
          </svg>
          <h1 style={titleStyle}>SIGI</h1>
        </div>
        <ProfileButton />
      </div>
      <div style={centerContentStyle}>
        <div style={gridStyle}>
          <Link 
            href="/screening" 
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.15), 0 6px 12px rgba(0, 0, 0, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(82, 115, 77, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.05)';
              e.currentTarget.style.borderColor = 'rgba(183, 228, 199, 0.3)';
            }}
          >
            <div style={iconStyle}>
              <svg style={svgIconStyle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 8C20.1046 8 21 8.89543 21 10V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V10C3 8.89543 3.89543 8 5 8H6V7C6 4.23858 8.23858 2 11 2H13C15.7614 2 18 4.23858 18 7V8H19ZM17 8V7C17 4.79086 15.2091 3 13 3H11C8.79086 3 7 4.79086 7 7V8H17ZM12 11C10.8954 11 10 11.8954 10 13C10 14.1046 10.8954 15 12 15C13.1046 15 14 14.1046 14 13C14 11.8954 13.1046 11 12 11Z" fill="currentColor"/>
                <circle cx="12" cy="8" r="2" fill="#ffffff"/>
              </svg>
            </div>
            <span>Screening</span>
          </Link>
          <Link 
            href="/hasil-tes" 
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.15), 0 6px 12px rgba(0, 0, 0, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(82, 115, 77, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.05)';
              e.currentTarget.style.borderColor = 'rgba(183, 228, 199, 0.3)';
            }}
          >
            <div style={iconStyle}>
              <svg style={svgIconStyle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2C7.44772 2 7 2.44772 7 3V4H6C4.89543 4 4 4.89543 4 6V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V6C20 4.89543 19.1046 4 18 4H17V3C17 2.44772 16.5523 2 16 2C15.4477 2 15 2.44772 15 3V4H9V3C9 2.44772 8.55228 2 8 2Z" fill="currentColor"/>
                <rect x="6" y="8" width="12" height="2" rx="1" fill="#ffffff"/>
                <rect x="6" y="12" width="12" height="2" rx="1" fill="#ffffff"/>
                <rect x="6" y="16" width="8" height="2" rx="1" fill="#ffffff"/>
              </svg>
            </div>
            <span>Hasil Tes</span>
          </Link>
          <Link 
            href="/edukasi" 
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.15), 0 6px 12px rgba(0, 0, 0, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(82, 115, 77, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.05)';
              e.currentTarget.style.borderColor = 'rgba(183, 228, 199, 0.3)';
            }}
          >
            <div style={iconStyle}>
              <svg style={svgIconStyle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 2C5.44772 2 5 2.44772 5 3V21C5 21.5523 5.44772 22 6 22H18C18.5523 22 19 21.5523 19 21V7.82843C19 7.56522 18.8946 7.31261 18.7071 7.12513L14.8749 3.29289C14.6874 3.10536 14.4348 3 14.1716 3H6Z" fill="currentColor"/>
                <rect x="7" y="8" width="6" height="1.5" rx="0.75" fill="#ffffff"/>
                <rect x="7" y="11" width="10" height="1.5" rx="0.75" fill="#ffffff"/>
                <rect x="7" y="14" width="10" height="1.5" rx="0.75" fill="#ffffff"/>
                <rect x="7" y="17" width="8" height="1.5" rx="0.75" fill="#ffffff"/>
              </svg>
            </div>
            <span>Edukasi</span>
          </Link>
          <Link 
            href="/konsultasi" 
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.15), 0 6px 12px rgba(0, 0, 0, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(82, 115, 77, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.05)';
              e.currentTarget.style.borderColor = 'rgba(183, 228, 199, 0.3)';
            }}
          >
            <div style={iconStyle}>
              <svg style={svgIconStyle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C13.1046 2 14 2.89543 14 4V5H16C17.1046 5 18 5.89543 18 7V19C18 20.1046 17.1046 21 16 21H8C6.89543 21 6 20.1046 6 19V7C6 5.89543 6.89543 5 8 5H10V4C10 2.89543 10.8954 2 12 2Z" fill="currentColor"/>
                <circle cx="9" cy="11" r="1.5" fill="#ffffff"/>
                <circle cx="15" cy="11" r="1.5" fill="#ffffff"/>
                <path d="M9 15C9 15 10.5 17 12 17C13.5 17 15 15 15 15" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span>Konsultasi</span>
          </Link>
        </div>
      </div>
    </div>
  );
}