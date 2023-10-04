import { XCircleIcon } from '@heroicons/react/20/solid';

const Alert = ({ alert, handleClose }) => {
  const color = alert?.type === "success" 
  ? "green-100" 
  : alert?.type === "error" 
  ? "red-500"
  : "sky"
  ;

  if (alert && alert?.autoClose) {
    setTimeout(() => {
      handleClose();
    }, 9000);
  }

  return (
    <>
      {alert?.active && (
        <div x-data className={`bg-${color} p-8 w-full rounded mb-8`}>
          <div className="flex space-x-3 items-center">
            <div className="flex-1 leading-tight text-sm text-black font-medium">{alert.message}</div>
            <button type="button">
              <XCircleIcon className="w-6 h-6 text-gray-600" onClick={handleClose} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
