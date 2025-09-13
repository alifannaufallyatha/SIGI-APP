export function isLoggedIn(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('isLoggedIn') === 'true';
}

export function logout() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('isLoggedIn');
  }
}
