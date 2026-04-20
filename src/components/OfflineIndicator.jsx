import useOnlineStatus from '../hooks/useOnlineStatus';

export default function OfflineIndicator() {
  const isOnline = useOnlineStatus();
  if (isOnline) return null;

  return (
    <div className="offline-indicator">
      You're offline. Some features may be limited.
    </div>
  );
}
