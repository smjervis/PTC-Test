interface NotificationProps {
  notification: string;
}

const NotificationMessage = ({ notification }: NotificationProps) => {
  return (
    <div className="bg-survey-green text-white font-bold w-full rounded-lg p-4 text-center">
      {notification}
    </div>
  );
};

export default NotificationMessage;
