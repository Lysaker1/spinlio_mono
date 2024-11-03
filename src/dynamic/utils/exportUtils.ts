export const sendNotification = (title: string, message: string) => {
  if (Notification.permission === 'granted') {
    new Notification(title, { body: message });
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        new Notification(title, { body: message });
      }
    });
  }
};

export const fetchFileWithToken = async (
  url: string,
  filename: string,
  token: string | null = null
) => {
  try {
    const res = await fetch(url, {
      ...(token ? { headers: { Authorization: token } } : {})
    });

    const blob = await res.blob();

    const modelFile = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.style.display = "none";
    link.href = modelFile;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
  } catch (e) {
    console.log(e);
  }
};