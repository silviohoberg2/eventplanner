function Notice({ type, children }) {
  return (
    <div className={`notice notice-${type}`}>   
      {children}
    </div>
  );
}

export default Notice;